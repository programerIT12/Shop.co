export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-btn--prev",
      nextEl: ".reviews__slider-btn--next",
    },
  });
};
