// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).ready(function() {
	var yPos;
	var logo = $(".header-row .title");
	var documentW = $(document).width();
	if (documentW > 1024) {
		$(document).on("scroll touchmove", function(){
			yPos = $(this).scrollTop();
			logo.css({'opacity': (1 - yPos/180)});		

			// if (yPos >= 163) {
			// 	console.log("Here");
			// }

		});
	}

	$(document).on("click", ".clickToTop", function () {
		var prevAnchor = $(this).closest(".top").prev(".post").find(".post-header a");
		console.log(prevAnchor);
		$("html, body").animate({ scrollTop: prevAnchor.offset().top}, 600);
		return false;
	});

	// $('.stickyContainer').stickyHeaders({
 //        onHeaderChange: function() { // When we scroll, trigger an event that tells us which header is currently at the top. We'll use this to update the select pulldown.
 //            var headerId = $(this).attr('data-header');
 //            $('#headerJumpSelect').val(headerId);
 //        }
 //    });

});