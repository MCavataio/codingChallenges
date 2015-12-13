app.controller("gitController", function($scope, App));

$scope.findUser = function() {
    console.log('in user')
    App.findUser($scope.data.username)
    .then(function(user) { 
    console.log(user);
  })
  }
});