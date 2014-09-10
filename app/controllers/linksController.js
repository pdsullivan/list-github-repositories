(function (app) {
    var linksController = function ($scope, linksService, $timeout) {
        var onError = function () {
            //alert("error!!");
        };
        var onLinks = function (response) {
            $scope.links = response.data;
        };
        var onPodcasts = function (response) {
            $scope.podcasts = response.data;
        };
        var onDevLinks = function (response) {
            $scope.devLinks = response.data;
        };
        var init = function () {
            $scope.links = linksService.getLinks().then(onLinks, onError);
            $scope.podcasts = linksService.getPodcasts().then(onPodcasts, onError);
            $scope.devLinks = linksService.getDevLinks().then(onDevLinks, onError);
        };
        init();
    };
    app.controller("linksController", ["$scope", "linksService", "$timeout", linksController]);
}(angular.module("app")));
