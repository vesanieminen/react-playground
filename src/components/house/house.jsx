'use strict';

var React = require('react');

var DataSeries = React.createClass( {
	render: function() {
		var divisor = this.props.divisors[this.props.id];
		var key = this.props.id;
		var data = this.props.data;
		var createDataPoint = function(item) {
			console.log(item[key]);
            return "" + item[key] / divisor +","
		};
		return(
			<data-series name={this.props.name}>
				<data>{this.props.data.map(createDataPoint)}</data>
			</data-series>
		);
	}
});

var House = React.createClass({
	getDataSeries: function(id) {
		var name = this.props.descriptors[id].description;
		return (
			<DataSeries key={id} id={id} name={name} divisors={this.props.divisors} data={this.props.data} />
		);
	},
    render: function() {

        return (
            <div>
				<vaadin-line-chart>
				  <chart-title>House Graphs</chart-title>
				  <x-axis type="datetime"><title>Time</title></x-axis>
				  <y-axis min="0"><title>Temperature (°C)</title></y-axis>
						{this.props.ids.map(this.getDataSeries)}
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
