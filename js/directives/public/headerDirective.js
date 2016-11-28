app.directive('publicHeader', function () {    
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/public/header.html'
    }
})