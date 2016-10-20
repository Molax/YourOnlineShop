/// <reference path="home.controller.js" />
(function (app) {
    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ["$scope", "$location", "apiService"];

    function homeCtrl($scope, $location, apiService) {

        $scope.corDefinida = 70;

        $scope.gauge = {
            value: 50,
            width: 300,
            height: 300
        };





        $scope.Dashboard = function () {

            //AtualizaPainelHoraHora
            apiService.get("Dash/MetodoBackChamada", null, successAtualizaPainelHoraHora, errorAtualizaPainelHoraHora);

            function successAtualizaPainelHoraHora(res) {

                $scope.AtualizaPainelHoraHora = res.data;

            }

            function errorAtualizaPainelHoraHora(res) {

            }

        }
    }
})(angular.module('TRESTTO'));