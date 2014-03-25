'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('HeroesController', ['$scope', '$http', 
  function($scope, $http){
    $http.get('heroes/heroes.json').success(function(data){
      $scope.heroes = data;
    });
    $scope.orderProp = '-hp';
}]);

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);