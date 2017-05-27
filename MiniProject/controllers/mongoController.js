app.controller("mongoController",mongoController);
mongoController.$inject=["$scope","homeService"];
function mongoController($scope,homeService) {
    homeService.mongo().then(function (res) {
        $scope.mongo=res;
    });
}