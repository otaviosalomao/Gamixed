app.factory("authInterceptor", function ($location, authService, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if (authService.getToken() && authService.getToken().token) {
                config.headers['Authorization'] = authService.getToken().token;
            }
            return config;
        }
    }
});