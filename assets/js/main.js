


UserManager.addUser(new User("bob","bobsen","bob420","bob@bob.bob","bobsecure","very good-school"));







var user = JSON.parse(localStorage.getItem("user")); //string om til object

if(UserManager.checkLogin(user)){
	document.getElementById("login-form").innerHTML = '<form><img src="assets/images/icon2.png" class="user_icon" alt=""><span class= username>' + user.username + '</span><button type="button" onclick="UserManager.logout()">Logout</button></form>';
}


//for categories
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
