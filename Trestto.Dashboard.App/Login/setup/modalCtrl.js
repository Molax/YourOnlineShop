(function (app) {
app.controller('modalCtrl', modalCtrl);

modalCtrl.$inject = ["$scope", "$location", "$routeParams", "$uibModal", "$rootScope",];

function modalCtrl($scope, $location, $routeParams, $uibModal, $rootScope) {

    $scope.close = function () {
        $modalInstance.dismiss();
    }

    $scope.ok = function (comentario, aparece) {
        $rootScope.comentario = comentario;
        $rootScope.aparece = aparece;
       
    }

    $scope.not = function ()
    {
        $rootScope.edit = 'nao';
    }

    $scope.like1 = function () {
        
            $('.like1').toggleClass('like-active');
            $('.like1').next().toggleClass('hidden');

            $rootScope.questionario.like = 1;
    }
    $scope.like2 = function () {
        $('.like2').toggleClass('like-active');
        $('.like2').next().toggleClass('hidden');

        $('.like1').toggleClass('like-active');
        $('.like1').next().toggleClass('hidden');

        $rootScope.questionario.like = 2;
    }
    $scope.like3 = function () {
        $('.like3').toggleClass('like-active');
        $('.like3').next().toggleClass('hidden');

        $('.like2').toggleClass('like-active');
        $('.like2').next().toggleClass('hidden');

        $('.like1').toggleClass('like-active');
        $('.like1').next().toggleClass('hidden');

        $rootScope.questionario.like = 3;
    }

    $scope.like4 = function () {
        $('.like4').toggleClass('like-active');
        $('.like4').next().toggleClass('hidden');

        $('.like3').toggleClass('like-active');
        $('.like3').next().toggleClass('hidden');

        $('.like2').toggleClass('like-active');
        $('.like2').next().toggleClass('hidden');

        $('.like1').toggleClass('like-active');
        $('.like1').next().toggleClass('hidden');

        $rootScope.questionario.like = 4;
    }


    $scope.love = function () {
        
        $('.love').toggleClass('like-active');
        $('.love').next().toggleClass('hidden');
        $rootScope.questionario.react = 'love';
    }
    $scope.like = function () {
        $('.likelike').toggleClass('like-active');
        $('.likelike').next().toggleClass('hidden');
        $rootScope.questionario.react = 'like';
    }
    $scope.hate = function () {
        $('.hate').toggleClass('like-active');
        $('.hate').next().toggleClass('hidden');
        $rootScope.questionario.react = 'hate';
    }

    $scope.never = function () {
        $('.never').toggleClass('like-active');
        $('.never').next().toggleClass('hidden');
        $rootScope.questionario.react = 'never';
    }


}
})(angular.module('TRESTTO'));