app.service("userAPI", function($http, config){
    this.getById = function (id) {
        return $http.get(config.baseUrl + "users/" + id);
    }
});