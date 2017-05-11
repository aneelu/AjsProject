app.controller("summaryController",summaryController);
summaryController.$inject=["$scope"];
function summaryController($scope) {
    $scope.summary = "I am from summary  controller";
}