(function (app) {

    var contactController = function ($scope, $http) {

        // create a blank object to hold our form information
        // $scope will allow this to pass between controller and view
        $scope.formData = {};

        // process the form
        $scope.processForm = function () {
            var today = new Date();
            $scope.formData.dateSubmited = today;
            $scope.formData.Location = "";
            $scope.formData.extraInfo = "";
            //$http.post('http://pdsullivan.azurewebsites.net/api/contact', JSON.stringify($scope.formData), { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
            $http.post('http://pdsullivan.azurewebsites.net/api/contact', JSON.stringify($scope.formData))
            .success(function (data) {
                $scope.formData = {};
                $scope.contactForm.$setPristine();
                $scope.formSuccess = true;
            })
            .error(function (data){
                $scope.formFail = true;
            });

        };

    };

    app.controller("contactController", ["$scope","$http", contactController]);

}(angular.module("app")));