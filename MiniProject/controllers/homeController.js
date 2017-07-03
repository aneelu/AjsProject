app.controller("homeController",homeController);
homeController.$inject=["$scope"];
function homeController($scope) {
    $scope.home="Welcome to Home Page !";
}