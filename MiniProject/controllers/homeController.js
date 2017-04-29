app.controller("homeController",homeController);
homeController.$inject = ["$scope"];
function homeController($scope) {
    $scope.var_two = "Welcome to Home Page";
}