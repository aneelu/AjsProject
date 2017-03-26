app.controller("homeController",homeController);
homeController.$inject=["$scope","$location","$localStorage"];
function homeController($scope,$location,$localStorage) {
    $scope.logout = function () {
        delete $localStorage.workshop;
        $location.path("/login");
    }
}