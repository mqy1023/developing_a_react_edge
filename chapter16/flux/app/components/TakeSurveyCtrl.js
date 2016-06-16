var React = require('react');
var TakeSurvey = require('./TakeSurvey');
var ListSurvey = require('./ListSurvey');
var SurveyStore = require('../stores/SurveyStore');
var SurveyActions = require('../actions/SurveyActions');

var TakeSurveyCtrl = React.createClass({
    getInitialState: function(){
        return {
            surveyList: SurveyStore.getSurveyList()
        }
    },
    componentDidMount: function(){
        SurveyStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        SurveyStore.removeChangeListener(this._onChange);
    },
    handleSurveySave: function(newItem){
        SurveyActions.saveItem(newItem);
    },
    handleSurveyDelete: function(index){
        SurveyActions.deleteItem(index);
    },
    _onChange: function(){
        this.setState({
            surveyList: SurveyStore.getSurveyList()
        })
    },
    render: function(){
        return (
            <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                    <h3 className="text-center"> Survey List </h3>
                    <TakeSurvey onSave={this.handleSurveySave}/>
                    <ListSurvey items={this.state.surveyList} delete={this.handleSurveyDelete}/>
                 </div>
            </div>
        )
    }
});

module.exports = TakeSurveyCtrl;