'use strict';

module.exports = {
	dataTypes: function(arg) {
    var argType = typeof arg;

    // Note: can't use == here. See the following for details:
    // https://ariya.io/2014/05/the-curious-case-of-javascript-nan
    if (argType == 'number' && isNaN(arg)) {
      return undefined;
    }

		switch (argType) {
			case 'string':
				return arg.length;
        break;

      // Both null and Array will have type 'object', so they're handled in the same case.
			case 'object':
        if (arg == null) {
          return 'no value';
        }
        else if (Array.isArray(arg)) {
          // If there's no third element, Javascript will return undefined, rather than throw an exception.
          return arg[2];
        }
        break;
			case 'undefined':
		    return 'no value';
        break;

      case 'boolean':
        return arg;
        break;

      case 'number':
        if (arg < 100) {
          return 'less than 100';
        }
        else if (arg > 100) {
          return 'more than 100';
        }
        else {
          return 'equal to 100';
        }
        break;

      case 'function':
        return arg(true);
        break;
		}
	}
}