app.directive("restrictFooter", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/shared/admin/footer.html'
    }
})