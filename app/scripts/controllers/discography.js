'use strict';

/**
 * @ngdoc function
 * @name angular1FrothApp.controller:DiscographyCtrl
 * @description
 * # DiscographyCtrl
 * Controller of the angular1FrothApp
 */
angular.module('angular1FrothApp')
  .controller('DiscographyCtrl', function ($scope, $location, albumFactory) {

  	albumFactory.getData().then(function(data){
  		$scope.albums = data;
  	});

  	$scope.somethingClicked = function(id){
  		var path = '/discography/' + id;
  		console.log('Path: ' + path); 
  		$location.path(path);
  	};
  });
