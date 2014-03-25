'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('HeroesController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('heroes/heroes.json').success(function(data) {
      $scope.heroes = data;
    });

    $scope.orderProp = '-hp';
  }]);

myAppControllers.controller('HeroController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('heroes/' + $routeParams.heroName + '.json').success(function(data){
      $scope.hero = data;
    });
  }]);

myAppControllers.controller("CardsController", ['$scope', '$http',
  function($scope, $http){
    $http.get('cards/cards.json').success(function(data){
      $scope.cards = data;
    });
  }]);

myAppControllers.controller('CardController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('cards/' + $routeParams.cardName + '.json').success(function(data){
      $scope.card = data;
    });
  }]);