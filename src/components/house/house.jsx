'use strict';

require('vaadin-charts');
var React = require('react');
var HouseApi = require('../../api/houseApi.js');

var House = React.createClass({
    getInitialState: function() {
		var data = HouseApi.getHouseData().slice(0, 10);
        return {
            data: data,
            descriptors: HouseApi.getDescriptors(),
            divisors: HouseApi.getDivisors()
        };
    },
    render: function() {
		var createDataPoint = function(item) {
            return "" + item.bt1 / 10.0 +","
		};
        return (
            <div>
				<vaadin-line-chart>
				  <chart-title>House Graphs</chart-title>
				  <x-axis><title>Time</title></x-axis>
				  <y-axis><title>Temperature</title></y-axis>
				  <data-series name="House Temperature">
					<data>{this.state.data.map(createDataPoint)}</data>
				  </data-series>
				</vaadin-line-chart>
            </div>
            );
    }

});

module.exports = House;
