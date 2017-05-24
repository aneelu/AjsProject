app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$location","$localStorage"];
function loginController($scope,loginService,$location,$localStorage) {
    $scope.login_details = function (data) {
        loginService.authenicate(data).then(function (res) {

            if(res.data.login == 'success'){
                $localStorage.poc = res;
                $location.path("/home");
            }else{
                alert("Invalid Details !");
            }
        });
    };
}