app.controller("mongodbController",mongodbController);
mongodbController.$inject=["$scope","homeService"];
function mongodbController($scope,homeService) {
   homeService.getMongoData().then(function (res) {
       $scope.mongodb = res;
   });
}