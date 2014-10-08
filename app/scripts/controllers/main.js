'use strict';

/**
 * @ngdoc function
 * @name devWorkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devWorkApp
 */
angular.module('devWorkApp')
  .controller('MainCtrl',['$scope','data', function ($scope,data) {
    
    data.products(function(d){
      if(d){
        $scope.visibleData = d;
      }
    });

    $scope.visibleData = [];


    $scope.paginationView = "./views/paginationView.html";
    $scope.currentPage = 0;
    $scope.pageSize = 7;
    
    $scope.next = function(){
      if($scope.currentPage >= $scope.visibleData.length/$scope.pageSize - 1){
        return false;
      }
      $scope.currentPage += 1;      
    };

    $scope.prev = function(){
      if($scope.currentPage === 0){
        return false;
      }
      $scope.currentPage -= 1;

    };

    $scope.numberOfPages=function(){
      return Math.ceil($scope.visibleData.length/$scope.pageSize);
    };

    $scope.getNumber = function(num) {
      return new Array(num());
    };

    $scope.onCLickPagedNumber = function(number){
      $scope.currentPage = number;
    };

  }]);
