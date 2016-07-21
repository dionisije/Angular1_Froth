'use strict';

/**
 * @ngdoc service
 * @name angular1FrothApp.albumFactory
 * @description
 * # albumFactory
 * Factory in the angular1FrothApp.
 */
angular.module('angular1FrothApp')
  .factory('albumFactory', function ($http, $q) {
    // Service logic
    // ...

    var _url = '/api/kc.json';

    return {
      getData: function() {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          responseType: 'json',
//          url: 'https://itunes.apple.com/search?term='+'Kaiser Chiefs'+'&limit=2000'
//          url: 'https://api.myjson.com/bins/vxc1'
          url: _url
        }).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject('There was an error');
        });
        return deferred.promise;
      }
    };
  });
