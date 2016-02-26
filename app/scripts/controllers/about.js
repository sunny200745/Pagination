'use strict';

/**
 * @ngdoc function
 * @name devWorkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devWorkApp
 */
angular.module('devWorkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
