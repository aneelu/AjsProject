app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {
    this.static = function () {
        return $http.post("/static",{'token':$localStorage.mini_project.data.token}).then(function (res) {
           return res;
        },function (res) {
            return res;
        });
    };

    this.mysql = function () {
        return $http.post("/mysql",{'token':$localStorage.mini_project.data.token}).then(function (res) {
            return res;
        },function (res) {
            return res;
        });
    };

    this.mongodb = function () {
        return $http.post("/mongodb",{'token':$localStorage.mini_project.data.token}).then(function (res) {
            return res;
        },function (res) {
            return res;
        });
    };
}