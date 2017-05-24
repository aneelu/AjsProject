app.controller("mongodbController",mongodbController);
mongodbController.$inject=["$scope","homeService"];
function mongodbController($scope,homeService) {
    $scope.mongodb=homeService.mongodb();
}