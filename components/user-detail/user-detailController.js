'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', '$location','$resource',
  function($scope, $routeParams, $location, $resource) {

    var userId = $routeParams.userId;
    $scope.main = {};

    var user = $resource('/user/:id');
    user.get({id: userId}, function(obj) {
        $scope.main.currUser = obj;
        $scope.$parent.main.context = obj.first_name + '\'s Profile';
    });
    
    $scope.openPhotoView = function(){
        $location.url('/photos/'+userId);
    };

  }]);
