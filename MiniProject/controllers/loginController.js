app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$location"];
function loginController($scope,loginService,$localStorage,$location) {
    $scope.login={};

    $scope.login_details = function () {
        loginService.authenicate($scope.login).then(function (res) {
           if(res.data.login=='success'){
               $localStorage.mini_project = res;
               $location.path("/home");
           }else{
               alert("Invalid Details !");
           }
        });
    };
}