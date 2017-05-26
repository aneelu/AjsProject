app.controller("staticController",staticController);
staticController.$inject=["$scope","homeService"];
function staticController($scope,homeService) {
    $scope.static=homeService.static();
}