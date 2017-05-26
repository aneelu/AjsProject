app.controller("homeController",homeController);
homeController.$inject=["$scope"];
function homeController($scope) {
    $scope.var_one = "Welcome to Home Page";
}