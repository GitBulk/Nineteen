/// <reference path="angular-route.min.js" />
/// <reference path="angular-resource.min.js" />



(function () {
    angular.module("nineteenApp", ['ngResource', 'ngRoute'])
    .config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
    }
})();