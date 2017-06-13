app.config(config);
config.$inject = ["$stateProvider", "$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {

    $stateProvider.state("page_one", {
        url: "/page_one",
        views:{
            '':{
                templateUrl: "templates/page_one.html",
                controller: "page_one"
            },
            'calc@page_one':{
                templateUrl: "templates/calc.html",
                controller:"calc"
            },
            'summary@page_one': {
                templateUrl: "templates/summary.html",
                controller: "summary"
            }
        }
        
    })
    .state("page_two", {
        url: "/page_two",
        views:{
            '':{
                templateUrl: "templates/page_two.html",
                controller: "page_two"
            },
            'graph@page_two':{
                template: "{{graph}}",
                controller: app.controller('graph', function ($scope) {
                    $scope.graph = 'This is Graph page !';
                })
            },
            'chart@page_two': {
                template: "This is Chart Page...",
            }
        }
        
    });

    $urlRouterProvider.otherwise("/page_one");

}