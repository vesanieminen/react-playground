"use strict";

require('vaadin-charts');
var React = require('react');
var HouseApi = require('../api/houseApi.js');
var House = require('./house/house.jsx');

var Home = React.createClass({
    getInitialState: function() {
		var data = HouseApi.getHouseData();
        return {
            data: data,
            descriptors: HouseApi.getDescriptors(),
            divisors: HouseApi.getDivisors()
        };
    },

    render: function() {
        return (
            <div>
                <House
                    data={this.state.data}
                    descriptors={this.state.descriptors}
                    divisors={this.state.divisors}
                    ids={['bt1', 'bt20', 'bt22']}
                />
            </div>
        );
    }

});

module.exports = Home;
