'use strict';

var React = require('react');

var DataSeries = React.createClass( {
	render: function() {
		var divisor = this.props.divisors[this.props.key];
		var key = this.props.key;
		var data = this.props.data;
		var createDataPoint = function(item) {
            return "" + item[data[key]] / divisor +","
		};
		return(
			<data-series name={this.props.name}>
				<data>{this.props.data.map(createDataPoint)}</data>
			</data-series>
		);
	}
});

var House = React.createClass({
	getDataSeries: function(key) {
		var name = this.props.descriptors[key].description;
		return (
			<DataSeries key={key} name={name} divisors={this.props.divisors} data={this.props.data} />
		);
	},
    render: function() {

        return (
            <div>
				<vaadin-line-chart>
				  <chart-title>House Graphs</chart-title>
				  <x-axis type="datetime"><title>Time</title></x-axis>
				  <y-axis min="0"><title>Temperature (°C)</title></y-axis>
						{this.props.keys.map(this.getDataSeries)}
				  <plot-options>
					<line>
						<marker enabled="false"> </marker>
					</line>
				  </plot-options>
				</vaadin-line-chart>
            </div>
            );
    }

});

module.exports = House;
