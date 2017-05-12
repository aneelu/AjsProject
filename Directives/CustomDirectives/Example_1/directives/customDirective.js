app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:"A",
        template:"<div class='jumbotron'><b>Attribute Type Custom Directive !</b></div>"
    }
}


app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b>Class Type Custom Directive !</b></div>"
    }
}

app.directive("elemType",elemType);
function elemType() {
    return{
        restrict:"E",
        template:"<div class='jumbotron'><b>Element Type Custom Directive !</b></div>"
    }
}