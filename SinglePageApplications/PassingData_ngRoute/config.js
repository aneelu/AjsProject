app.config(config);
function config($routeProvider){
    $routeProvider.when("/page_one/:id/:name/:sal",{
        templateUrl:"../templates/page_one.html",
        controller:"page_one"
    })
    
    .when("/page_two/:id/:name/:sal",{
        templateUrl:"../templates/page_two.html",
        controller:"page_two"
    })
    
    .otherwise("/page_one",{
        templateUrl:"../templates/page_one.html",
        controller:"page_one"
    });
}