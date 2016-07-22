'use strict';

angular.module('angular1FrothApp')
	.controller('DetailCtrl', function ($scope, $routeParams, albumFactory) {
		$scope.passedId = $routeParams.albumId;

		albumFactory.getAlbum($routeParams.albumId).then(function(data){
			$scope.album = data;
		});
	});