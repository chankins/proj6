'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users/:userId'
            });
    }]);

cs142App.config(['$mdThemingProvider', 
    function($mdThemingProvider) {
        $mdThemingProvider.theme('default').dark();
}]);

cs142App.controller('MainController', ['$scope', '$location',
    function ($scope,$location) {

        $scope.main = {};
        $scope.main.context = 'PhotoGram';

        $scope.FetchModel = function(url, cb) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() { 
                if (this.readyState!== 4 || this.status != 200 ) { return; }
                cb(this.responseText);
            };
            xhr.open("GET", url);
            xhr.send();
        };

        $scope.versionCallback = function(model) {
            var obj = JSON.parse(model);
            $scope.$apply(function() {
                $scope.main.v = obj.__v;
            });
        };

        $scope.FetchModel('/test/info', $scope.versionCallback);
        
    }]);
