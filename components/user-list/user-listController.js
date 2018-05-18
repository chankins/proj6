'use strict';

cs142App.controller('UserListController', ['$scope','$location',
    
    function ($scope, $location) {
        $scope.doneCallback = function(model) {
            var obj = JSON.parse(model);
            $scope.$apply(function() {
                $scope.main.users = obj;
            });
        };
        $scope.main = {};
        $scope.main.context = 'Users';

        $scope.FetchModel('/user/list', $scope.doneCallback);
        
        $scope.usernameClicked = function(user) {
            $location.url('/users/'+user._id);
        };
    }]);

