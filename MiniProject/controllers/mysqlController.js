app.controller("mysqlController",mysqlController);
mysqlController.$inject=["$scope","homeService"];
function mysqlController($scope,homeService) {
    homeService.mysql().then(function (response) {
        $scope.mysql=response;
    });
}