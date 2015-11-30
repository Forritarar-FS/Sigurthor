loginApp.factory('ruvithrottir', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/ruvithrottir');
}]);
