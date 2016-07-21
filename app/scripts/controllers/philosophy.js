'use strict';

/**
 * @ngdoc function
 * @name angular1FrothApp.controller:PhilosophyCtrl
 * @description
 * # PhilosophyCtrl
 * Controller of the angular1FrothApp
 */
angular.module('angular1FrothApp')
  .controller('PhilosophyCtrl', function ($scope, albumFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.factoryData = {};
    $scope.getAlbums = function() {
      albumFactory.getData().then(function(data){
        console.dir(data);
        $scope.factoryData = data;
      });
    };
  });
