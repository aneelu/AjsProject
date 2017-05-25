app.controller("mongodbController",mongodbController);
mongodbController.$inject=["$scope","homeService"];
function mongodbController($scope,homeService) {
    homeService.mongodb().then(function (response) {
        $scope.mongodb=response;
    });
}