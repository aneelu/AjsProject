app.controller("ctrl",ctrl);
ctrl.$inject=["$scope","my_service","$q","$timeout","$interval","$location"];
function ctrl($scope,my_service,$q,$timeout,$interval,$location) {

    /*my_service.fun_one().then(function (response) {
        $scope.var_one = response;
    });


    my_service.fun_two().then(function (response) {
       $scope.var_two=response;
    });


    my_service.fun_three().then(function (response) {
       $scope.var_three=response;
    });*/


    $q.all([my_service.fun_one(),my_service.fun_two(),my_service.fun_three()]).then(function (response) {
        $scope.var_one = response[0];
        $scope.var_two = response[1];
        $scope.var_three = response[2];

    });


    $scope.var_four="Before Timeout Service";
    $timeout(fun_one,5000);
    function fun_one() {
        $scope.var_four="After Timeout Service";
    }

    $scope.var_five=new Date().toLocaleTimeString();
    $interval(fun_two,1000);
    function fun_two() {
        $scope.var_five=new Date().toLocaleTimeString();
    }

    $scope.var_six = $location.absUrl();

};