app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider){
    $stateProvider.state("login",{
       url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
    })
        .state("register",{
            url:"/register",
            templateUrl:"templates/register.html",
            controller:"registerController"
        })

        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"homeController"
        });

        $urlRouterProvider.otherwise("/login");
}