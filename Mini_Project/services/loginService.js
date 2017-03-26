app.service("loginService",loginService);
loginService.$inject=["$http","$q"];
function loginService($http,$q) {
    this.authenticate=function (data) {
        return $http.post("/api/login",data).then(function (res) {
            return res;
        });
    };
}