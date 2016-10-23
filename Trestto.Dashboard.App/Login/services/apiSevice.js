(function (app) {
    app.factory('apiService', apiService);

    apiService.$inject = ['$http', '$location', 'API'];

    function apiService($http, $location, API) {
        var service = {
            get: get,
            post: post
        };

        function get(url, config, success, fail) {
            return $http.get(API.URL + url)
            .then(function (res) {
                success(res);
            }, function (err) {
                fail(err);
            });
        }

        function post(url, data, success, fail) {
            debugger;
            return $http.post(API.URL + url, data)
            .then(function (res) {
                success(res);
            }, function (err) {
                fail(err);
            });
        }

        return service;
    }


})(angular.module("TRESTTO"));