app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {

    $stateProvider.state("page_one",{
       url:"/page_one",
        views:{
           '':{
               templateUrl:'templates/page_one.html',
               controller:'page_one'
           },

            'calc@page_one':{
               templateUrl:'templates/calculations.html',
                controller:'calculationsController'
            },

            'graph@page_one':{
               templateUrl:'templates/graph.html',
                controller:'graphController'
            }
        }
    })
        .state("page_two",{
            url:'/page_two',
            templateUrl:'templates/page_two.html',
            controller:'page_two'
        });

    $urlRouterProvider.otherwise("/page_one");

}