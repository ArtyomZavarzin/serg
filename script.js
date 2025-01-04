window.addEventListener('load', function () {
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 80,

    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
  });

  this.document.getElementById('prev-btn').addEventListener('click', () => {
    swiper.slidePrev();
  });
  this.document.getElementById('next-btn').addEventListener('click', () => {
    swiper.slideNext();
  });

  const video = this.document.getElementById('video-block');

  // video.addEventListener('ended', () => {
  //   video.classList.add('hide');
  // });

  let isMuted = true;
  const soundBtn = this.document.getElementById('sound');
  soundBtn.addEventListener('click', () => {
    video.muted = !isMuted;
    if (isMuted) {
      soundBtn.style.backgroundImage = 'url(assets/svg/soundOn.svg)';
    } else {
      soundBtn.style.backgroundImage = 'url(assets/svg/soundOff.svg)';
    }
    isMuted = !isMuted;
  });
});
