loginApp.factory('skjar1', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/skjar1');
}]);
