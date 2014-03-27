'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('HeroesController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://localhost:3000/heroes').success(function(data) {
      $scope.heroes = data;
    });

    $scope.orderProp = '-hp';

    $scope.activate = function(heroId){
      // This should be a patch request
      // Does AngularJS support patch?
      $http.get('http://localhost:3000/heroes/' + heroId + '/activate.json').success(function(data){
        $scope.hero = data;
      });
    };

    $scope.deactivate = function(heroId){
      // This should be a patch request
      // Does AngularJS support patch?
      $http.get('http://localhost:3000/heroes/' + heroId + '/deactivate.json').success(function(data){
        $scope.hero = data;
      });
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
    $http.get('http://localhost:3000/cards/' + $routeParams.cardId + '.json').success(function(data){
      $scope.card = data;
    });
  }]);