var React = require('react');
var ReactDOM = require('react-dom');
var TakeSurveyCtrl = require('./components/TakeSurveyCtrl');

var App = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <TakeSurveyCtrl />
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
)