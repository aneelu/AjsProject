app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenicate = function (login_details) {
        return $http.post("/login",login_details).then(function (posRes) {
            return posRes;
        },function (errRes) {
            return errRes;
        });
    } 
}