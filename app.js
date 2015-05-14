// module
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

// routes
weatherApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})

		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastController'
		})
});

// services
weatherApp.service('cityService', function() {

	this.city = "Toronto, ON"

});

// controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function() {

		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastController', ['$scope', '$resource' ,'cityService', function($scope, $resource, cityService) {

	$scope.city = cityService.city;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK"}, { get: {method: "JSONP"} });

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });
	$scope.convertToCelcius = function(degK) {
		return Math.round(degK - 273.15);
	}

	$scope.convertToDate = function(dt) {
		return new Date(dt);
	}
}]);

