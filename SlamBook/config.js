(function () {
    "use strict";
    app.config(config);
    config.$inject=["$stateProvider","$urlRouterProvider"];
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

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
            .state("slam",{
                url:"/slam",
                templateUrl:"templates/slam.html",
                controller:"slamController"
            });


    };
})();