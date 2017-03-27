app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:'A',
        template:"<div class='jumbotron'><pre>Attribute Type Custom Directive</pre></div>"
    }
}