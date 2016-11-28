app.factory("errorInterceptor", function($q, $location, $rootScope) {
    return {
        responseError: function(rejection) {            
            toastr.remove();
            switch (rejection.status) {
                case 400:
                    toastr.error("", rejection.data);
                    //$location.path("/home");
                    break;
                case 404:
                    toastr.error('', "P&aacute;gina n&atilde;o encontrada");
                    $location.path("/home");
                    break;
                case -1:
                    toastr.error("", "Falha ao conectar com o servidor");
                    $location.path("/home");
                    break;
                case 500:
                    toastr.error("", rejection.data);
                    $location.path("/home");
                    break;
            }

            return $q.reject(rejection);
        }
    };
});