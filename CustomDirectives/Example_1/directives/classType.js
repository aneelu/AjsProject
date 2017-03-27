app.directive("classType",classType);
function classType() {
    return{
        restrict:'C',
        template:"<div class='jumbotron'>Class Level Usage</div>"
    }
}