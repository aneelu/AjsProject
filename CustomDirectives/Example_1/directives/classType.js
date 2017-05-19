app.directive("classType" , classType);
function classType() {
    return{
        restrict:'C',
        template:"<div class='jumbotron'><b><i>Class Type Custom Directive</i></b></div>"
    }
}