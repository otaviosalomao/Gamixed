app.config(function ($routeProvider) {
    //PUBLIC
    $routeProvider.when("/home", {
        templateUrl: "view/public/home.html",
        controller: "HomeController"
    });

    $routeProvider.when("/products", {
        templateUrl: "view/public/products.html",
        controller: "ProductsController"
    });

    $routeProvider.when("/login", {
        templateUrl: "view/public/login.html",
        controller: "LoginController"
    });

    $routeProvider.when("/detail", {
        title: "Produto - Detalhes",
        templateUrl: "view/public/detail.html",
        controller: "DetailController",       
    });    
 
    $routeProvider.when("/error", {
        title: "erro",
        templateUrl: "view/shared/error.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

    //RESTRICT

    $routeProvider.when("/admin", {
        templateUrl: "view/admin/home.html",
        controller: "LoginController"
    });
    
});