angular.module('drakeApp.login', [])
.controller('loginCtrl', function ($scope, $location, $cordovaOauth, Auth, $http){
  
  $scope.information = [$scope.username, $scope.password];
  $scope.letsGo = function(){
  	return $http({
      method: 'POST',
      url: '/login',
      data: $scope.information
    })
  };

  $scope.fbLogin = function() {
    /*return $http({
      method: 'GET',
      url: 'http://drakeapp.herokuapp.com/auth/facebook'
    })
    .success(function(data, status, headers, config) {
      console.log('success!');
      console.log('data', data);
      console.log('status', status);
      console.log('headers', headers);
      console.log('config', config);
    })
    .error(function(data, status, headers, config) {
      console.log('error!');
    });*/
    console.log('clicked!');
    console.log(Auth.clientID);
    $cordovaOauth.facebook(Auth.clientID, ['user_friends'])
      .then(function(result) {
        console.log('success!');
        console.log(result);
        $localStorage.accessToken = result.access_token;
      },
      function(error) {
           console.log('error logging in!')
           console.log(error);
      });
  };

});

