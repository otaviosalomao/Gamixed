app.controller("UserController", function($scope, $rootScope, userAPI){
	userAPI.getAll().then(function successCallback(response){
		$rootScope.ListaPaginacao = response.data;
	});

	$scope.register = function(){
		userAPI.register($scope.user).then(function successCallback(response){
			userAPI.getAll().then(function successCallback(response){
				$rootScope.ListaPaginacao = response.data;
			});
			$scope.user = null;
		});
	}
});