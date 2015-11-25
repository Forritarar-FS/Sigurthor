loginApp.factory('stod2gull', [ '$http', function($http) {
  return $http.get('http://apis.is/tv/stod2gull');
}]);
