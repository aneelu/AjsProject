app.config(config);
config.$inject=["$routeProvider"];
function config($routeProvider) {
    $routeProvider.when("/page_one/:id/:name/:age", {
        templateUrl:"templates/page_one.html",
        controller:"page_one"
    })

    .when("/page_two/:id/:name/:age", {
        templateUrl:"templates/page_two.html",
        controller:"page_two"
    })
    .otherwise("/page_one", {
        templateUrl:"templates/page_one.html",
        controller:"page_one"
    });
}