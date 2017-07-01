app.controller("page_one",page_one);
page_one.$inject=["$scope","$routeParams"];
function page_one($scope,$routeParams) {
    $scope.var_one=$routeParams.id+"..."+$routeParams.name+"..."+$routeParams.age;
}