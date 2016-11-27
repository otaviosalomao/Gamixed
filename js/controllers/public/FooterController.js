app.controller("PublicFooterController", function ($scope, $location) {
	
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url();
    };
});