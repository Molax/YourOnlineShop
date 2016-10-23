/// <reference path="home.controller.js" />
(function (app) {
    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ["$scope", "$location", "apiService"];



    function homeCtrl($scope, $location, apiService) {

        $scope.corDefinida = 70;

        $scope.permissions = [
        'email',
        'user_birthday',
        ].join(',');

        $scope.gauge = {
            value: 50,
            width: 300,
            height: 300
        };

        $scope.dados = [
     'id',
     'name',
     'first_name',
     'middle_name',
     'last_name',
     'birthday',
      'email',
        ].join(',');

        $scope.setup = function () {
            $location.url("setup");
        }

        $('.boxshadow').css('background-color', 'transparent');

        $scope.loginface = function () {
            debugger;

            fbAsyncInit();
            // Tenta fazer o login
            FB.login(function (response) {
                // Se usuário está logado ....
                if (response.authResponse) {
                    $scope.showDetail();
                }
            }, { scope: $scope.permissions });


        }

        $scope.showDetail = function ()
        {
            FB.api('/me', { fields: $scope.dados }, function (details) {
                console.log(details);
            });
        }

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