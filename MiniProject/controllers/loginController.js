app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService"];
function loginController($scope,loginService) {
    $scope.login={};

    $scope.login_details = function () {
        loginService.authenicate($scope.login).then(function (res) {
           console.log(res);
        });
    };
}