app.controller("header",header);
header.$inject=["$scope"];
function header($scope) {
    $scope.logout = function () {
        alert("Logged Out !");
    };
};