app.service("loginAPI", function($http, config){
	this.login = function(email, password){
		var login = {email: email, password: password};
		return $http.post(config.baseUrl + "login/", login);
	}	
	this.checkValidToken = function(user_id, token){
		var access = {token: token, user_id: user_id};
		return $http.post(config.baseUrl + "access", access);
	}
})