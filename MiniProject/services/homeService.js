app.service("homeService",homeService);
homeService.$inject=["$http", "$localStorage"];
function homeService($http,$localStorage) {

    this.static = function () {
        return $http.post("http://localhost:8080/static",{"token":$localStorage.mini_project.data.token}).then(function (res) {
           return res;
        },function (res) {
            return res;
        });
    };

    this.mysql = function () {
        return "Data From MySQL Soon...";
    };

    this.mongodb = function () {
        return "Data From MongoDB Soon...";
    };
}