app.controller("ctrl_two",ctrl_two);
ctrl_two.$inject=["$scope","my_service"];
function ctrl_two($scope,my_service) {
    $scope.var_two=my_service.fun_one();
}