// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Her a thessari sidu getur thu fundid allar thaer helstu upplysingar um islenskt sjonvarpshefni!';
});

scotchApp.controller('ruvController', ["$scope",'ruv', function($scope, ruv) {
  ruv.success(function(data){
    $scope.ruv = data;
  });
}]);

scotchApp.controller('stod2Controller', ["$scope",'stod2', function($scope, stod2) {
  stod2.success(function(data){
    $scope.stod2 = data;
  });
}]);

scotchApp.controller('skjar1Controller', ["$scope",'skjar1', function($scope, skjar1) {
  skjar1.success(function(data){
    $scope.skjar1 = data;
  });
}]);

scotchApp.controller('stod2sportController', ["$scope",'stod2sport', function($scope, stod2sport) {
  stod2sport.success(function(data){
    $scope.stod2sport = data;
  });
}]);

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Thessi vefsida er lokaverkefnid mitt i GSF og VEF';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Sendu a mig linu.';
});

scotchApp.controller('userController', function($scope) {
    $scope.message = '';
});

function Ctrl($scope)
{
    $scope.date = new Date();
}
