app.controller("ctrl_one",ctrl_one);
ctrl_one.$inject=["$scope"];
function ctrl_one($scope) {
    $scope.var_one = "I am from page one controller";
}