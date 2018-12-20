import utils from './utils';

let createPrimaryQuestion = function(questionHeader, questionDescription, checkboxOptions){
  var questionId = utils.stringToSlug(questionHeader);

  checkboxOptions = checkboxOptions.map(function(element){
    element.value = utils.stringToSlug(element.text);
    return element;
  });

  return {
    "questionId": questionId,
    "question": questionHeader,
    "text": questionDescription,
    "input" : {
      "type" : "customCheckbox",
      "options" : checkboxOptions,
    }
  }
}

let createSecondaryQuestion = function(questionHeader, inputConfig, isRequired){
  let questionId = utils.stringToSlug(questionHeader);
  let validationsArray = [];

  if(inputConfig.hasOwnProperty("options")){
    inputConfig.options = inputConfig.options.map(function(element){
      element.value = utils.stringToSlug(element.text);
      return element;
    });
  }

  if(isRequired){
    if(inputConfig.type === "radioOptionsInput" || inputConfig.type.includes("checkbox")){
      let inputOptionValues = inputConfig.options.map(function(option){
        return {
          value: option.value
        };
      })

      validationsArray = [{
        type: "isIn",
        params: [
          inputOptionValues
        ]
      }]
    }
  }

  return {
    "questionId": questionId,
    "question": questionHeader,
    "input": inputConfig,
    "validations": validationsArray
  }
}

export default {
  "classes" : {
    "input" : "form-control",
    "select" : "form-control",
    "question" : "form-group",
    "radioListItem" : "btn btn-light radio",
    "radioList" : "clean-list",
    "checkboxInput" : "checkbox",
    "checkboxListItem" : "checkbox",
    "checkboxList" : "clean-list",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "questionPostText" : "push-top",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "sypmtoms-panel"
  }],
  "questionPanels" : [{
    "panelId" : "sypmtoms-panel",
    "panelHeader" : "This section asks about any sypmtoms you have been experiencing lately",
    "button" : {
      "text" : "Finish"
    },
    "questionSets" : [
      {
        "index" : 1,
        "questionSetId" : "legal-disclaimer-set",
      },
      {
        "index" : 2,
        "questionSetId" : "symptoms-set",
      }
    ]
  }],
  "questionSets" : [
    {
      "questionSetId" : "legal-disclaimer-set",
      "questionSetHeader" : "A note about the symptoms you are or have recently been feeling *",
      "questionSetText" : `A Prenuvo scan is a screen for cancer and many major diseases.
                          \nThe symptoms that you are feeling now or recently are important context for our review of the images that we acquire of your body. 
                          \nHowever, if you are feeling acute symptoms, it is important that you visit your family dotor to determine what is the best diagnostic approach 
                          that you should follow. A Prenuvo scan can diagnose many conditions, can provide additional insight to a diagnosis but it is not always the most diagnostically
                          relevant approach for any one particular condition.`,
      "questions" : [{
        "questionId" : "legal-disclaimer",
        "validations" : [{
          "type"    : "equals",
          "params" : [
            "accepted"
          ]
        }],
        "input" : {
          "type" : "customRadio",
          "options" : [{
            "text"  : "I understand this",
            "value" : "accepted",
          }]
        }
      }]
    }, 
    {
      "questionSetId" : "symptoms-set",
      "questions" : [
        createPrimaryQuestion(
          "General Symptoms",
          "Check any of the following symptoms that you are or have recently experienced",
          [
            {
              "text"  : "Recent weight gain",
            },
            {
              "text"  : "Recent weight loss",
            }
          ]
        ),
        createPrimaryQuestion(
          "Head Symptoms",
          "Check any of the following symptoms that you are or have recently experienced",
          [
            {
              "text" : "Frequent headaches",
              "conditionalQuestions": [
                createSecondaryQuestion(
                  "What are the most frequent locations of your headaches?",
                  {
                    type: "checkboxOptions",
                    options: [
                      {
                        "text"  : "Front",
                      },
                      {
                        "text"  : "Back",
                      },
                      {
                        "text"  : "Left side",
                      },
                      {
                        "text"  : "Right side",
                      }
                    ]
                  },
                  true
                ),
                createSecondaryQuestion(
                  "What is the frequency of your headaches",
                  {
                    type: "radioOptionsInput",
                    options: [
                      {
                        "text"  : "Daily",
                      },
                      {
                        "text"  : "2-3 times/week",
                      },
                      {
                        "text"  : "Weekly",
                      },
                      {
                        "text"  : "Less frequent",
                      }
                    ]
                  },
                  true
                )
              ]
            },
            {
              "text"  : "Recent weight loss",
            }
          ]
        )
      ]
    },
  ]
};
