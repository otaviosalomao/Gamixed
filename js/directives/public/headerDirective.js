app.directive('publicHeader', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/shared/public/header.html'
    }
})