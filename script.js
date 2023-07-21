var swiper = new Swiper(".swiper-inner .swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-inner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-inner .swiper-button-next",
    prevEl: ".swiper-inner .swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-out .swiper", {
  navigation: {
    nextEl: ".swiper-out  .swiper-button-next",
    prevEl: ".swiper-out  .swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-out .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,


    }
    }
});