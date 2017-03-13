'use strict';

module.exports = {
  getPrimes: function(num) {
    // Validate input.
    var typeOfArg = typeof num;
    if (typeOfArg != 'number') {
      return 'Argument not a number';
    }
    if (num % 1 != 0) {
      return 'Number argument is not an integer';
    }
    if (num < 1) {
      return 'Integer argument must be greater than 0';
    }
    if (num == 1) {
      return [];
    }

    var listOfPrimes = [];
    // 2 is the only even number that's prime. All others are skipped.
    /* Thanks to a Wikipedia article (source link below), I read that 
      we can check the primality of a number n by dividing it by all 
      integers k = 1, 2... squareroot(n). Nb: if squareroot is fractional, 
      we use its floor value.
      Source: https://en.m.wikipedia.org/wiki/Primality_test#Simple_methods
    */
    listOfPrimes.push(2);
    if (num > 2) {
      listOfPrimes.push(3);
    }
    var isOddNumberPrime = function(someInt) {
        var squareroot = Math.sqrt(someInt);
        // Every number that has an integer squareroot is not prime.
        if (squareroot % 1 == 0) {
          return false;
        }
        var floorSquareroot = Math.trunc(squareroot);
        var isPrime = true;
        // Remember: we're only testing odd numbers.
        for (var divisor = 3; divisor <= floorSquareroot; divisor += 2) {
          if (someInt % divisor == 0) {
            isPrime = false;
            break;
          }
        }
        return isPrime;
    }
    for (var i = 5; i <= num; i += 2) {
      if (isOddNumberPrime(i)) {
        listOfPrimes.push(i);
      }
    }
    return listOfPrimes;
  }
/*
  // Decided to declare this as a public method because checking for 
primality is a common task.
  isPrime: function(num) {
    // Validate input.
    var typeOfArg = typeof num;
    if (typeOfArg != 'number') {
      throw ;
    }
    if (num % 1 != 0) {
      return "Number must be an integer';
    }

    if (num < 1) {
      return 'Integer must be greater than 0';
    }
    if (num == 1) {
      return false;
    }
  }*/
}
