app.controller("page_two",page_two);
page_two.$inject=["$scope","$stateParams"];
function page_two($scope,$stateParams) {
    $scope.var_two = $stateParams.id+"..."+$stateParams.name;
}