loginApp.factory('stod2bio', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/stod2bio');
}]);
