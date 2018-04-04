


UserManager.addUser(new User("bob","bobsen","bob420","bob@bob.bob","bobsecure","very good-school"));







var user = JSON.parse(localStorage.getItem("user")); //string om til object

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><div class="user_icon"><img src="assets/images/icon2.png" alt=""></div><span class= username>' + user.username + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}
