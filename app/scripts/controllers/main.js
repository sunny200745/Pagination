'use strict';

/**
 * @ngdoc function
 * @name devWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devWorkApp
 */
angular.module('devWorkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
