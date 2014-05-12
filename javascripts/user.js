function UserCtrl($scope) {
  
  //$scope.User = $http.get('https://api.github.com/users/pdsullivan');

  
  $http({method: 'GET', url: 'https://api.github.com/users/pdsullivan'}).
    success(function(data, status, headers, config) {
      $scope.User = data;
    }).
    error(function(data, status, headers, config) {
      alert('error');
    });
  
}
