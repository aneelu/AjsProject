app.controller("page_one",page_one);
page_one.$inject=["$scope","$routeParams"];
function page_one($scope,$routeParams){
	$scope.var_one = $routeParams.data1+"..."+$routeParams.data2+"..."+$routeParams.data3;
}