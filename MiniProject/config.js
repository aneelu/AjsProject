app.run(run).config(config);
run.$inject=["$localStorage","$location","$rootScope"];
function run($localStorage,$location,$rootScope) {
    $rootScope.$on("$stateChangeStart",function (event,
                                                fromState,
                                                fromParams,
                                                toState,
                                                toParams) {

        if(!$localStorage.mini_project){
            $location.path("/login");
        }
    });
}


config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("login",{
       url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
    })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"homeController"
        })
        .state("home.static",{
            url:"/static",
            templateUrl:"templates/static.html",
            controller:"staticController"
        })
        .state("home.mysql",{
            url:"/mysql",
            templateUrl:"templates/mysql.html",
            controller:"mySqlController"
        })

        .state("home.mongodb",{
            url:"/mongodb",
            templateUrl:"templates/mongodb.html",
            controller:"mongodbController"
        });
}