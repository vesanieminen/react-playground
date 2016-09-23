"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render: function() {
		return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="row">
                        <div className="md-col-12">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/graph">Graph</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
		);
	}
});

module.exports = Header;

