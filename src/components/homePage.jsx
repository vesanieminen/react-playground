"use strict";

var React = require('react');
var House = require('./house/house.jsx');

var Home = React.createClass({

render: function() {
    return (
        <div>
            <House />
        </div>
    );
}

});

module.exports = Home;
