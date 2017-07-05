app.controller("nodejs",nodejs);
nodejs.$inject=["$scope","homeService"];
function nodejs($scope,homeService) {
    homeService.mongoData().then(function (res) {
        $scope.nodejs = res;
    });
}