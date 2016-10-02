'use strict';

require('../../../bower_components/vaadin-charts/react');
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
				<vaadin-line-chart>
				  <chart-title>Fibonacci</chart-title>
				  <x-axis><title>Index</title></x-axis>
				  <y-axis><title>Value</title></y-axis>
				  <data-series>
					<data>0, 1, 1, 2, 3, 5, 8, 13</data>
				  </data-series>
				</vaadin-line-chart>
            </div>
            );
    }

});

module.exports = House;
