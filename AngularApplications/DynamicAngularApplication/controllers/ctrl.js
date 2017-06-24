//implement the controller
app.controller("ctrl", ctrl);      //arg1 - name of controller      //arg2 - "property calling(Function)"

//function defination
function ctrl($scope) {           //$scope is a predefined object , creates the scope for variables and functions
    $scope.var_one = "AngularJS";
    $scope.var_two = "NodeJS";
    $scope.var_three = "Hadoop";
};