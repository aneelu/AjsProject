app.controller("summaryController",summaryController);
summaryController.$inject=["$scope"];
function summaryController($scope) {
    $scope.summary = "i am from summary page";
}