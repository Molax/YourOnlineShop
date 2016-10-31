/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ["$scope", "$location", "$routeParams", "apiService", "$rootScope", "$uibModal"];

    function dashCtrl($scope, $location, $routeParams, apiService, $rootScope, $uibModal) {

       
        $scope.param = $routeParams.userId;;
        


    }
})(angular.module('TRESTTO'));