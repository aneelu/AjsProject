app.controller("ctrl_one",ctrl_one);
ctrl_one.$inject=["$scope","my_service"];
function ctrl_one($scope,my_service) {
    $scope.var_one = my_service.fun_one();
}