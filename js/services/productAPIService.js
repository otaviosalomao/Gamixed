app.service("productAPI", function ($http, config) {
 	this.getById = function (id) {
        	return $http.get(config.baseUrl + "products/" + id);
    	}
	this.getAll = function () {
        	return $http.get(config.baseUrl + "products");
   	}	
});
