(function (app) {

    var loggingController = function ($scope, $http) {

        // create a blank object to hold our form information
        // $scope will allow this to pass between controller and view
        $scope.logData = {};
        // process the data
        $scope.createLogEntry = function () {
            var today = new Date();
            $scope.logData.date = today;
            
            $http.post('http://pdsullivan.azurewebsites.net/api/logging', JSON.stringify($scope.logData))
            .success(function (data) {
                $scope.logData = {};
            })
            .error(function (data) {
                $scope.logFail = true;
            });

        };

        //alert('init logging controller');

        $scope.init = function () {
                var clientData = "{ ";
                $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
                    
                    var firsttime = true;
                    $.each(data, function (k, v) {
                        if (!firsttime) {
                            clientData += " , "
                        }
                        clientData += " \"" + k + "\" : \"" + v + "\"  ";
                        firsttime = false;
                    });
                    clientData += " }";
                //alert(clientData);
                $scope.logData.message = "PAGELOAD";
                $scope.logData.details = clientData.toString();
                $scope.logData.source = window.location.href.toString();
                $scope.createLogEntry();
            });
        };

        $scope.init();
    };

    app.controller("loggingController", ["$scope", "$http", loggingController]);



}(angular.module("app")));