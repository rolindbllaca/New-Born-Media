var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".owl-nextt",
      prevEl: ".owl-prevv",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
  });

var swiper = new Swiper(".slide-content1", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".owl-nextt",
        prevEl: ".owl-prevv",
    },

    breakpoints:{
        0: {
            slidesPerView: 1.5,
        },
        650: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});





// map
// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    effect: 'coverflow',
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 3,
        slideShadows : false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".owl-nextt",
        prevEl: ".owl-prevv",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 1.5,
        },
        1000: {
            slidesPerView: 1.5,
        },
    }
});

$.fn.commentCards = function(){

    return this.each(function(){

        var $this = $(this),
            $cards31 = $this.find('.card31'),
            $current = $cards31.filter('.card--current'),
            $next;

        $cards31.on('click',function(){
            if ( !$current.is(this) ) {
                $cards31.removeClass('card--current card--out card--next');
                $current.addClass('card--out');
                $current = $(this).addClass('card--current');
                $next = $current.next();
                $next = $next.length ? $next : $cards31.first();
                $next.addClass('card--next');
            }
        });

        if ( !$current.length ) {
            $current = $cards31.last();
            $cards31.first().trigger('click');
        }

        $this.addClass('cards--active');

    })

};

$('.cards31').commentCards();
