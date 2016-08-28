'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var routes = (
  <Route path="/" component={require('./components/app.jsx')}>
    <IndexRoute component={require('./components/homePage.jsx')} />
    <Route path="/authors" component={require('./components/authors/authorPage.jsx')} />
    <Route path="/about" component={require('./components/about/aboutPage.jsx')} />
  </Route>
)

module.exports = routes;
