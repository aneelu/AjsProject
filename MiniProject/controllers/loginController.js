app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$location"];
function loginController($scope,loginService,$location) {
    $scope.login_details = function (data) {
        loginService.authenicate(data).then(function (res) {
            if(res.data.login == 'success'){
                $location.path("/home");
            }else{
                alert("Invalid Details !");
            }
        });
    };
}