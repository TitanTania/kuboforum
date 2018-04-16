function Thread(name, text) {
	this.name = name;
	this.text = text;
	this.vote = 0;
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
	window.history.back();
}

function addComment() {
	var activeThreadId = window.location.hash.substring(1);

	var commentText = document.getElementById("text").value;
	var comment = new Comment(activeThreadId, commentText);
	comments.push(comment);
	localStorage.setItem("comments", JSON.stringify(comments));
	window.location.reload();
}

var threads = [];
var loadedThreads = localStorage.getItem("threads");
if (loadedThreads != null) {
	threads = JSON.parse(loadedThreads);
}


var comments = [];
var loadedComments = localStorage.getItem("comments");
if (loadedComments != null) {
	comments = JSON.parse(loadedComments);
}
