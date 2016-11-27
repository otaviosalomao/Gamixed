app.directive('restrictHeader', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/shared/admin/header.html'
    }
})