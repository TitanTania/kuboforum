


UserManager.addUser(new User("jonas","mikkelsen","jonas","jonaskmik@hotmail.com","jonas123","dalumskolen"));







var user = JSON.parse(localStorage.getItem("user")); //string om til object

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><img src="assets/images/icon2.png" class="user_icon" alt=""><span class= username>' + user.firstname + " " + user.lastname + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}


Kategorier.push(new Kategori("Hjælp"))
/*push skubber en ny ting ind. Tilføjer det til slutningen af array?*/

/*forum scripy starts*/

function getLocal() {
	var post = localStorage.getItem('postContent');
}
