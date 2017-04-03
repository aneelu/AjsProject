app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService","$localStorage","$sessionStorage"];
function loginController($scope,loginService,$localStorage,$sessionStorage) {
    $scope.login_details = function (data) {
        loginService.authenicate(data).then(function (response) {
            $localStorage.my_project=response; //AngularJS Storage
            window.localStorage.setItem("my_project",
                                         JSON.stringify(response)); //HTML5 Storage
            $sessionStorage.my_project=response; //AngularJS Session Storage
        });
    };
};