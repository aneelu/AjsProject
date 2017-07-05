app.controller("angular2",angular2);
angular2.$inject=["$scope","homeService"];
function angular2($scope,homeService) {
    homeService.mySQLData().then(function (res) {
        $scope.angular2 = res;
    });
}