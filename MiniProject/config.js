app.run(run).config(config);
run.$inject=["$rootScope","$localStorage","$location"];
function run($rootScope,$localStorage,$location) {
    $rootScope.$on("$stateChangeStart",function (e,fromState,fromParams,toState,toParams) {
        if(!$localStorage.mini_project){
            $location.path("/login");
        }
    });
}
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {

    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"templates/login.html",
        controller:"login"
    })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"home"
        })
        .state("home.static",{
            url:"/static",
            templateUrl:"templates/static.html",
            controller:"staticController"
        })
        .state("home.mysql",{
            url:"/mysql",
            templateUrl:"templates/mysql.html",
            controller:"mysqlController"
        })
        .state("home.mongodb",{
            url:"/mongodb",
            templateUrl:"templates/mongodb.html",
            controller:"mongodbController"
        });

    $urlRouterProvider.otherwise("/login");
}