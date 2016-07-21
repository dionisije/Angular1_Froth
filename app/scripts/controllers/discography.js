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
  	$scope.albums = [
  {
    "Album": "20th Century Froth",
    "Year": 2000,
    "Catalogue": "DVDCD1"
  },
  {
    "Album": "Froth 2001",
    "Year": 2001,
    "Catalogue": "DVDCD2"
  },
  {
    "Album": "Froth! As You Mean To Go On",
    "Year": 2002,
    "Catalogue": "DVDCD3"
  }];
  	// $scope.albums = albumFactory.getData().then(function(data){
  	// 	console.dir(data);
  	// 	return data;
  	// })

  	$scope.somethingClicked = function(id){
  		console.log(id + ' row clicked.'); 
  	};
  });
