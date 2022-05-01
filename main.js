$(document).ready(function () {
    //----scroll-----//
    $('#about').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 600
        }, 500);
    });
    $('#works').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1800
        }, 500);
    });
    $('#contact').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2400
        }, 500);
    });
    $('#btn-scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    //---progress_bar----//
    $(window).scroll(function () {
        var htmlBar = $('#html-bar');
        var cssBar = $('#css-bar');
        var jsBar = $('#js-bar');
        var reactBar = $('#react-bar');
        var scrolling = $(this).scrollTop();
        var navigation = $('.navbar-default .navbar-nav li a');
        var buttonScroll = $('#btn-scroll-top');
        var portTitle = $('#logo-port');
        var progressBar = function (width, selectId) {
            if (scrolling >= 1000){
                selectId.animate({
                    width: width
                }, {
                    duration: 3000,
                    easing: "linear",
                    step: function(x) {
                        selectId.text(Math.round(x)  + "%");
                    }
                });
            }
            //----nav bar color-----//
            if (scrolling > 200){
                $('nav').addClass('nav-color');
                navigation.addClass('links-color');
                portTitle.addClass('links-color');
                buttonScroll.removeClass('hidden');

            } else {
                $('nav').removeClass('nav-color');
                navigation.removeClass('links-color');
                portTitle.removeClass('links-color');
                buttonScroll.addClass('hidden');
            }
        };
        progressBar('95%', htmlBar);
        progressBar('85%', cssBar);
        progressBar('80%', jsBar);
        progressBar('80%',reactBar);

    });


});


