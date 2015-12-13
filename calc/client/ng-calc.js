//You will create a powers of 2 angular calculator. 
//There are only two operations, multiply and divide. 
//You'll need to create the controllers and whatever else
//you need to make this work. The only trick is that
//you CANNOT MODIFY THE HTML FILE.


angular.module('calculator', [])
.controller('answerCtrl', function($rootScope, $scope, App) {

  $scope.answer = {}
  var init = function() {
    $scope.answer.number = 2;
    App.setValue($scope.answer.number);
  }
  init()
  $rootScope.multiply = function(number) {
    $scope.answer.number = number;
  }
  $rootScope.divide = function() {
    $scope.answer.number = $scope.answer.number / 2
  }
})
.controller('multiplyCtrl', function($rootScope, $scope, App) {
  // $scope.multiply($scope.answer.number)
  $scope.answer = {};
})

.controller('divideCtrl', function($rootScope, $scope, App) {
  // $scope.answer = {};
  // $scope.divide = function() {
  //   var value = App.getValue()
  //   $scope.answer.number = value / 2;
  //   App.setValue($scope.answer.number)
  // }
  // $scope.divide()

  
})

.factory('App', function($rootScope) {
  var number;
  var getValue = function() {
    console.log(number)
    return number
  }
  var setValue = function(value) {
    number = value;
  }
  return {
    getValue: getValue,
    setValue: setValue
  }
});

