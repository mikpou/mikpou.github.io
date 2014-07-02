// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).ready(function() {
	var documentW = $(document).width();
	if (documentW > 1024) {
		$(document).on("scroll", function(){
			yPos = $(this).scrollTop();
			var logo = $(".header-row img");
			// if (logo.css('opacity') > 0) {
				logo.css({'opacity': (1 - yPos/240)});
				console.log(yPos);
				console.log(window.pageYOffset);
			// } 
		});
	}	
});