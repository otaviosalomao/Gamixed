app.controller("PublicHeaderController", function($scope, $location) {
	
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.url();
    };

    $scope.categorias = [{ "Descricao": "Gold", "CodigoCategoria": 1 }, { "Descricao": "Time Card", "CodigoCategoria": 2 }];
    $scope.categoriaSelecionada = null;
});