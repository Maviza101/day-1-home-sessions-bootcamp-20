'use strict';

function Human(name, age) {
	this.name = name;
	this.age = age;
	this.shout = function() {
		return 'Yippee!!!';
	}
}

module.exports = Human;
