app.service("loginService",loginService);
loginService.$inject=["$http"];
function loginService($http) {
    this.authenicate = function (data) {
       console.log(data);
    };
};