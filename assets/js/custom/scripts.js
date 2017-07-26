$(function(){

    // for smooth scroll
	if ( $('a').is('.smooth-scroll') ) {
        smoothScroll.init({
            selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInQuad', // Easing pattern to use
            offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
        });
    }

	$(document).ready(function() {
	    //for reviews slider
        if ($('.swiper-reviews').length) {
            var swiper = new Swiper('.swiper-reviews', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30,
                loop: true
            });
        }
	});
});