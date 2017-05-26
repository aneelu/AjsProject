app.controller("loginController",loginController);
loginController.$inject=["$scope"];
function loginController($scope) {
    $scope.login_details = function (data) {
        alert(data);
    };
};