'use strict';

angular.module('angular1FrothApp')
	.controller('DetailCtrl', function ($scope, $routeParams, albumFactory) {
		$scope.passedId = $routeParams.albumId;

		albumFactory.getTracks($routeParams.albumId).then(function(data){
			console.dir(data);
			$scope.albumTitle = data[0].Album;
			$scope.albumYear = data[0].Year;
			$scope.albumTracks = data;
		});
	});