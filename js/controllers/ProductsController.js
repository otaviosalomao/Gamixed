app.controller("ProductsController", function ($scope, productAPI) {
	console.log(productAPI);
	productAPI.getAll().then(function successCallBack(response){
		$scope.products = response.data;	
		console.log($scope.products);
	});
})
