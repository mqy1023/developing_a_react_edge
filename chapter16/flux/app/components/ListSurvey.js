var React = require('react');

var ListSurvey = React.createClass({
    render: function(){
        var styles = {
            surveyListStyle: {
                paddingLeft: 0,
                listStyleType: "none"
            },
            listGroup: {
                margin: '5px 0',
                borderRadius: 5
            },
            deleteItem: {
                fontSize: 20,
                float: "left",
                position: "absolute",
                top: 12,
                left: 6,
                cursor: "pointer",
                color: "rgb(222, 79, 79)"
            },
            surveyItem: {
                paddingLeft: 20,
                fontSize: 17
            }
        };
        var listItems = this.props.items.map(function(item, index){
            return (
                <li key={index} className="list-group-item" style={styles.listGroup}>
                    <span
                        className="glyphicon glyphicon-remove"
                        style={styles.deleteItem}
                        onClick={this.props.delete.bind(null, index)}>
                    </span>
                    <span style={styles.surveyItem}>
                        {item}
                    </span>
                </li>
            )
        }.bind(this));
        return (
            <ul style={styles.surveyListStyle}>
                {listItems}
            </ul>)
    }
});

module.exports = ListSurvey;