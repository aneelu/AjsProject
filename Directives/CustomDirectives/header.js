app.directive("header",header);
function header() {
    return{
        restrict:"E",
        templateUrl:"header.html",
        controller:"headerController"
    }
}