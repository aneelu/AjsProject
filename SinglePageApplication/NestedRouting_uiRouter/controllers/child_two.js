app.controller("child_two",child_two);
child_two.$inject=["$scope"];
function child_two($scope) {
    $scope.child_two = "Child Two";
}