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
        var hero_video = $('.section-hero video');
        if ($('.autoplay').length) {
            var videoBox = $('video.autoplay'),
                video = videoBox.get(0),
                speed = videoBox.data('speed');

            enableInlineVideo(video, {
                iPad: true
            });

            setTimeout(function () {
                video.play();
                videoBox.addClass('v-play');
                if (speed) video.playbackRate = speed;
            }, 200);
        }
        if (hero_video.length) {
            enableInlineVideo(hero_video.get(0), {
                iPad: true
            });

            hero_video.on('click', function () {
                var video = $(this).get(0),
                    speed = $(this).data('speed');

                if($(this).hasClass('v-play')) {
                    video.pause();
                    $(this).removeClass('v-play');
                } else {
                    video.play();
                    $(this).addClass('v-play');
                    if (speed) video.playbackRate = speed;
                }
            });
        }


        if($('.input-date').length) {
            $(".input-date").datepicker({
                dateFormat: "d MM yy",
                changeMonth: true,//this option for allowing user to select month
                changeYear: true //this option for allowing user to select from year range
            });
        }
	});
});