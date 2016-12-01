app.controller("headerController", function($scope, $location, authService, userAPI) {	
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.url();
    };

    $scope.categorias = [{ "Descricao": "Gold", "CodigoCategoria": 1 }, { "Descricao": "Time Card", "CodigoCategoria": 2 }];
    $scope.categoriaSelecionada = null;

    $scope.isLogged = function(){
    	var autenticacao = authService.getToken();
    	if(autenticacao){
    		$scope.nomeUsuario = autenticacao.nomeUsuario;
    		return true;
    	}
    	return false;
    }    
});