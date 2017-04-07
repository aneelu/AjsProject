app.controller("mongoController",mongoController);
mongoController.$inject=["$scope","homeService"];
function mongoController($scope,homeService) {
    $scope.mongo = homeService.readMongo();
}