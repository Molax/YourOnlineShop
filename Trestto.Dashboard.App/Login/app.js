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
                templateUrl: "Login/home/home.html",
                controller: "homeCtrl"
            })
             .when("/setup", {
                 templateUrl: "Login/setup/setup.html",
                 controller: "setupCtrl"
             }).when("/minhaloja", {
                 templateUrl: "Login/minhaloja/minhaloja.html",
                 controller: "minhalojaCtrl"
             }).when("/minhaloja/:userId", {
                 templateUrl: "Login/minhaloja/minhaloja.html",
                 controller: "minhalojaCtrl"
             })
            .when("/dashboard", {
                templateUrl: "Login/Dashboard/Dashboard.html",
                controller: "dashCtrl"
            })
            .when("/dashboard/:userId", {
                templateUrl: "Login/Dashboard/Dashboard.html",
                controller: "dashCtrl"
            })
            .when("/setup/:userId", {
                templateUrl: "Login/setup/setup.html",
                controller: "setupCtrl"
            })
        .otherwise({ redirecTo: "#/setup" });
    }

    run.$inject = ["$location"];

    function run($location) {

    }


})();