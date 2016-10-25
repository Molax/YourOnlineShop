(function (app) {
app.controller('modalCtrl', modalCtrl);

modalCtrl.$inject = ["$scope", "$location", "$routeParams", "$uibModal"];

function modalCtrl($scope, $location, $routeParams, $uibModal) {

    $scope.close = function () {
        $modalInstance.dismiss();
    }


}
})(angular.module('TRESTTO'));