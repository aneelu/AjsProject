app.controller("home",home);
home.$inject=["$scope","$location","$localStorage"];
function home($scope,$location,$localStorage) {
    $scope.logout = function () {
      delete $localStorage.mini_project;
      $location.path("/login");
    };
};