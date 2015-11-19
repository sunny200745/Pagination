'use strict';


/**
 * @ngdoc service
 * @name devWorkApp.Data
 * @description
 * # Data
 * Service in the devWorkApp.
 */
angular.module('devWorkApp')
  .service('data',[ '$http', function($http){

    this.products = function(callback){
    	$http({
          method: 'GET',
          url: './json/products.json'
        }).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          console.debug("Inside Success of products.json , here  status =>"+status+" headers =>"+JSON.stringify(headers())+" config =>"+JSON.stringify(config));
          callback(data);

        }).
        error(function(data, status, headers, config) {
        	console.debug("Inside Error of products.json , here  status =>"+status+" headers =>"+JSON.stringify(headers())+" config =>"+JSON.stringify(config));
          
          callback(false);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };
  }]);
