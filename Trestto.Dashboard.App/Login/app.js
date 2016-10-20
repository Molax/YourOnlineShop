(function () {
    angular.module('TRESTTO', ['common'])
        .config(config)
        .constant('API', {
            URL: 'http://localhost:5604/'
        })
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "dashboard/home/home.html",
                controller: "homeCtrl"
            })
        .otherwise({ redirecTo: "#/home" });
    }

    run.$inject = ["$location"];

    function run($location) {

    }


})();