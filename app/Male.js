'use strict';

function Human(name, age) {
	this.name = name;
	this.age = age;
	this.shout = function() {
		return 'Yippee!!!';
	}
}

function Male(name, age, gender) {
  Human.call(this, name, age);
  Male.prototype = Object.create(Human.prototype);

  this.gender = gender;
  this.shout = function() {
  	return 'Yeah!!!';
  }
}

module.exports = Male;
