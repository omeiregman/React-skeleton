var React = require('react');

var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

module.exports = createReactClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});
