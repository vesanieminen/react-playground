'use strict';

var React = require('react');

var DataSeries = React.createClass( {
	render: function() {
		var divisor = this.props.divisors[this.props.id];
		var key = this.props.id;
		var data = this.props.data;
		var dataPoints = { values: []};
		this.props.data.forEach(function(entry) {
			//dataPoints.push(entry[key]);
			dataPoints.values.push([ Date.parse(entry['date'] + " " + entry['time']), entry[key] ]);
		}, this);
		console.log(dataPoints);
		console.log(dataPoints.values.map(JSON.stringify).join(','));
		//var createDataPoint = function(item) {
        //    return "" + item[key] / divisor +","
		//};
		return(
			<data-series name={this.props.name}>
				<data>{dataPoints.values.map(JSON.stringify).join(',')}</data>
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
