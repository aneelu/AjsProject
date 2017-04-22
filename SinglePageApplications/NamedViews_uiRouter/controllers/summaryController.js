app.controller("summaryController", summaryController);
summaryController.$inject = ["$scope", "my_service"];
function summaryController($scope, my_service) {
    $scope.summary = my_service.summaryData();
}