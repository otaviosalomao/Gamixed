app.controller("LoginController", function($scope, loginAPI){
	$scope.Login = new Object();
	$scope.submit = function(){
		console.log($scope.Login);
		loginAPI.login($scope.Login.email, $scope.Login.password).then(function successCallback(response){			
			authService.setToken(response.data);
		});
	}
})