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

    var _url = 'http://frothmusic.co.uk/frothmusic/ws.php?set=all';
//    var _url = '/api/albums.json';
//    var _url = 'https://api.myjson.com/bins/4yiht';
//    var _url =  'https://itunes.apple.com/search?term='+'Kaiser Chiefs'+'&limit=2000'
//    var _url =  'https://api.myjson.com/bins/vxc1'

    return {
      getData: function() {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          responseType: 'json',
          url: _url
        }).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject('There was an error');
        });
        return deferred.promise;
      },
      getAlbum: function(id) {
        return this.getData().then(function(data){
          return data.find(function(albums){return albums.Catalogue===id;});
        });
      }
    };
  });
