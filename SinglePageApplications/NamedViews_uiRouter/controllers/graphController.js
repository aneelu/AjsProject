app.controller("graphController", graphController);
graphController.$inject = ["$scope", "my_service"];
function graphController($scope, my_service) {
    $scope.graph = my_service.graphData();
}