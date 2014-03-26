'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('HeroesController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://localhost:3000/heroes').success(function(data) {
      $scope.heroes = data;
    });

    $scope.orderProp = '-hp';

    $scope.makeActive = function(hero){
      hero.active = true;
      hero.$save();
    };
  }]);

myAppControllers.controller('HeroController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://localhost:3000/heroes/' + $routeParams.heroId + '.json').success(function(data){
      $scope.hero = data;
    });
  }]);

myAppControllers.controller("CardsController", ['$scope', '$http',
  function($scope, $http){
    $http.get('http://localhost:3000/cards/cards.json').success(function(data){
      $scope.cards = data;
    });
  }]);

myAppControllers.controller('CardController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('http://localhost:3000/cards/' + $routeParams.cardName + '.json').success(function(data){
      $scope.card = data;
    });
  }]);