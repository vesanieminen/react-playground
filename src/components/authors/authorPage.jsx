'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi.js');
var AuthorList = require('./authorList.jsx');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({

    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentDidMount: function() {
        if( this.isMounted() ) {
            this.setState( {authors: AuthorApi.getAllAuthors()} );
        }
    },
    _onChange: function() {
        this.setState( {authors: AuthorApi.getAllAuthors()} );
    },
    render: function() {

        return (
            <div>
                <h1>AuthorPage</h1>
                <Link to="author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} onChange={this._onChange}/>
            </div>
        );
    }

});

module.exports = AuthorPage;
