import utils from './utils';

export default {
  "classes" : {
    "form": "row",
    "questionPanelHeaderContainer": "card",
    "questionPanelHeaderText": "card-body",

    "questionSetHeaderContainer": "card",
    "questionSetHeader": "card-body",
    "questionSetText": "card-body",

    "questionSet": "questionSetContainer",
    "label": "h4",
    "question": "card-body questionContainer",
    "questionText": "pl-4 pt-3",

    "radioList" : "pl-4",
    "radioListItem" : "custom-control custom-radio btn btn-light",
    "radioInput" : "checkboxContainer",
    "radio": "custom-control-input",
    "radioLabel" : "custom-control-label",

    "checkboxList" : "pl-4",
    "checkboxListItem" : "custom-control custom-checkbox btn btn-light",
    "checkboxInput" : "checkboxContainer",
    "checkbox": "custom-control-input",
    "checkboxLabel" : "custom-control-label",


    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "questionPostText" : "push-top",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "symptoms-panel"
  }],
  "questionPanels" : [{
    "panelId" : "symptoms-panel",
    "panelHeader" : "This section asks about any symptoms you have been experiencing lately",
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
      "questions" : [{
        "questionId" : "legal-disclaimer",
        "question": "A note about the symptoms you are or have recently been feeling",
        "text": `
            A Prenuvo scan is a screen for cancer and many major diseases.
            \nThe symptoms that you are feeling now or recently are important context for our review of the images that we acquire of your body. 
            \nHowever, if you are feeling acute symptoms, it is important that you visit your family dotor to determine what is the best diagnostic approach 
            that you should follow. A Prenuvo scan can diagnose many conditions, can provide additional insight to a diagnosis but it is not always the most diagnostically
            relevant approach for any one particular condition.`,
        "validations" : [{
          "type"    : "hasAccepted"
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
        utils.createPrimaryQuestionSchema(
          "General Symptoms",
          "Check any of the following symptoms that you are or have recently experienced",
          [
            {
              "text"  : "Recent weight gain",
              "conditionalQuestions": [
                utils.createSecondaryQuestionSchema(
                  "How much weight did you gain?",
                  {
                    type: "weightInput"
                  },
                  true
                ),
              ]
            },
            {
              "text"  : "Recent weight loss",
              "conditionalQuestions": [
                utils.createSecondaryQuestionSchema(
                  "How much weight did you lose?",
                  {
                    type: "weightInput",
                  },
                  true
                ),
              ]
            }
          ]
        ),
        utils.createPrimaryQuestionSchema(
          "Head Symptoms",
          "Check any of the following symptoms that you are or have recently experienced",
          [
            {
              "text" : "Frequent headaches",
              "conditionalQuestions": [
                utils.createSecondaryQuestionSchema(
                  "What are the most frequent locations of your headaches?",
                  {
                    type: "customCheckbox",
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
                utils.createSecondaryQuestionSchema(
                  "What is the frequency of your headaches",
                  {
                    type: "customRadio",
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
              "text" : "Frequent migraines",
              "conditionalQuestions": [
                utils.createSecondaryQuestionSchema(
                  "What are the most frequent locations of your migraines?",
                  {
                    type: "customCheckbox",
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
                utils.createSecondaryQuestionSchema(
                  "What is the frequency of your migraines",
                  {
                    type: "customRadio",
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
              "text" : "Head injuries or concussion"
            },
            {
              "text" : "Eye pain"
            },
            {
              "text" : "Earache or ear drainage"
            },
            {
              "text" : "Ringing in the ears"
            },
            {
              "text" : "Hearing loss"
            },
            {
              "text" : "Frequent colds"
            },
            {
              "text" : "Frequent hayfever"
            },
            {
              "text" : "Sinus pain"
            },
            {
              "text" : "Blurred vision"
            },
          ],
          []
        )
      ]
    },
  ]
};
