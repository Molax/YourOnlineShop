/// <reference path="home.controller.js" />
(function (app) {
    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ["$scope", "$location", "apiService"];



    function homeCtrl($scope, $location, apiService) {

        $scope.corDefinida = 70;

        $scope.permissions = [
        'email',
        'user_birthday',
        'user_photos',
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


            fbAsyncInit();
            // Tenta fazer o login
            FB.login(function (response) {
                // Se usuário está logado ....
                if (response.authResponse) {

                    $scope.setup();
                }
            }, { scope: $scope.permissions });


        }

        $scope.showDetail = function () {

            FB.api('/me', function (details) {
                console.log(details.id);
                FB.api('/' + details.id + '/photos/uploaded', function (data) {

                    //   alert('https://www.facebook.com/photo.php?fbid=' + data.data[0].id);
                });
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