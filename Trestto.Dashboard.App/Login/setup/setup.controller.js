/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('setupCtrl', setupCtrl);

    setupCtrl.$inject = ["$scope", "$location", "$routeParams"];

    function setupCtrl($scope, $location, $routeParams) {
       
        $scope.fotos = [];
        $scope.nomefb = {};
        $scope.fotourl = {};


        $scope.fb = function () {
           
            FB.api('/me', function (details) {
                $scope.fotourl = 'https://graph.facebook.com/' + details.id + '/picture';
                $scope.nomefb = details.name;
                FB.api('/' + details.id + '/photos/uploaded?fields=link', function (data) {
                    $scope.fotos = data.data;
                   
                    console.log($scope.fotos)
                    alert('Seja bem vindo ' + $scope.nomefb + ', clique em carregar dados')
                });
            });
            
        }()

        $scope.mostrafoto = function (id) {
            debugger;
            
            var x = '#' + id;

            $('#'+id).attr("href", x);

            var itemID = $('#'+id).attr('href');
            $('.gallery ul').addClass('item_open');

            $(itemID).addClass('item_open');
            return false;
        }

       
    }
})(angular.module('TRESTTO'));