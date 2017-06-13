app.directive("elemType",elemType);
function elemType() {
    return{
        restrict:"E",
        template:"<div class='jumbotron'><b style='color: green'>Element Type Custom Directive</b></div>"
    }
}