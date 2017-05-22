app.controller("home",home);
home.$inject=["$scope"];
function home($scope) {
    $scope.var_one = "I am from Home Page";
}