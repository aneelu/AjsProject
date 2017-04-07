app.controller("mysqlController",mysqlController);
mysqlController.$inject=["$scope","homeService"];
function mysqlController($scope,homeService) {
    $scope.mysql=homeService.readMysql();
}