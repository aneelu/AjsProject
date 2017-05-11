app.controller("calcController",calcController);
calcController.$inject=["$scope"];
function calcController($scope) {
    $scope.calc = "I am from calc controller";
}
