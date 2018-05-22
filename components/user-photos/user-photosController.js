'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams','$location','$resource',
  function($scope, $routeParams, $location, $resource) {

    var userId = $routeParams.userId;
    $scope.p = {};

    var user = $resource('/user/:id');
    user.get({id: userId}, function(obj) {
        $scope.p.user = obj;
        $scope.$parent.main.context = obj.first_name + '\'s Profile';
    });

    var photos = $resource('/photosOfUser/:id');
    photos.query({id: userId}, function(obj) {
        $scope.p.photos = obj;
    });

    $scope.switchUser = function(newUserId) {
      $location.url('/users/'+newUserId);
    };
  }]);
