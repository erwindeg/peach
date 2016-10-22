'use strict';

/**
 * @ngdoc overview
 * @name resourcesApp
 * @description # resourcesApp
 * 
 * Main module of the application.
 */
var app = angular.module("peachModule", [ 'ngRoute', 'ngResource' ]);

app.config(function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl',
	}).when('/login', {
    	templateUrl : 'views/login.html',
    	controller : 'loginCtrl',
    }).otherwise({
      	redirectTo : '/login'
    });
});

app.controller("mainCtrl", function($scope,$http) {
//    $http.get('api/hello').then(function(result){
//        $scope.hello = result.data;
//        console.log(result.data);
//    });
    $scope.subject ={};
    $scope.specifics = {Dogs: false, Birds: false, Heights: false, Spiders: false};

    $scope.startTrial = function(subject){
        console.log(subject);
    }
});