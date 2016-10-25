/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('setupCtrl', setupCtrl);

    setupCtrl.$inject = ["$scope", "$location", "$routeParams", "$uibModal"];

    function setupCtrl($scope, $location, $routeParams, $uibModal) {

        $scope.fotos = [];
        $scope.nomefb = {};
        $scope.fotourl = {};

        $scope.comentario = {};

        $scope.fb = function () {

            FB.api('/me', function (details) {
                $scope.fotourl = 'https://graph.facebook.com/' + details.id + '/picture';
                $scope.nomefb = details.name;
                FB.api('/' + details.id + '/photos/uploaded?fields=images,name', function (data) {
                    $scope.fotos = data.data;

                    console.log($scope.fotos)
                    alert('Seja bem vindo ' + $scope.nomefb + ', clique em carregar dados')
                });
            });

        }();

        $scope.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'setupCtrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
               console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.link = {};

        $scope.mostrafoto = function (item) { 
            
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: function ($scope) {
                    $scope.comentario = item.name;
                    $scope.link = item.images[3].source;
                },
                size: 'lg', 
                resolve: {
                    links : function(){
                        return "sdjasif";
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
              
            }, function () {
                
            });



        }


    }
})(angular.module('TRESTTO'));