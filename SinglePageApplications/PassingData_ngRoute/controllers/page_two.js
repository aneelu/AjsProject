app.controller("page_two",page_two);
page_two.$inject=["$scope","$routeParams"];
function page_two($scope,$routeParams) {
    $scope.var_two=$routeParams.id+"..."+$routeParams.name+"..."+$routeParams.age;
}