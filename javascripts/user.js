function UserCtrl($scope) {
  
  $scope.User = $http.get('https://api.github.com/users/pdsullivan');
 

  };
}
