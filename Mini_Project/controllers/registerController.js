app.controller("registerController",registerController);
registerController.$inject=["$scope"];
function registerController($scope) {
    $scope.register = function (data) {
        console.log(data);
    };

};