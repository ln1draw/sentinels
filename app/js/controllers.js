'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('HeroesController', function($scope){
  $scope.heroes = [
    {
      'name': 'Legacy',
      'hp': 32,
      'status': 'none'
    },
    {
      'name': 'Unity',
      'hp': 26,
      'status': 'none'
    }
  ];

  $scope.orderProp = '-hp';
});

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);