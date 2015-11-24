'use strict';

angular.module('loginApp').
controller('ParentController', ['$scope', '$rootScope', '$modal', 'Auth', 'ruv', 'stod2', 'skjar1', 'AUTH_EVENTS','USER_ROLES',
function($scope, $rootScope, $modal, Auth, ruv, stod2, skjar1, AUTH_EVENTS, USER_ROLES){
	// this is the parent controller for all controllers.
	// Manages auth login functions and each controller
	// inherits from this controller
	ruv.success(function(data){
		$scope.ruv = data;
	});

	stod2.success(function(data2){
		$scope.stod2 = data2;
	});

	skjar1.success(function(data3){
		$scope.skjar1 = data3;
	});




	$scope.modalShown = false;
	var showLoginDialog = function() {
		if(!$scope.modalShown){
			$scope.modalShown = true;
			var modalInstance = $modal.open({
				templateUrl : 'templates/login.html',
				controller : "LoginCtrl",
				backdrop : 'static',
			});

			modalInstance.result.then(function() {
				$scope.modalShown = false;
			});
		}
	};

	var setCurrentUser = function(){
		$scope.currentUser = $rootScope.currentUser;
	}

	var showNotAuthorized = function(){
		alert("Not Authorized");
	}

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = Auth.isAuthorized;

	//listen to events of unsuccessful logins, to run the login dialog
	$rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
	$rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
	$rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginDialog);
	$rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginDialog);
	$rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);

} ]);
