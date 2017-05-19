app.config(config);
config.$inject = ["$stateProvider", "$urlRouterProvider"];
function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state("page_one", {
        url: "/page_one",
        views: {
            '': {
                templateUrl: "templates/page_one.html",
                controller:"page_one"
            },
            'calc@page_one': {
                templateUrl: "templates/calc.html",
                controller: "calcController"
            },
            'graph@page_one': {
                templateUrl: "templates/graph.html",
                controller: "graphController"
            }
        }
    })

    .state("page_two", {
        url: "/page_two",
        views: {
            '': {
                templateUrl: "templates/page_two.html",
                controller: "page_two"
            },
            'chart@page_two': {
                templateUrl: "templates/chart.html",
                controller: "chartController"
            },
            'summary@page_two': {
                templateUrl: "templates/summary.html",
                controller: "summaryController"
            }
        }
    });
    $urlRouterProvider.otherwise("/page_one");
}