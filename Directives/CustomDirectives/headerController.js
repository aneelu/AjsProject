app.controller("headerController",headerController);
headerController.$inject=["$scope"];
function headerController($scope) {
    $scope.logout = function () {
        alert("Logged Out Successfully !");
    };
};