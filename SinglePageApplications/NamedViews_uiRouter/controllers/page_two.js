app.controller("page_two", page_two);
page_two.$inject = ["$scope", "my_service"];
function page_two($scope, my_service) {
    $scope.var_two = my_service.pageTwoData();
}