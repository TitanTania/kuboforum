


UserManager.addUser(new User("bob","bobsen","bob420","bob@bob.bob","bobsecure","very good-school"));







var user = JSON.parse(localStorage.getItem("user")); //string om til object

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><span class= username>' + user.username + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}

var img = document.createElement("img");

img.src ="assets/images/icon_user.png";
var src = document.getElementById("login-form");

src.appendChild(img);
