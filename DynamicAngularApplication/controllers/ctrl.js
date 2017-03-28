app.controller("ctrl",ctrl);
ctrl.$inject=["$scope"];
function ctrl($scope) {
    $scope.var_one="AngularJS";
    $scope.var_two="NodeJS";
    $scope.var_three="MongoDB";
}