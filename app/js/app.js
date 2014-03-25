'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/heroes',{
        templateUrl: 'partials/heroes.html',
        controller: 'HeroesController'
      }).

      when('/heroes/:heroName', {
        templateUrl: 'partials/hero.html',
        controller: 'HeroController'
      }).
      
      when('/cards', {
        templateUrl: 'partials/cards.html',
        controller: 'CardsController'
      }).
      
      when('/cards/:cardName', {
        templateUrl: 'partials/card.html',
        controller: 'CardController'
      }).
      
      otherwise({
        redirectTo: '/heroes'
      });
}]);
