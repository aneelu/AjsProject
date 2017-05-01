app.controller("mySQLController",mySQLController);
mySQLController.$inject=["$scope","homeService"];
function mySQLController($scope,homeService) {
    homeService.mysqlData().then(function (response) {
        $scope.mysql=response;
    });
};