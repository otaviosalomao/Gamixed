app.service("loginAPI", function($http, config){
	this.login = function(email, password){
		var login = {email: email, password: password};
		return $http.post(config.baseUrl + "login/", login);
	}	
})