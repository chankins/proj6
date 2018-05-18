'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams','$location',
  function($scope, $routeParams, $location) {

    var userId = $routeParams.userId;
    $scope.p = {};

    $scope.userCallback = function(model) {
        var obj = JSON.parse(model);
        $scope.$apply(function() {
            $scope.p.user = obj;
            $scope.$parent.main.context = obj.first_name + '\'s Photos';
        });
    };

    $scope.photoCallback = function(model) {
        var obj = JSON.parse(model);
        $scope.$apply(function() {
            $scope.p.photos = obj;
        });
    };

    $scope.$parent.FetchModel('/user/'+userId, $scope.userCallback);
    $scope.$parent.FetchModel('/photosOfUser/'+userId, $scope.photoCallback);

    $scope.switchUser = function(newUserId) {
      $location.url('/users/'+newUserId);
    };
  }]);
