


UserManager.addUser(new User("jonas","mikkelsen","jonas","jonas@hotmail.com","jonas123","dalumskolen"));







var user = JSON.parse(localStorage.getItem("user"));

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><img src="assets/images/icon2.png" class="user_icon" alt=""><span class= username>' + user.firstname + " " + user.lastname + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}
