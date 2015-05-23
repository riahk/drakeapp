angular.module('drakeApp.favorfact', [])
.factory('Favors', function ($http, $location){
  return {
    //return all the favors within range of a location (sent as an obj)
    getFavors: function(loc) { 
      $http.post('/api/requests', loc)
        .success(function(data, status, headers, config) {
          //return the requests
        })
        .error(function(data, status, headers, config) {
          //handle error
        });
    },
    
    upVote: function(favorID){
      return $http({
        method: 'POST',
        url: '/api/requests/upVote',
        data: favorID
      })
      .then(function(resp){
        console.log(resp);
      })
    },
    downVote: function(favorID){
      return $http({
        method: 'POST',
        url: '/api/requests/downVote',
        data: favorID
      })
      .then(function(resp){
        console.log(resp);
      })
    
    selectedFavor: null,

    setFavor: function(request) {
      this.selectedFavor = request;
    }
  } 
});

