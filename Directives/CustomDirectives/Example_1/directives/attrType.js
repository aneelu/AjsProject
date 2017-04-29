app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:"A",
        template:"<div class='jumbotron'><b style='color: red'>This is Attribute Type Custom Directive</b></div>"
    }
}