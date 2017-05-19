app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    this.staticData = function () {
        return $http.post("/static",{token:$localStorage.mini_project.data.token}).then(function (response) {
           return response.data.emp;
        });
    };


    this.mysqlData = function () {
        return $http.post("/mysql",{token:$localStorage.mini_project.data.token}).then(function (response) {
            return response.data;
        });
    };


    this.mongoData = function () {
        return $http.post("/mongodb",{token:$localStorage.mini_project.data.token}).then(function (response) {
            return response.data;
        });
    };


};