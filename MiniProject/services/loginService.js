app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenicate = function (data) {
        return $http.post("/login",data).then(function (res) {
           return res;
        },function (res) {
            return res;
        });
    };
};