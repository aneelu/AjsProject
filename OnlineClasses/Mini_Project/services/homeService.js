app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {
    var token = $localStorage.mini_project.data.token;

    this.staticData = function () {
        return $http.post("/static",{'token':token}).then(function (response) {
            console.log(response);
            return response.data.records;
        });
    };


    this.mongoData = function () {
        return $http.post("/mongo",{'token':token}).then(function (response) {
            console.log(response);
            return response.data;
        });
    };
};