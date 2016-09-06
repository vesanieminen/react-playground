'use strict';

var React = require('react');
var Input = require('../common/textInput.jsx');
var Link = require('react-router').Link;

var AuthorForm = React.createClass({

render: function() {
    return (
        <form>
			<h1>Manage Author</h1>
			<Input
				name="firstName"
				label="First Name"
				value={this.props.author.firstName}
				onChange={this.props.onChange}
				error={this.props.errors.firstName} />

			<Input
				name="lastName"
				label="Last Name"
				value={this.props.author.lastName}
				onChange={this.props.onChange}
				error={this.props.errors.lastName} />

            <Link to="/authors" className="btn btn-default">Back</Link>
			<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
		</form>
    );
}

});

module.exports = AuthorForm;

