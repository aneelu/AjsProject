app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$location","$localStorage"];
function loginController($scope,loginService,$location,$localStorage) {
    $scope.login_details = function (data) {
        loginService.authenticate(data).then(function (response) {
            if(response.data.login=="Success"){
                $localStorage.mini_project=response;
                $location.path("/home");
            }else{
                alert("Invalid Details !");
            };
        });
    };
};