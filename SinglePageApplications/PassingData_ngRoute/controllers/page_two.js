(function(){
    "use strict";

    app.controller("page_two",page_two);
    function page_two($scope,$routeParams){
        $scope.var_two = $routeParams.id+"..."+$routeParams.name+"..."+$routeParams.sal;
    }
})();