app.controller("child_one",child_one);
child_one.$inject=["$scope"];
function child_one($scope) {
    $scope.child_one = "i am from child one page";
}