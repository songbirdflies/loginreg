export class AuthController {

	constructor($auth){
		'ngInject';

		this.$auth = $auth;
	}

	login() {
		console.log('test');
		var vm = this;

		this.$auth.login(this.login.user).then(function(token){
			vm.$auth.setToken(token);
		});
	}

	register() {
		//console.log('test');
		var vm = this;

		this.$auth.signup(this.user).then(function(token){
			vm.$auth.setToken(token);
		});
	}

}