'use strict';

cs142App.controller('UserListController', ['$scope','$location','$resource',
    
    function ($scope, $location, $resource) {

        $scope.main = {};
        $scope.main.context = 'Users';

        var users = $resource('/user/list');
        users.query({}, function(obj) {
            $scope.main.users = obj;
        });
        
        $scope.usernameClicked = function(user) {
            $location.url('/users/'+user._id);
        };
    }]);


