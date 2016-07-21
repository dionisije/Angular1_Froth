'use strict';

angular.module('angular1FrothApp')
	.controller('DetailCtrl', function ($scope, $routeParams) {
		console.log('albumId: ' + $routeParams.albumId);
		$scope.passedId = $routeParams.albumId;
	});