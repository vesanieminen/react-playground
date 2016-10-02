"use strict"

require('vaadin-charts'); // used in house.jsx
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var routes = require('./routes');

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));
