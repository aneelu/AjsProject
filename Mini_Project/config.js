app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("login",{
       url:"/login",
        templateUrl:'templates/login.html',
        controller:'loginController'
    })
        .state("home",{
            url:"/home",
            templateUrl:'templates/home.html',
            controller:'homeController'
        })

        .state("home.about",{
            url:"/about",
            templateUrl:'templates/about.html',
            controller:'aboutController'
        });

    $urlRouterProvider.otherwise("/login");
}