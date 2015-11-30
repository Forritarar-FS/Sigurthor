loginApp.factory('stod2sport2', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/stod2sport2');
}]);
