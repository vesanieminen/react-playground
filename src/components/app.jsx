/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header.jsx');
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
                {this.props.children}
			</div>
		);
	}
});

module.exports = App;

