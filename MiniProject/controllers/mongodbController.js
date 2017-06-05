app.controller("mongodbController",mongodbController);
mongodbController.$inject=["$scope"];
function mongodbController($scope) {
    $scope.mongodb = "Data From MongoDB Soon...";
}