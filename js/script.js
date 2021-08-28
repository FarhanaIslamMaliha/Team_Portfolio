

//portfolio venobox
$('.venobox').venobox();


$(function () {
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
});

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 100) {
        $('.back-top').fadeIn(500);
    } else {
        $('.back-top').fadeOut(500);
    }
          if(scrolling > 150){
          $('.menu').addClass('fixed');
      }
        else{
            $('.menu').removeClass('fixed');
        }
});

var html_body = $('html, body');
    $('.nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 85
                }, 1500);
                return false;
            }
        }
    });
$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());