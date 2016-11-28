app.factory("authService", function ($sessionStorage, $localStorage) {
    var _getToken = function () {
        return $sessionStorage.token;
    };

     var _setToken = function (token) {
        _logout();        
        $sessionStorage.token = token;        
    };

     var _logout = function () {
        delete $sessionStorage.token;        
    };

    var _getLocalToken = function () {
        return $localStorage.token;
    }
    
    var _setLocalToken = function (token) {        
        $localStorage.token = token;        
    };

    return {
        getToken: _getToken,
        setToken: _setToken,
        getLocalToken: _getLocalToken,
        setLocalToken: _setLocalToken,
        logout: _logout
    };

});