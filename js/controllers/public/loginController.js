app.controller("LoginController", function($scope,$location, loginAPI, userAPI, authService){
	$scope.Login = new Object();	
	$scope.submit = function(){					
		loginAPI.login($scope.Login.email, $scope.Login.password).then(function successCallback(response){					
			authService.setToken(response.data);
			authService.setLocalToken(response.data);
			$location.path("/admin");
		});
	}
})