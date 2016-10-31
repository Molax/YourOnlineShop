/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('setupCtrl', setupCtrl);

    setupCtrl.$inject = ["$scope", "$location", "$routeParams", "$uibModal", "$rootScope", "apiService"];

    function setupCtrl($scope, $location, $routeParams, $uibModal, $rootScope,apiService) {

        $rootScope.fotos = [];
        $rootScope.nomefb = {};
        $rootScope.fotourl = {};
        $rootScope.selectedID = 0;
        $rootScope.edit = 'nao';

        $scope.comentario = {};

        $scope.fb = function () {

            FB.api('/me', function (details) {
                $rootScope.fotourl = 'https://graph.facebook.com/' + details.id + '/picture';
                $rootScope.nomefb = details.name;
                $rootScope.id = details.id;
                FB.api('/' + details.id + '/photos/uploaded?fields=images,name', function (data) {
                    $rootScope.fotos = data.data;
                    for (var i = 0; i < $rootScope.fotos.length; i++) {
                        $rootScope.fotos[i].aparece = true;
                    }
                    console.log($rootScope.fotos)
                });
            });

        }();

        $scope.close = function () {
            
            console.log(oi)
        }

        $scope.acc = function () {
            $rootScope.fotos = $rootScope.fotos;
        }

        $scope.open = function (size, parentSelector) {
            $rootScope.edit = 'sim';
            var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
             $scope.modal1 = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'modalCtrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

             $scope.modal1.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
               console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.retornaDado = function () {
            for (var i = 0; i < $rootScope.fotos.length; i++) {
                $rootScope.fotos[i].foto = $rootScope.fotos[i].images[0].source;
                $rootScope.fotos[i].idloja = $rootScope.id;
                $rootScope.fotos[i].nomeloja = $scope.nomeloja;
                $rootScope.fotos[i].nomepessoa = $rootScope.nomefb;
                $rootScope.fotos[i].fotoperfil = $rootScope.fotourl;
            }
            apiService.post("Dash/RetornaDado", $rootScope.fotos, successAtualizaPainelHoraHora, errorAtualizaPainelHoraHora);

            function successAtualizaPainelHoraHora(res,obj) {
                
                console.log(obj);
                console.log(res)

            }

            function errorAtualizaPainelHoraHora(res) {

            }
        }

        $scope.link = {};

        $scope.pegacomentario = function (coment)
        {
            console.log(coment);
        }

        $scope.mostrafoto = function (item) {
           
            $rootScope.selectedID = item.id;
            console.log($rootScope.selectedID);

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: function ($rootScope) {
                    $rootScope.comentario = item.name;
                    $rootScope.link = item.images[3].source;
                    $rootScope.aparece = item.aparece;
                },
                size: 'lg', 
                resolve: {
                    links : function(){
                        return "sdjasif";
                    }
                }
            });

            modalInstance.result.then(function () {
              
            }, function () {

                if ( $rootScope.edit == 'sim') {
                    for (var i = 0; i < $rootScope.fotos.length; i++) {

                        if ($rootScope.fotos[i].id == $rootScope.selectedID) {

                            $rootScope.fotos[i].name = $rootScope.comentario;
                            $rootScope.fotos[i].aparece = $rootScope.aparece;
                            break;
                        }

                    }
                }
                


                console.log($rootScope.comentario);
                console.log($rootScope.selectedID);
                console.log($rootScope.aparece);
                
            });



        }


    }
    
})(angular.module('TRESTTO'));