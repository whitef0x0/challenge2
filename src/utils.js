export default {
    stringToSlug(str){
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();
    
      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to   = "aaaaeeeeiiiioooouuuunc------";
      for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return str;
    },

    createPrimaryQuestionSchema(questionHeader, questionDescription, checkboxOptions, validationsArray){
      let that = this;
      let questionId = that.stringToSlug(questionHeader);

      checkboxOptions = checkboxOptions.map(function(element){
        element.value = that.stringToSlug(element.text);
        return element;
      });

      return {
        "questionId": questionId,
        "question": questionHeader,
        "text": questionDescription,
        "input" : {
          "type" : "customCheckbox",
          "options" : checkboxOptions,
        },
        "validations": validationsArray
      };
    },

    createSecondaryQuestionSchema(questionHeader, inputConfig, isRequired){
      let that = this;
      let questionId = that.stringToSlug(questionHeader);
      let validationsArray = [];

      if(inputConfig.hasOwnProperty("options")){
        inputConfig.options = inputConfig.options.map(function(element){
          element.value = that.stringToSlug(element.text);
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
        } else if (inputConfig.type === "weightInput"){
          validationsArray = [
            {
              type: "isNumeric",
              params: []
            }
          ]
        }
      }

      return {
        "questionId": questionId,
        "question": questionHeader,
        "input": inputConfig,
        "validations": validationsArray
      };
    }
}