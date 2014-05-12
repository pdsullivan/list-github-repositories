function UserCtrl($scope) {
  
  //$scope.User = $http.get('https://api.github.com/users/pdsullivan');
  $http.get('https://api.github.com/users/pdsullivan').success(successCallback);
  
  function successCallback (data){
    $scope.User = data;
  };
  
}
