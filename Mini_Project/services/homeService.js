app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    this.getData = function () {


        return $http.post("/api/about",{token:$localStorage.workshop.data.token}).then(function (res) {
           return res.data.about;
        });


    };
}