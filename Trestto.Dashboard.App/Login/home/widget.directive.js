/// <reference path="rootCtrl.js" />
(function (app) {
    app.directive('widget', function () {
        return {
            restrict: "A",
            template: "<h1>Made by a directive!</h1>"
        };
    })
})(angular.module('TRESTTO'));