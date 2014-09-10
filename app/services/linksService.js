(function (app) {
    var baseUrl = "http://pdsullivan.azurewebsites.net/api";
    var linksService = function ($http) {
        var linksFactory = {};
        linksFactory.getLinks = function () {
            return $http.get(baseUrl + "/links");    
        };
        linksFactory.getPodcasts = function () {
            return $http.get(baseUrl + "/podcasts")
        };
        linksFactory.getDevLinks = function () {
            return $http.get(baseUrl + "/devLinks");
        };
        linksFactory.selectLink = function (id) {
            return true;
        };
        return linksFactory;
    };
    app.factory("linksService", ["$http", linksService]);
}(angular.module("app")));