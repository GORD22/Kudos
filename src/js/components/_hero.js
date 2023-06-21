import Swiper, { Autoplay, Pagination } from 'swiper';

const swiperHero = new Swiper(".hero__swiper", {
  modules: [Pagination, Autoplay],

  loop: true,

  autoplay: {
    delay: 5000,
  },

  speed: 1000,

  breakpoints: {
    769: {
      pagination: {
        enabled: true,
        el: ".swiper-pagination",
      },
    }
  }
});