// JavaScript Document
jQuery(document).ready(function($){
	    var pathname = window.location.href.split('#')[0];
    $('a[href^="#"]').each(function() {
        var $this = $(this),
            link = $this.attr('href');
        $this.attr('href', pathname + link);
    });
	// scrolling function
	function showUpScroll(){
		// this function shows/hides the top of page arrow depending on if the page is at the top or not
		if($('html,body').scrollTop() == 0)
		{
			$('#page_top_button').hide();
		}else{
			$('#page_top_button').show();
		}	
	}
	// call the showUpScroll function to make sure the up arrow is in its proper visibility state
	showUpScroll();
	
    
   
	// this adds the anchor scroll script to the buttons that link to anchor tags
	/*
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000, function(){
				showUpScroll();
			});
			return false;
			}
		}
	});
	*/

	$('#page_top_button a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000, function(){
				showUpScroll();
			});
			return false;
			}
		}
	});
	var didScroll = false;
	
	window.onscroll = doThisStuffOnScroll;
	
	function doThisStuffOnScroll() {
		didScroll = true;
	}
	
	setInterval(function() {
		if(didScroll) {
			didScroll = false;
			showUpScroll();
		}
	}, 200);
});