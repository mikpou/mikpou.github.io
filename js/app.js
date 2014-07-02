// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).ready(function() {
	var yPos;
	var logo = $(".header-row img");
	var documentW = $(document).width();
	if (documentW > 1024) {
		$(document).on("scroll touchmove", function(){
			yPos = $(this).scrollTop();
			logo.css({'opacity': (1 - yPos/240)});		
		});
	}	
});