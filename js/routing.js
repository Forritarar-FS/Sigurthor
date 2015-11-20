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
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      }
    })
    .state('stod2', {
      url: "/stod2",
      templateUrl: "templates/stod2.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      }
    })
    .state('adminState', {
        url: "/adminState",
        templateUrl: "templates/adminState.html",
  	  data: {
            authorizedRoles: [USER_ROLES.admin]
        }
      })
    ;
}]);
