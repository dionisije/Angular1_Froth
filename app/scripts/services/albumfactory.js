'use strict';

/**
 * @ngdoc service
 * @name angular1FrothApp.albumFactory
 * @description
 * # albumFactory
 * Factory in the angular1FrothApp.
 */
angular.module('angular1FrothApp')
  .factory('albumFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
