app.controller("PaginacaoController", function ($scope, $rootScope, $timeout) {
    //Variaveis
    $scope.registrosDe = 0;
    $scope.registrosAte = 0;
    $scope.totalRegistro = 0;
    $scope.PaginaAtual = 1;
    $scope.totalPaginas = 0;
    $scope.totalPorPagina = 6;    
    //Loading
    $scope.loading = function () {
        $rootScope.loading = true;
        $timeout(function () {
            $rootScope.loading = false;
        }, 200);
    }
    //Paginação
    $scope.Paginacao = function (i) {
        $scope.loading();
        $rootScope.ListaPaginada = [];
        for (var i = ($scope.registrosDe - 1) ; i < $scope.registrosAte ; i++) {
            $rootScope.ListaPaginada.push(angular.copy($rootScope.ListaPaginacao[i]));
        }
    };
    //Inicialização
    if ($rootScope.ListaPaginacao && $rootScope.ListaPaginacao.length > 0) {
        $scope.registrosDe = 1;
        $scope.registrosAte = $rootScope.ListaPaginacao.length > 6 ? 6 : $rootScope.ListaPaginacao.length;
        $scope.totalRegistro = $rootScope.ListaPaginacao.length;
        $scope.totalPaginas = Math.ceil($scope.totalRegistro / $scope.totalPorPagina);
        $scope.Paginacao();        
    }  

    $scope.FirstPage = function () {
        if ($scope.PaginaAtual > 1) {
            $scope.PaginaAtual = 1;
            $scope.registrosDe = 1;
            $scope.registrosAte = ($scope.totalRegistro > 6) ? 6 : $scope.totalRegistro;
            $scope.Paginacao();
        }
    }

    $scope.LastPage = function () {
        if ($scope.PaginaAtual < $scope.totalPaginas) {
            $scope.PaginaAtual = Math.ceil($scope.totalRegistro / $scope.totalPorPagina);
            $scope.registrosDe = (($scope.PaginaAtual * $scope.totalPorPagina) > $scope.totalRegistro) ? (($scope.PaginaAtual * $scope.totalPorPagina) - 11) : $scope.totalRegistro - 11;
            $scope.registrosAte = $scope.totalRegistro;
            $scope.Paginacao();
        }
    }

    $scope.PreviousPage = function () {
        if ($scope.PaginaAtual > 1) {
            $scope.PaginaAtual--;
            $scope.registrosDe -= 6;
            $scope.registrosAte = $scope.PaginaAtual * $scope.totalPorPagina;
            $scope.Paginacao();
        }
    }

    $scope.NextPage = function () {
        if ($scope.PaginaAtual < $scope.totalPaginas) {
            $scope.PaginaAtual++;
            $scope.registrosDe += 6;
            $scope.registrosAte = ($scope.registrosAte + 6 > $scope.totalRegistro) ? $scope.totalRegistro : $scope.registrosAte + 6;
            $scope.Paginacao();
        }
    }    
});