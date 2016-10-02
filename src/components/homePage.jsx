"use strict";

require('vaadin-charts');
var React = require('react');
var HouseApi = require('../api/houseApi.js');
var House = require('./house/house.jsx');

var Options = React.createClass({
    render: function() {
        return (
            <option value={this.props.opt}>{this.props.description}</option>
        );
    }
});

var Home = React.createClass({
    getInitialState: function() {
        return {
            data: HouseApi.getHouseData(),
            descriptors: HouseApi.getDescriptors(),
            divisors: HouseApi.getDivisors(),
            ids: ["bt1", "bt20", "bt22"]
        };
    },
    onChange: function(e) {
        //this.setState({ids: [e.target.value]});
		var options = e.target.options;
		var value = [];
		for (var i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
			  value.push(options[i].value);
			}
		}
		this.setState({ids: value});
    },
    render: function() {
        var items = [];
        var id = 0;
        for (var key in this.state.descriptors) {
          if (this.state.descriptors.hasOwnProperty(key)) {
              items.push(key);
            }
        }
        return (
            <div>
                <House
                    data={this.state.data}
                    descriptors={this.state.descriptors}
                    divisors={this.state.divisors}
                    ids={this.state.ids}
                />
                <select multiple={true} onChange={this.onChange} value={this.state.ids}>
                    <option value="bt1">Outdoor Temperature</option>
                    <option value="bt2">Heating Medium Flow</option>
                    <option value="bt3">Heating Medium Return</option>
                    <option value="bt6">Hot Water Charging</option>
                    <option value="bt7">Hot Water Top</option>
                    <option value="bt16">Evaporator</option>
                    <option value="bt18">Compression Operation</option>
                    <option value="bt19">Immersion Heater Operation</option>
                    <option value="bt20">Exhaust Air</option>
                    <option value="bt21">Extract Air</option>
                    <option value="bt22">Supply Air</option>
                    <option value="calc_supply">Calculated Flow Temp</option>
                    <option value="bt1_avg">Avg. Outdoor Temp</option>
                </select>
            </div>
        );
    }

});


// TODO: make this work:
//{items.map(function(item) {
//    <Options opt={item} description={item} />
//})}

module.exports = Home;
