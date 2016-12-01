app.run(function ($rootScope, $location, authService, $sce) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (next.authorize) {
            if (!authService.getToken()) {
                
                $rootScope.$evalAsync(function () {
                    toastr.error('', "Sess&atilde;o expirada, por favor faça o login novamente.");
                    $location.path('/home');
                });
            }
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.$$route) {
            if (current.$$route.title) {
                $rootScope.title = $sce.trustAsHtml(current.$$route.title);
            }
            if ($rootScope.description) {
                $rootScope.description = current.$$route.description;
            }
        }

    });

});