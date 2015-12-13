angular.module("app", [])


.controller("gitController", function($scope, App) {
  $scope.data = {};
  $scope.findUser = function() {
      console.log('in user')
      App.findUser($scope.data.username)
      .then(function(user) { 
        console.log(user.data.created_at)
        $scope.data.createdAt = user.data.created_at
      })
    }
  })


.factory("App", function($http) {
  var findUser = function(user) {
    return $http ({
      method: 'GET',
      url: 'https://api.github.com/users/' + user
    }).then(function(user) {
      return user
    })
  }
  return {
    findUser: findUser
  }
});

