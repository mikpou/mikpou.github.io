// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function() {
	
	$("ul.posts li a.post-link").on('click', function(e) {
		e.preventDefault();
		$(this).siblings(".post-content").load($(this).attr("href"), ".post");
		// return false;
	});
});