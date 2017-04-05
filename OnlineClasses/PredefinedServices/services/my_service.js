app.service("my_service",my_service);
my_service.$inject=["$http"];
function my_service($http){
    this.fun_one = function(){
      return $http.get("https://www.w3schools.com/angular/customers.php").then(function(response){

      },function(response){

      });
    };
};