UserManager = {

	users: [], 

	addUser:
	function (user){
		this.users.push(user);
	},

	login:
	function (email, password){
		var user;
		for (var i = 0; i < this.users.length; i++) {

			user = this.users[i];
			if(user.email == email && user.password == password){
				localStorage.setItem("user", JSON.stringify(user));
			}

		}

		return false;

	},

	checkLogin:
	function (user){
		if(user){
			return true;
		}
		else{
			return false;
		}
	},

	logout:
	function (){
		localStorage.removeItem("user");
		location.reload();
	},

	loginByForm:
	function (emailId, passwordId){
		event.preventDefault();
		var email = document.getElementById(emailId);
		var password = document.getElementById(passwordId);
		if(this.login(email.value, password.value)){
		}
		else{
			email.style.borderColor = "#f00";
			password.style.borderColor = "#f00";
		}

	}

}
