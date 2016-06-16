var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(actionName){
    this.dispatch({
        source: 'VIEW_ACTION',
        action: actionName
    });
};

module.exports = AppDispatcher;