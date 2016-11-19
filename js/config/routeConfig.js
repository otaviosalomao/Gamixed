app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "view/public/home.html",
        controller: "HomeController"
    });

    $routeProvider.when("/products", {
        templateUrl: "view/public/products.html",
        controller: "ProductsController"
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
});