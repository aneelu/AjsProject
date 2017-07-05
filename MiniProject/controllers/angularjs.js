app.controller("angularjs",angularjs);
angularjs.$inject=["$scope","homeService"];
function angularjs($scope,homeService) {
    homeService.staticData().then(function (res) {
        $scope.angularjs = res;
    });
}