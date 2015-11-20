loginApp.factory('stod2', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/stod2');
}]);
