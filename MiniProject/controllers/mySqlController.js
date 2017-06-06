app.controller("mySqlController",mySqlController);
mySqlController.$inject=["$scope","homeService"];
function mySqlController($scope,homeService) {
    homeService.getMySQLData().then(function (res) {
        $scope.mysql = res;
    });
}