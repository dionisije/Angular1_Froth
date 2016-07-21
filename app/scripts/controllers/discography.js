'use strict';

/**
 * @ngdoc function
 * @name angular1FrothApp.controller:DiscographyCtrl
 * @description
 * # DiscographyCtrl
 * Controller of the angular1FrothApp
 */
angular.module('angular1FrothApp')
  .controller('DiscographyCtrl', function ($scope, albumFactory) {

  	albumFactory.getData().then(function(data){
  		console.dir(data);
  		$scope.albums = data;
  	});

  	$scope.somethingClicked = function(id){
  		console.log(id + ' row clicked.'); 
  	};
  });
