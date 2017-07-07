(function(){
    "use strict";
    app.controller("page_one",page_one);
    function page_one($scope,$stateParams){
        $scope.var_one = $stateParams.e_id+"..."+$stateParams.e_name+"..."+$stateParams.e_age;
    }
})();