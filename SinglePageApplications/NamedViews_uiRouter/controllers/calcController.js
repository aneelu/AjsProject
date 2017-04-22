app.controller("calcController", calcController);
calcController.$inject = ["$scope", "my_service"];
function calcController($scope, my_service) {
    $scope.calc = my_service.calcData();
}