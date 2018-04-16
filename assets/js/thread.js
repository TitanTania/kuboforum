
document.addEventListener("DOMContentLoaded", function() {
	var activeThreadId = window.location.hash.substring(1)
	var thread = threads[activeThreadId];
	document.getElementById('threadName').innerHTML = thread.name;
	document.getElementById('threadText').innerHTML = thread.text;
	document.getElementById('threadDate').innerHTML = "Submitted " + new Date(thread.date).toLocaleDateString();


	for (var i = 0; i < comments.length; i++) {
		var comment = comments[i];
		if (comment.threadId != activeThreadId) {

			continue;
		}

		var commentHTML = "<p><b>" + comment.author + "</b> submitted " + new Date(thread.date).toLocaleDateString() + "</p><p>" + comment.text + "</p>";
		document.getElementById('thread_comments').innerHTML += commentHTML;
	}
})
