﻿app.controller("footerController", function ($scope, $location) {	
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url();
    };
    
});