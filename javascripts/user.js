(function () {

    angular.module("app", []);

}());

(function (app) {
    var UserCtrl = function ($scope, linksService, $timeout) {
        var onError = function () {
            //alert("error!!");
        };
        var onLinks = function (response) {
            $scope.user = response.data;
        };

        var init = function () {
            $scope.links = linksService.getUser().then(onLinks, onError);
        };
        init();
    };
    app.controller("linksController", ["$scope", "linksService", "$timeout", linksController]);
}(angular.module("app")));


(function (app) {
    var baseUrl = " 'https://api.github.com'";
    var linksService = function ($http) {
        var linksFactory = {};
        linksFactory.getUser = function () {
            return $http.get(baseUrl + "/users/pdsullivan");    
        };
        return linksFactory;
    };
    app.factory("linksService", ["$http", linksService]);
}(angular.module("app")));

