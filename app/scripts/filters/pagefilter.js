'use strict';

/**
 * @ngdoc filter
 * @name devWorkApp.filter:pageFilter
 * @function
 * @description
 * # pageFilter
 * Filter in the devWorkApp.
 */
angular.module('devWorkApp')
  .filter('pageFilter', function () {
    return function(input, start) {
      start = +start; 
      return input.slice(start);
    }
  });
