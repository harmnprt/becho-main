'use strict';

var app = angular.module('appServices', ['ngResource']);

app.factory('Category', ['$resource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('/product-category/:categoryId.json', {}, {
  		query: {method: 'GET', params:{categoryId: 'category'}, isArray: true}
  	});
  }]);

app.factory('setLocation', ['$resource', function ($resource) {
	return $resource('/setLocation/:CityState.json/:cities', {}, {
		query: {method: 'GET', params:{CityState: 'city_list'}, isArray: true}
	});
}]);

app.factory('sellingItem', ['$resource', function ($resource) {
	return $resource('/adds-list-item/:addId', {}, {
		query: {method: 'GET', params:{addId: 'adds-list.json'}, isArray: true}
	});
}]);