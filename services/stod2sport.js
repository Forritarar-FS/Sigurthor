scotchApp.service("stod2sport",["$http", function ($http) {
  return $http.get("http://apis.is/tv/stod2sport");
}]);
