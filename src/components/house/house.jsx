'use strict';

var React = require('react');

var DataSeries = React.createClass( {
	getDate: function(string) {
		var array = string.split(/[^0-9]/);
		var date = new Date(array[0], array[1] - 1, array[2], array[3], array[4], array[5]);
		return date.getTime();
	},
	render: function() {
		var divisor = this.props.divisors[this.props.id];
		var key = this.props.id;
		var data = this.props.data;
		var dataPoints = { values: []};
		this.props.data.forEach(function(entry) {
			dataPoints.values.push([ this.getDate(entry['date'] + " " + entry['time']), entry[key] / divisor ]);
		}, this);
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
            <div style={{height: "600px"}}>
				<vaadin-line-chart>
                    <exporting enabled="false" />
				  <chart-title>House Graphs</chart-title>
					<subtitle>2016 September</subtitle>
				  <x-axis type="datetime"><title>Time</title></x-axis>
				  <y-axis><title>Temperature (°C)</title></y-axis>
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
