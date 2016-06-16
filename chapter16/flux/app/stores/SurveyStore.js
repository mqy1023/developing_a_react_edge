var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
//var objectAssign = require('react/lib/Object.assign');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
    list: []
};

var saveItem = function(item){
    _store.list.push(item);
};

var deleteItem = function(index){
    _store.list.splice(index, 1);
}

var SurveyStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getSurveyList: function(){
        return _store.list;
    },
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case AppConstants.ADD_ITEM:
            saveItem(action.data);
            SurveyStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_ITEM:
            deleteItem(action.data);
            SurveyStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = SurveyStore;
