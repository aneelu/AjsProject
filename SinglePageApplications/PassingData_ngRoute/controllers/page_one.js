(function(){
    "use strict";

    app.controller("page_one",page_one);
    function page_one($scope,$routeParams){
        $scope.var_one = $routeParams.id+"..."+$routeParams.name+"..."+$routeParams.sal;
    }
})();