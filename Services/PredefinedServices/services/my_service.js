app.service("my_service",my_service);
my_service.$inject=["$http","$q"];
function my_service($http,$q) {

    var deffered_one  = $q.defer();
    this.fun_one = function () {
        return $http.get("https://www.w3schools.com/angular/customers.php").then(function (posRes) {
            deffered_one.resolve(posRes.data.records);
            return deffered_one.promise;
        },function (negRes) {
            deffered_one.reject(negRes);
            return deffered_one.promise;
        });
    };



    var deffered_two = $q.defer();
    this.fun_two = function () {
      return $http.post("http://test-routes.herokuapp.com/test/uppercase",{"message":"hello"}).then(function (posRes) {
          deffered_two.resolve(posRes.data.message);
          return deffered_two.promise;
      },function (negRes) {
          deffered_two.reject(negRes);
          return deffered_two.promise;
      });
    };

};