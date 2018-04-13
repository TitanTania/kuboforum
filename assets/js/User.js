//constructer for "User"-objects
function User(firstname, lastname, username, email, password, school){
	this.firstname = firstname;
	this.lastname = lastname;
	this.username = username;
	this.email = email;
	this.password = password;
	this.school = school;
}
//this refererer til det object der bliver lavet//


function addThread() {
var thread = document.getElementById("thread").value;
threads.push(thread);
localStorage.setItem("threads", JSON.stringify(categories));
addThreadToList(thread);
}

function addThreadToList(threadName) {
	var liElement = document.createElement("li");
	liElement.innerHTML=threadName;
	document.getElementById("thread").appendChild(liElement);
}

var threads = [];
var loadedThreads = localStorage.getItem("threads");
if (loadedThreads != null) {
	threads = JSON.parse(loadedThreads);
}

document.addEventListener("DOMContentLoaded", function() {
	for (var i = 0; i < threads.length; i++) {
		var thread = threads[i];
		addThreatToList(threads);
	}

	document.getElementById('id')
})
