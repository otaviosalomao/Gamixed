app.controller("LoginController", function($scope,$location, loginAPI, userAPI, authService){
	$scope.Login = new Object();	
	$scope.submit = function(){					
		loginAPI.login($scope.Login.email, $scope.Login.password).then(function successCallback(response){					
			var autenticacao = response.data;
			userAPI.getById(autenticacao.user_id).then(function successCallback(response){
    			autenticacao.nomeUsuario = response.data.name;
    		});
			authService.setToken(autenticacao);
			authService.setLocalToken(autenticacao);			
			$location.path("/admin");
		});
	}
})