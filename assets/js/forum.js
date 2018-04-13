//En funktion forventer at få noget at arbejde med, altså det i (). Så den forventer at få navn og text. Den her bruger det, en anden function skal lave det.
function Thread(name, text) {
	this.name = name;
	this.text = text;
	this.score = 0;
	this.creator = user.firstname;
	this.date = new Date();
}

function Comment(threadId, text) {
	this.threadId = threadId;
	this.author = user.firstname;
	this.text = text;
	this.date = new Date();
}

function addThread() {
	var threadName = document.getElementById("thread").value;
	var threadText = document.getElementById("text").value;
	var thread = new Thread(threadName, threadText);
	threads.push(thread);
	localStorage.setItem("threads", JSON.stringify(threads));
	//window.location.href = "thread.html#"+(threads.length-1);
	window.history.back(); // Går tilbage.
}

function addComment() {
	// Vi skal bruge den active tråds nummer for at kunne fortælle hvad commentaren hører til.
	var activeThreadId = window.location.hash.substring(1);

	var commentText = document.getElementById("text").value;
	var comment = new Comment(activeThreadId, commentText);
	comments.push(comment);
	localStorage.setItem("comments", JSON.stringify(comments));
	window.location.reload(); // reloader siden
}

// Array of Threads
var threads = [];
var loadedThreads = localStorage.getItem("threads");
if (loadedThreads != null) {
	threads = JSON.parse(loadedThreads);
}

// Array of Comments
var comments = [];
var loadedComments = localStorage.getItem("comments");
if (loadedComments != null) {
	comments = JSON.parse(loadedComments);
}
