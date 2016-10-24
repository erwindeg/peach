'use strict';

/**
 * @ngdoc overview
 * @name resourcesApp
 * @description # resourcesApp
 * 
 * Main module of the application.
 */
var app = angular.module("peachModule", [ 'ngRoute', 'ngResource', 'pascalprecht.translate', 'ngAnimate']);

app.config(function($routeProvider, $translateProvider) {
	$routeProvider.when('/login', {
    	templateUrl : 'views/login.html',
    	controller : 'loginCtrl',
    }).when('/candidate', {
          	templateUrl : 'views/candidate.html',
          	controller : 'candidateCtrl',
    }).when('/instruction', {
            templateUrl : 'views/instruction.html',
            controller : 'instructionCtrl',
    }).when('/story', {
            redirectTo : '/story/1'
    }).when('/story/:id', {
            templateUrl : 'views/story.html',
            controller : 'storyCtrl',
    }).otherwise({
      	redirectTo : '/login'
    });
    $translateProvider.useStaticFilesLoader({
    				  prefix: '/languages/',
    				  suffix: '.json'
    				});
    $translateProvider.preferredLanguage('en');
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