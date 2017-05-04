app.directive("elemType", elemType);
function elemType() {
    return {
        restrict: "E",
        template:"<div class='jumbotron'>This is Element Type Custom Directive</div>"
    }
}