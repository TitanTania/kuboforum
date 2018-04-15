
document.addEventListener("DOMContentLoaded", function() {
	// Tager nummeret bag "#" i linket. Dette er nummeret på den tråd vi er inde på.
	// Vi tager "substringen" af hashen. Fordi vi ikke skal bruge "#" mærket.
	var activeThreadId = window.location.hash.substring(1)
	// Vi vælger den active tråd i variablen thread.
	var thread = threads[activeThreadId];
	// Sæt dato, navn og teksten ind fra den valgte tråd.
	document.getElementById('threadName').innerHTML = thread.name;
	document.getElementById('threadText').innerHTML = thread.text;
	document.getElementById('threadDate').innerHTML = "Submitted " + new Date(thread.date).toLocaleDateString();

	// Henter de kommentarer der er til den her tråd.
	for (var i = 0; i < comments.length; i++) {
		var comment = comments[i];
		// Vi spørger efter threadId fra comment.
		if (comment.threadId != activeThreadId) {
			// Ok. Den her kommentar hører ikke til den her tråd. Vi "fortsætter loopet"
			continue; // Stopper den her gang i loopet og starter med næste.
		}

		var commentHTML = "<p><b>" + comment.author + "</b> submitted " + new Date(thread.date).toLocaleDateString() + "</p><p>" + comment.text + "</p>";
		document.getElementById('thread_comments').innerHTML += commentHTML;
	}
})
