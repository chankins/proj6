'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location) {

    var userId = $routeParams.userId;
    $scope.main = {};

    $scope.userCallback = function(model) {
        var obj = JSON.parse(model);
        $scope.$apply(function() {
            $scope.main.currUser = obj;
            $scope.$parent.main.context = obj.first_name + '\'s Profile';
        });
    };

    $scope.$parent.FetchModel('/user/'+userId, $scope.userCallback);
    
    $scope.openPhotoView = function(){
        $location.url('/photos/'+userId);
    };

  }]);
