


UserManager.addUser(new User("Karen","Pedersen","Karen","karenpedersen@jubii.dk","karen123","Dalumskolen"));







var user = JSON.parse(localStorage.getItem("user")); //string om til object

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><img src="assets/images/icon2.png" class="user_icon" alt=""><span class= username>' + user.username + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}


Kategorier.push(new Kategori("Hjælp"))
/*push skubber en ny ting ind. Tilføjer det til slutningen af array?*/
