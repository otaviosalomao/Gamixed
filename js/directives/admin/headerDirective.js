app.directive("restrictHeader", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/admin/header.html'
    }
})