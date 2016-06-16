var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/AppConstants');

var SurveyActions = {
    saveItem: function(item){
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: item
        });
    },
    deleteItem: function(index){
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        })
    }
};

module.exports = SurveyActions;