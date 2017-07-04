app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$location"];
function loginController($scope,loginService,$localStorage,$location) {
    $scope.login={};
    $scope.login_details = function () {
       loginService.authenicate($scope.login).then(function (response) {
             if(response.data.login=="Success"){
                 $localStorage.mini_project = response;
                 $location.path("/home");
             }else{
                 alert("Invalid Details !");
             }
       });
    };
};