angular.module('drakeApp.login', [])
.controller('loginCtrl', function ($scope, $location, $http, $cordovaOauth){
  
  $scope.information = [$scope.username, $scope.password];
  $scope.letsGo = function(){
  	return $http({
      method: 'POST',
      url: '/login',
      data: $scope.information
    });
  };

  $scope.fbLogin = function() {
    console.log('fb login!!!');
    return $http({
      method: 'GET',
      url: '/auth/facebook'
      //and then maybe redirect to home page after authenticating??
    })
    .success(function(data) {
      console.log('logged in!');
      console.log(data);
    })
    .error(function() {
      console.log('error with authentication');
    });

  }

});

