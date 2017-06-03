app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenicate = function (obj) {
        return $http.post("/login",obj).then(function (res) {
           return res;
        });
    };
};