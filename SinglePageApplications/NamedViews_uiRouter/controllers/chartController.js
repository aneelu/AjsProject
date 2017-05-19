app.controller("chartController", chartController);
chartController.$inject = ["$scope", "my_service"];
function chartController($scope, my_service) {
    $scope.chart = my_service.chartData();
}