'use strict';

/**
 * @ngdoc filter
 * @name angular1FrothApp.filter:secondsToDate
 * @function
 * @description
 * # secondsToDate
 * Filter in the angular1FrothApp.
 */
angular.module('angular1FrothApp')
  .filter('secondsToDate', function () {
    return function (seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  });
