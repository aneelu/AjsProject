app.controller("login",login);
login.$inject=["$scope","loginService","$localStorage","$location"];
function login($scope,loginService,$localStorage,$location) {
    $scope.login_details = function (data) {
       loginService.authenticate(data).then(function (response) {
          if(response.data.login == "success"){
              $localStorage.mini_project = response;
              $location.path("/home");
          }else{
              alert("Invalid Details !");
          }
       });
    };
};