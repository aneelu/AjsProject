app.controller("child_one",child_one);
child_one.$inject=["$scope"];
function child_one($scope) {
    $scope.child_one = "Child One";
}