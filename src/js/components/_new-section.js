import Swiper, { Autoplay, Pagination } from 'swiper';

const swiperNew = new Swiper(".new-section__list", {
    modules: [Pagination, Autoplay],
    
    loop:true,

    
      autoplay: {
        delay: 5000,
      },

    speed: 1000,
    allowTouchMove: true,

    slidesPerView: 'auto',

    pagination: {
        el: ".swiper-pagination",
    },

    init: true,

    breakpoints: {
        769: {
            init: false,
            allowTouchMove: false,
            autoplay: false,
            slidesOffsetAfter: 0,
            slidesPerGroup: 5,
        }
    },



});

