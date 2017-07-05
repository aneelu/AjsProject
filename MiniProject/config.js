app.run(run).config(config);
run.$inject=["$localStorage","$rootScope","$location"];
function run($localStorage,$rootScope,$location) {
    $rootScope.$on("$stateChangeStart",function (event,fromState,fromParams,toState,toParams) {
        if(!$localStorage.mini_project){
            $location.path("/login");
        }
    });
};
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
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

    .state("home.angularjs",{
        url:"/angularjs",
        templateUrl:"templates/angularjs.html",
        controller:"angularjs"
    })

        .state("home.angular2",{
            url:"/angular2",
            templateUrl:"templates/angular2.html",
            controller:"angular2"
        })

        .state("home.nodejs",{
            url:"/nodejs",
            templateUrl:"templates/nodejs.html",
            controller:"nodejs"
        });

    $urlRouterProvider.otherwise("/login");
}