'use strict';

module.exports.Human = function(name, age) {
	this.name = name;
	this.age = age;
	this.shout = function() {
		return 'Yippee!!!';
	}
}
