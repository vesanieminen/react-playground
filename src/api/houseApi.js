"use strict";

var houseData = require('./houseData.js').data;
var descriptors = require('./houseData.js').descriptors;
var divisors = require('./houseData.js').divisors;
var _ = require('lodash');

var HouseApi = {
	getHouseData: function() {
		return _clone(houseData); 
	},
	getHouseDataById: function(id) {
		var row = _.find(houseData, {id: id});
		return _clone(row);
	},
	getDescriptors: function() {
		return _clone(descriptors); 
	},
	getDivisors: function() {
		return _clone(divisors); 
	}
};


var houseID = 0;

var _generateId = function(row) {
	return houseID++;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

module.exports = HouseApi;
