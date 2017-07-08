(function () {
    "use strict";
    app.controller("child_one",child_one);
    function child_one($scope) {
        $scope.child_one = "From Child One !";
    }
})();