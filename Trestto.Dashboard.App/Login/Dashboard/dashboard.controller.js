/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ["$scope", "$location", "$routeParams", "apiService", "$rootScope", "$uibModal"];

    function dashCtrl($scope, $location, $routeParams, apiService, $rootScope, $uibModal) {

        $scope.teste = {};
        $rootScope.shaalau = "shablau";
        $scope.loja = $routeParams.userId;
        
        $scope.veriicaLoja = function () {
            debugger;
            $scope.teste.loja = $routeParams.userId;
            $scope.teste.id = 1;
            //AtualizaPainelHoraHora
            apiService.post("Dash/VerificaDash", $scope.teste, sucLoja, erLoja);

            function sucLoja(res) {
                debugger;
                if (res.data != "") {
                    $rootScope.fotoperfil = res.data;
                }
                else {
                    $rootScope.fotoperfil = "No tiene loja";
                }
               
            }

            function erLoja(res) {

              
            }
        }()

    }
})(angular.module('TRESTTO'));