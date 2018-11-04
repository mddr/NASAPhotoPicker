var app = angular.module('NASAPhotoPicker', ['ngRoute', 'angularCSS']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'photos-controller/photos-controller.html',
            controller: 'photosController'
        })
        .when('/photos', {
            templateUrl: 'photos-controller/photos-controller.html',
            controller: 'photosController'
        })
        .when('/blog', {
            templateUrl: 'blog-controller/blog-controller.html',
            controller: 'blogController',
            css: 'blog-controller/blog-controller.css'
        })
		.otherwise({
			redirectTo: '/photos',
			controller: 'photosController'
		});
});