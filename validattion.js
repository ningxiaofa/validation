;
var validateResult = 0;
$.extend({
    //Validate all data length and type
    validateDataLengthAndType: function (selector, length, type, messageSelector){
    console.log('validateDataLengthAndType');
    var pattern = /^[0-9]*$/;
    var selectorElement= $('#' + selector);
    var messageSelector = '.' + selector + messageSelector;
    switch(type)
    {
        case 'int':
            if(!pattern.test(selectorElement.val()) || parseInt(selectorElement.val()) >  2147483647){
                $(messageSelector).show();
                validateResult++;
            }
            break;
        case 'tinyint':
            switch(length){
                case 1:
                    if((selectorElement.val() !== '0' && selectorElement.val() !== '1')){
                        $(messageSelector).show();
                        validateResult++;
                    }
                    break;
                case 4:
                    if(!pattern.test(selectorElement.val()) || selectorElement.val() > 255){
                        $(messageSelector).show();
                        validateResult++;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'varchar':
            if(typeof selectorElement.val() !== 'string' || selectorElement.val().length > length){
                console.log(123);
                $(messageSelector).show();
                validateResult++;
            }
            break;
        case 'char':
            if(typeof selectorElement.val() !== 'string' || selectorElement.val().length !== length){
                $(messageSelector).show();
                validateResult++;
            }
            break;
        default:
            console.log('error: no this type !');
            break;
    }
    return validateResult;
},

    //get all form input data
    getInputsData: function(obj){
        var allDataList = {};
        for (var key in obj){
            //key should be id selector
            allDataList = { key : $('#' + obj[key]).val() };
        }
        return allDataList;
        console.log(allDataList);
    },

    //reset validation  Selector: inputs' parent element
    resetValidation: function(selector){
        validateResult = 0;
        $(selector + ' p').hide();
    },
})