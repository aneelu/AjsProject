app.controller("ctrl_two",ctrl_two);
ctrl_two.$inject=["$scope"];
function ctrl_two($scope) {
    $scope.var_two="I am from controller two";
}