app.controller("staticController",staticController);
staticController.$inject=["$scope","homeService"];
function staticController($scope,homeService) {
     homeService.static().then(function (response) {
         $scope.static = response;
    });
}