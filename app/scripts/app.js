'use strict';

/**
 * @ngdoc overview
 * @name devWorkApp
 * @description
 * # devWorkApp
 *
 * Main module of the application.
 */
angular
  .module('devWorkApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
