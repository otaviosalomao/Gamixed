app.factory("authService", function ($sessionStorage, $localStorage) {

    var _getToken = function () {
        return $sessionStorage.token;
    };

    var _getLocalToken = function () {
        return $localStorage.token;
    }

    var _setToken = function (token) {
        _logout();
        $sessionStorage.token = token;        
    };

    var _logout = function () {
        delete $sessionStorage.token;        
    };

    return {
        getToken: _getToken,
        setToken: _setToken,
        logout: _logout
    };

});