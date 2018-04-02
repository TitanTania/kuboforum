UserManager = {

	users: [], //array - gemme user objekter

	addUser: //push putter ekstra element til sidst i arrayet, fordi userne skal gemmes et sted - "falsk database"
	function (user){
		this.users.push(user);
	},

	login:
	function (username, password){ //argumenter (username, password)
		var user;
		for (var i = 0; i < this.users.length; i++) { //for = loop - .lenght tæller elementer i array - fortæller hvor mange elementer der er

			user = this.users[i];
			if(user.username == username && user.password == password){
				localStorage.setItem("user", JSON.stringify(user)); //object om til string gemt i localStorage
				return user; //når noget bliver returnet så dør funktionen
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
	function (usernameId, passwordId){ //fysiske id'er fra html
		event.preventDefault();
		var username = document.getElementById(usernameId);
		var password = document.getElementById(passwordId);
		if(this.login(username.value, password.value)){ //if kører kun hvis den er true
			location.reload(); //hvis login er succesful så reloader siden
		}
		else{
			username.style.borderColor = "#f00";
			password.style.borderColor = "#f00";
		}

	}

}
