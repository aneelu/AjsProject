(function () {
    "use strict";
    app.controller("child_two",child_two);
    function child_two($scope) {
        $scope.child_two = "From Child Two !";
    }
})();