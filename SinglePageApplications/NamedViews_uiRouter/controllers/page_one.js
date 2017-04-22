app.controller("page_one", page_one);
page_one.$inject = ["$scope", "my_service"];
function page_one($scope, my_service) {
    $scope.var_one = my_service.pageOneData();
}