document.addEventListener("DOMContentLoaded", function() {
	for (var i = 0; i < threads.length; i++) {
		var thread = threads[i];
		// Vi laver html delen for posten.

		var threadHTML = `<div class="forum_post">
			<div>
				<img src="assets/images/straight.png" class="vote_button" alt="upvote_icon">
				<img src="assets/images/straight_down.png" class="vote_button" alt="downvote_icon">
			</div>
			<div>
				<img src="assets/images/icon2.png" class="forum_icon" alt="user icon">

			</div>
				<div class="post_content">
					<h3 class="title"><a href="thread.html#"`+i+`">` + thread.name + `</a></h3>
						<p class="tagline">Submitted `+ new Date(thread.date).toLocaleDateString() +`</p>
						<ul class="tagline_buttons">
							<li class="comments"></li>
							<li class="share">Share</li>
							<li class="report">Report</li>
						</ul>
				</div>
		</div>`;
		document.getElementById('forum_posts').innerHTML += threadHTML;
	}
})
