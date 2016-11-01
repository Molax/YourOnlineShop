/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('minhalojaCtrl', minhalojaCtrl);

    minhalojaCtrl.$inject = ["$scope", "$location", "$routeParams", "apiService", "$rootScope", "$uibModal"];

    function minhalojaCtrl($scope, $location, $routeParams, apiService, $rootScope, $uibModal) {

        $rootScope.questionario = {};

        $rootScope.click = {};

        $scope.verificaLoja = function () {
            $scope.param = {};


            $scope.param.id = $routeParams.userId;

            if ($scope.param == undefined || $scope.param == null || $scope.param == '') {
                $scope.param = 'n';
            }
            //AtualizaPainelHoraHora
            apiService.post("Dash/VerificaLoja", $scope.param, sucLoja, erLoja);

            function sucLoja(res) {

                $rootScope.fotos = res.data;
                console.log(res.data);
            }

            function erLoja(res) {

                $scope.param = 'Ocorreu um erro interno de servidor';
                console.log(res.data)
            }

        }()

        $scope.mostrafoto = function (item) {

            $rootScope.click.idLoja = item.idloja;
            $rootScope.click.idFoto = item.id;

            apiService.post("Dash/SalvaClick", $rootScope.click, sucLoja, erLoja);

            function sucLoja(res) {

            }

            function erLoja(res) {

            }

            $rootScope.selectedID = item.id;
            console.log($rootScope.selectedID);
            $rootScope.edit = 'não';
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: function ($rootScope) {
                },
                size: 'lg',
                resolve: {
                    links: function () {
                        return "sdjasif";
                    }
                }
            });

            modalInstance.result.then(function () {

            }, function () {
                
                if ($rootScope.edit == 'sim') {
                    for (var i = 0; i < $rootScope.fotos.length; i++) {

                        if ($rootScope.fotos[i].id == $rootScope.selectedID) {

                            $rootScope.fotos[i].name = $rootScope.comentario;
                            $rootScope.fotos[i].aparece = $rootScope.aparece;

                            break;
                        }

                    }
                }

                else {
                    
                    $rootScope.questionario.opt = $('#sel1').val();

                    $rootScope.questionario.idLoja = $rootScope.click.idLoja;
                    $rootScope.questionario.idFoto = $rootScope.click.idFoto;


                    apiService.post("Dash/SalvaQuest", $rootScope.questionario, sucLoja, erLoja);

                    function sucLoja(res) {

                    }

                    function erLoja(res) {

                    }
                }


            });



        }


    }
})(angular.module('TRESTTO'));