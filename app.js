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

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;

}]);

