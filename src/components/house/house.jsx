'use strict';

var React = require('react');
var HouseApi = require('../../api/houseApi.js');

var House = React.createClass({
    getInitialState: function() {
        HouseApi.getHouseData();
        return {
            data: []
        };
    },

    render: function() {
        return (
            <div>
                <h1>Yo Graphian!</h1>
            </div>
            );
    }

});

module.exports = House;
