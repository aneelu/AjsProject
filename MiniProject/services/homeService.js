app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    this.getStaticData = function(){
        return $http.post("/static",{'token':$localStorage.mini_project.data.token}).then(function (res) {
            return res;
        },function (res) {
            return res;
        });
    }

    this.getMySQLData = function(){
        return $http.post("/mysql",{'token':$localStorage.mini_project.data.token}).then(function (res) {
            return res;
        },function (res) {
            return res;
        });
    }

    this.getMongoData = function(){
        return $http.post("/mongodb",{'token':$localStorage.mini_project.data.token}).then(function (res) {
            return res;
        },function (res) {
            return res;
        });
    }

}