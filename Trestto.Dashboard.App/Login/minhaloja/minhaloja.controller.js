/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('minhalojaCtrl', minhalojaCtrl);

    minhalojaCtrl.$inject = ["$scope", "$location", "$routeParams", "apiService"];

    function minhalojaCtrl($scope, $location, $routeParams, apiService) {

        $scope.verificaLoja = function () {
            debugger;
            var x = $routeParams.userId;

            if (x == undefined || x == null || x == '') {
                x = 'n';
            }
            //AtualizaPainelHoraHora
            apiService.post("Dash/VerificaLoja?param=", x, sucLoja, erLoja);

            function sucLoja(res) {
                debugger;
                $scope.param = res.data;

            }

            function erLoja(res) {
                debugger;
                $scope.param = 'Ocorreu um erro interno de servidor';
                console.log(res.data)
            }

        }()

    }
})(angular.module('TRESTTO'));