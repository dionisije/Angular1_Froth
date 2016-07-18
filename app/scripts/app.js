'use strict';

/**
 * @ngdoc overview
 * @name angular1FrothApp
 * @description
 * # angular1FrothApp
 *
 * Main module of the application.
 */
angular
  .module('angular1FrothApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        controller: 'PhilosophyCtrl',
        controllerAs: 'Philosophy'
      })
      .when('/discography', {
        templateUrl: 'views/discography.html',
        controller: 'DiscographyCtrl',
        controllerAs: 'Discography'
      })
      .when('/factory', {
        templateUrl: 'views/factory.html',
        controller: 'FactoryCtrl',
        controllerAs: 'Factory'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
