app.controller("aboutController",aboutController);
aboutController.$inject=["$scope","homeService"];
function aboutController($scope,homeService) {
    homeService.getData().then(function (res) {
       $scope.about=res;
    });
}