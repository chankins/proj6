'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial','ngResource']);

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

cs142App.controller('MainController', ['$scope', '$location', '$resource',
    function ($scope, $location, $resource) {

        $scope.main = {};
        $scope.main.context = 'PhotoGram';

        var version = $resource('/test/info');
        version.get({}, function(obj) {
            $scope.main.v = obj.version;
        });
        
    }]);
