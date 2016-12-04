app.factory("authInterceptor", function ($location, authService, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if (authService.getToken() && authService.getToken().token) {
                config.headers['token'] = authService.getToken().token;
                config.headers['user_id'] = authService.getToken().user_id;
            }
            return config;
        }
    }
});