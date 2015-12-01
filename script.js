// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            //route for the ruv page
            .when('/ruv', {
                templateUrl : 'pages/ruv.html',
                controller  : 'ruvController'
            })

            //route for the stod2 page
            .when('/stod2', {
                templateUrl : 'pages/stod2.html',
                controller  : 'stod2Controller'
            })

            //route for the ruv page
            .when('/skjar1', {
                templateUrl : 'pages/skjar1.html',
                controller  : 'skjar1Controller'
            })

            .when('/stod2sport', {
                templateUrl : 'pages/stod2sport.html',
                controller  : 'stod2sportController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .when('/user', {
                templateUrl : 'user.php',
                controller  : 'userController'
            });
    });
