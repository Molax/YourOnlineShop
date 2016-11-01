/// <reference path="rootCtrl.js" />
(function (app) {
    app.controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ["$scope", "$location", "$routeParams", "apiService", "$rootScope", "$uibModal"];

    function dashCtrl($scope, $location, $routeParams, apiService, $rootScope, $uibModal) {

        $scope.teste = {};
        $rootScope.shaalau = "shablau";
        $rootScope.clicks = {};
        

        $scope.geraCSVReact = function () {

            apiService.post("Dash/GeraCsvReact", $scope.teste, sucLoja, erLoja);

            function sucLoja(res) {

                if (res.data != "") {
                    debugger;
                    $scope.loja = $routeParams.userId;
                }
                else {
                    $scope.loja = "N tem Loja";
                }

            }

            function erLoja(res) {


            }
        }

        $scope.geraCSVClick = function () {
            debugger;
            apiService.post("Dash/GeraCsvClick", $scope.teste, sucLoja, erLoja);

            function sucLoja(res) {

                if (res.data != "") {
                    debugger;
                    $scope.loja = $routeParams.userId;
                }
                else {
                    $scope.loja = "N tem Loja";
                }

            }

            function erLoja(res) {


            }
        }

        $scope.grafico = function () {
            debugger;
            $(function () {
                Highcharts.chart('container2', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Historic of Clicks per Store'
                    },
                    subtitle: {
                        text: 'Source: YourOnlineShop.com </a>'
                    },
                    xAxis: {
                        categories: ['2016'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Clicks',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' Clicks'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Clicks',
                        data: [$rootScope.clicks.clicks]
                    }, {
                        name: 'Likes',
                        data: [$rootScope.clicks.like]
                    }, {
                        name: 'React',
                        data: [$rootScope.clicks.react]
                    }, {
                        name: 'Option',
                        data: [$rootScope.clicks.option]
                    }]
                });
            });

        }

        $scope.veriicaLoja = function () {

            $scope.teste.loja = $routeParams.userId;
            $scope.teste.id = 1;
            //AtualizaPainelHoraHora
            apiService.post("Dash/VerificaDash", $scope.teste, sucLoja, erLoja);

            function sucLoja(res) {

                if (res.data != "") {
                    debugger;
                    $scope.loja = $routeParams.userId;
                    $rootScope.clicks = res.data;
                    $scope.grafico();
                }
                else {
                    $scope.loja = "N tem Loja";
                }

            }

            function erLoja(res) {


            }
        }()

    }
})(angular.module('TRESTTO'));