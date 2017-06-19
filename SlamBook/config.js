(function () {
    "use strict";

    app.config(function(socialProvider){
        socialProvider.setGoogleKey("1071246704138-s3jduierebq267jd4eq0spohbgcuk3o7.apps.googleusercontent.com");
        socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
        socialProvider.setFbKey({appId: "YOUR FACEBOOK APP ID", apiVersion: "API VERSION"});
    });


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