app.controller("ctrl",ctrl);
ctrl.$inject=["$scope","my_service","$q"];
function ctrl($scope,my_service,$q) {

   /* my_service.fun_one().then(function (res) {
        $scope.var_one = res;
    });


    my_service.fun_two().then(function (res) {
        $scope.var_two = res;
    });*/


   /*
        $q. it is a predefined service.
            used to eliminate the data redundency
            used to make a Asynchoronus Calls.
    */

   $q.all([my_service.fun_one(),my_service.fun_two()]).then(function (res) {
       $scope.var_one = res[0];
       $scope.var_two = res[1];
   });




}