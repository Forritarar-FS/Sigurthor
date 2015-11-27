angular.module('loginApp').config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES',
function($stateProvider, $urlRouterProvider, USER_ROLES) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
  	.state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
  	.state('ruv', {
      url: "/ruv",
      templateUrl: "templates/ruv.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('ruvithrottir', {
      url: "/ruvithrottir",
      templateUrl: "templates/ruvithrottir.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('stod2', {
      url: "/stod2",
      templateUrl: "templates/stod2.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('stod2bio', {
      url: "/stod2bio",
      templateUrl: "templates/stod2bio.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('stod2gull', {
      url: "/stod2gull",
      templateUrl: "templates/stod2gull.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('stod2sport', {
      url: "/stod2sport",
      templateUrl: "templates/stod2sport.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('stod2sport2', {
      url: "/stod2sport2",
      templateUrl: "templates/stod2sport2.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
    .state('skjar1', {
        url: "/skjar1",
        templateUrl: "templates/skjar1.html",
  	  data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
        }
      })
    ;
}]);
