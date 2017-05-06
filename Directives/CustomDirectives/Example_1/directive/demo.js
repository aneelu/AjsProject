app.directive("demo" , demo);
function demo() {
    return{
        restrict:"AEC",
        template:"<div class='jumbotron'>Welcome to Custom Directives</div>"
    }
}