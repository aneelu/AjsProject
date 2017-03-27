app.directive("elemType",elemType);
function elemType() {
    return{
        restrict:'E',
        template:"<div class='jumbotron'><pre>Element Level Custom Directive</pre></div>"
    }
}