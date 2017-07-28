jQuery(function($){

    // for smooth scroll
    smoothScroll.init({
        selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
    });

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

        //for iphone-inline-video
        if ($('.autoplay').length) {
            var videoBox = $('video.autoplay'),
                video = videoBox.get(0);
                enableInlineVideo(video, {
                    iPad: true
                });
                setTimeout(function () {
                    video.play();
                    videoBox.addClass('v-play');
                }, 200);
            videoBox.on('click', function () {
                if($(this).hasClass('v-play')) {
                    video.pause();
                    $(this).removeClass('v-play');
                } else {
                    video.play();
                    $(this).addClass('v-play');
                }
            })
        }

        if($('#f-date').length) {
            $( "#f-date" ).datepicker({
                dateFormat: "d MM yy",
                changeMonth: true,//this option for allowing user to select month
                changeYear: true //this option for allowing user to select from year range
            });
        }
	});
});