app.directive("elemType",elemType);
function elemType() {
    return{
        restrict:"E",
        template:"<div class='jumbotron'><b>This is Element Type Custom Directive</b></div>"
    }
}