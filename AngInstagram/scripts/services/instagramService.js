/// <reference path="../angular.min.js" />
/// <reference path="../angular-resource.min.js" />



(function () {
    angular.module("instagramApp").factory("instagramFactory", instagramFactory);
    instagramFactory.$inject = ["$http"];
    function instagramFactory($http) {
        var me = {};
        me.fetchData = function (callback) {

            var endPoint = "https://api.instagram.com/v1/media/popular?count=99&client_id=9a10fac5c3b44bb8a30130df42c410b5&callback=JSON_CALLBACK";

            $http.jsonp(endPoint).success(function (response) {
                callback(response.data);
            }).error(function (err) {
                console.log(err);
            });
        }

        return me;
    }
})();