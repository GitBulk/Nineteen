/// <reference path="../angular.min.js" />
(function () {

    angular.module("instagramApp")
    .controller("instagramController", instagramController);

    instagramController.$inject = ["$scope", "instagramFactory"];

    function instagramController($scope, instagramFactory) {
        $scope.images = [];
        instagramFactory.fetchData(function (data) {
            console.log(data);
            $scope.images = data;

        });
    }
})();