$(document).ready(function() {

    // portable
    enquire.register("screen and (max-width: 1023px)", {
        match : function() {
            (function () {
                var $frame  = $('#palm');
                var $slidee = $frame.children('ul').eq(0);
                var $wrap   = $frame.parent();

                // Call Sly on frame
                $frame.sly({
                    horizontal: 1,
                    itemNav: 'basic',
                    smart: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    scrollBar: $wrap.find('.scrollbar'),
                    scrollBy: 1,
                    pagesBar: $wrap.find('.pages'),
                    activatePageOn: 'click',
                    speed: 300,
                    elasticBounds: 1,
                    dragHandle: 1,
                    dynamicHandle: 1,
                    clickBar: 1,

                    // Buttons
                    forward: $wrap.find('.forward'),
                    backward: $wrap.find('.backward'),
                    prev: $wrap.find('.prev'),
                    next: $wrap.find('.next'),
                    prevPage: $wrap.find('.prevPage'),
                    nextPage: $wrap.find('.nextPage')
                });

                $(window).resize(function() {
                    $frame.sly('reload');
                    console.log('palm');
                });
            }());
        }
    });

    // desktop
    enquire.register("screen and (min-width: 1024px)", {
        match : function() {
            (function () {
                var $frame  = $('#smart');
                var $slidee = $frame.children('ul').eq(0);
                var $wrap   = $frame.parent();

                // Call Sly on frame
                $frame.sly({
                    itemNav: 'basic',
                    smart: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    scrollBar: $wrap.find('.scrollbar'),
                    scrollBy: 1,
                    pagesBar: $wrap.find('.pages'),
                    activatePageOn: 'click',
                    speed: 300,
                    elasticBounds: 1,
                    dragHandle: 1,
                    dynamicHandle: 1,
                    clickBar: 1,

                    // Buttons
                    forward: $wrap.find('.forward'),
                    backward: $wrap.find('.backward'),
                    prev: $wrap.find('.prev'),
                    next: $wrap.find('.next'),
                    prevPage: $wrap.find('.prevPage'),
                    nextPage: $wrap.find('.nextPage')
                });
            }());
        }
    });

    $(".slide-nav").responsiveSlides({
        pager: true
    });

    $('.js--head__btn').on('click', function(e) {
        var   that = $(this)
            , nav = $('.js--head-nav');

        if (nav.css('display') === 'none') {
            nav.slideDown();
        } else {
            nav.slideUp();
        }

        e.preventDefault();
    });
});
