app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    var token = $localStorage.my_project.data.token;
    console.log(token);

    this.readStatic = function () {

        return $http.get("/static").then(function (response) {
            return response;
        });
    };

    this.readMysql = function () {

        return "Data from Server Soon (MySQl)";
    };

    this.readMongo = function () {

        return "Data from Server Soon (MongoDB)";
    };
}