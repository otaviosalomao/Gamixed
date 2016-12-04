app.config(function($httpProvider) {    
    $httpProvider.interceptors.push("errorInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");    
    $httpProvider.interceptors.push("authInterceptor");  
});