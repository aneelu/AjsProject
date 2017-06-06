app.controller("staticController",staticController);
staticController.$inject=["$scope","homeService"];
function staticController($scope,homeService) {
    homeService.getStaticData().then(function (res) {
        $scope.static = res;
    });
}