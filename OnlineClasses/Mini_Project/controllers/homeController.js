app.controller("homeController",homeController);
homeController.$inject=["$scope","$location"];
function homeController($scope,$location) {
    $scope.logout = function () {
        $location.path("/login");
    };
};