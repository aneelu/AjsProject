app.service("homeService",homeService);
homeService.$inject=["$http","$localStorage"];
function homeService($http,$localStorage) {

    this.static = function () {
        return "Data From Static Page Soon....";
    }

    this.mysql = function () {
        return "Data From MySQL DB Soon....";
    }

    this.mongo = function () {
        return "Data From MongoDB Soon....";
    }
}