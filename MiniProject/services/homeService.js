app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    this.static = function () {
        return $http.post("/static",{"token":$localStorage.poc.data.token}).then(function (posRes) {
            return posRes;
        },function (errRes) {
            return errRes;
        });
    }

    this.mysql = function () {
        return $http.post("/mysql",{"token":$localStorage.poc.data.token}).then(function (posRes) {
            return posRes;
        },function (errRes) {
            return errRes;
        });
    }

    this.mongo = function () {
        return $http.post("/mongodb",{"token":$localStorage.poc.data.token}).then(function (posRes) {
            return posRes;
        },function (errRes) {
            return errRes;
        });
    }
}