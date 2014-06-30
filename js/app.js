// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function() {
	
	$("ul.posts li a.post-link").on('click', function(e) {
		e.preventDefault();
		var link = $(this).attr("href");
		$(this).siblings(".post-content").load(link + " " + ".post");
	});
});