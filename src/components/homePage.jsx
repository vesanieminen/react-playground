"use strict";

var React = require('react');

var Home = React.createClass({

render: function() {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, React Router, and Flux for ultra-responseive web apps.</p>
            <p><a className="btn btn-primary btn-lg" role="button">Learn More</a></p>
        </div>
    );
}

});

module.exports = Home;
