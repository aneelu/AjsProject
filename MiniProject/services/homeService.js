app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {
    this.staticData = function () {
        return $http.post("/static",{'token':$localStorage.mini_project.data.token}).then(function (posRes) {
           return posRes.data.emp;
        },function (errRes) {
            return errRes;
        });
    };

    this.mySQLData = function () {
        return $http.post("/mysql",{'token':$localStorage.mini_project.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };

    this.mongoData = function () {
        return $http.post("/mongodb",{'token':$localStorage.mini_project.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };
}