'use strict';

var frontEnd2App = angular
  .module('frontEnd2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'appControllers',
    'appDirectiveSet',
    'appServices',
    'uploadDirective',
    'angularFileUpload'
  ]);

  frontEnd2App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/midle-body.html',
        controller: 'MidleCtrl'
      })
      .when('/products', {
        templateUrl: '/views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/postYourAdds', {
        templateUrl: '/views/post_your_add.html',
        controller: 'postYourAdds'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
