app.controller("staticController",staticController);
staticController.$inject=["$scope"];
function staticController($scope) {
    $scope.static = "Data From Static Page Soon...";
}