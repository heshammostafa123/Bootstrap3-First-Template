$(document).ready(function() {
	$(window).scroll(function() {
		var navbar=$(".navbar"),
			header=$(".header");
		if($(window).scrollTop()>=header.height()){
			navbar.addClass("scrolled navbar-fixed-top")
		}else{
			navbar.removeClass("scrolled navbar-fixed-top")
		}
	})


	//Deal with tabs
	$(".tabs-section .tabs-switch li").click(function() {
		//Add Selected class to active link
		$(this).addClass("selected").siblings().removeClass("selected");
		//hide all divs
		$(".tabs-section .tabs-content > div").hide();
		//show div connect with this link
		$("."+$(this).data('class')).show();
	})
})
