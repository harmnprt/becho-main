'use strict';

var appDirectiveSet = angular.module('appDirectiveSet', []);

appDirectiveSet.directive('setLocation', function (){
    return {
      restrict: 'E',
      templateUrl: '/views/setLocation.html',
    };
  });
appDirectiveSet.directive('getLocation', function (){
    return {
      restrict: 'E',
      templateUrl: '/views/setLocation.html',
    };
  });