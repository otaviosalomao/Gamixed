app.service("detalhesProdutoAPI", function ($http, config) {
    this.BuscarProdutoPorCodigo = function (codigoProduto) {
        return $http.get(config.baseUrl + "Produto/BuscarProdutoPorCodigo/" + codigoProduto);
    }
});