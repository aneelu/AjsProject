app.directive("attrType", attrType);
function attrType() {
    return {
        restrict: "A",
        template:"<div class='jumbotron'><b>This is Attribute Type Custom Directive</b></div>"
    }
}