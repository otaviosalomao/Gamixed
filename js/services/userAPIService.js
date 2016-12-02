app.service("userAPI", function($http, config){
    this.getById = function (id) {
        return $http.get(config.baseUrl + "users/" + id);
    }
    this.getAll = function () {
        return $http.get(config.baseUrl + "users");
    }
    this.register = function(user){
    	return $http.post(config.baseUrl + "users", user);
    }
});