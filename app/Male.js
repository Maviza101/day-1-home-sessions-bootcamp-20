'use strict';

var myHumanApp = require('../app/Human.js');
var Human = myHumanApp.Human;

module.exports.Male = function(name, age, gender) {
  Human.call(this, name, age);
  this.prototype = Object.create(Human.prototype);

  this.gender = gender;
  this.shout = function() {
  	return 'Yeah!!!';
  }
}


