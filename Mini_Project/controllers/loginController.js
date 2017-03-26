app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$location"];
function loginController($scope,loginService,$localStorage,$location) {
    $scope.login_details=function (data) {
        loginService.authenticate(data).then(function (res) {
           if(res.data.login=="success"){
               $localStorage.workshop=res;
               $location.path("/home");
           }else{
               alert("Wrong Details");
           }
        });
    };
};