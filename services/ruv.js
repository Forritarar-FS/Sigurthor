loginApp.factory('ruv', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/ruv');
}]);
