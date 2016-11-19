//Seta titulo nas rotas
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

        if (current.$$route) {
            if (current.$$route.title) {
                $rootScope.title = current.$$route.title;
            }
            if ($rootScope.description) {
                $rootScope.description = current.$$route.description;
            }
        }

    });
}]);