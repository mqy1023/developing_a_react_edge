var React = require('react');

var TakeSurvey = React.createClass({
    getInitialState: function() {
        return {result: ''};
    },
    handleChange: function(e){
        this.setState({result: e.target.value});
    },
    handleSubmit: function(e){
        this.props.onSave(this.state.result);
        this.setState({result: ''});
    },
    render: function(){
        return ( <div className='survey'>
            <input type="text" className="form-control" value={this.state.result} placeholder="please input survey" onChange={this.handleChange}  />
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Save</button>
        </div>)
    }
});

module.exports = TakeSurvey;