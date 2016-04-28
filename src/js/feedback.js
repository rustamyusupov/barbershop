var btnWriteReview = document.querySelector('.btn--feedback');
// var btnPrev = document.querySelector('.feedback__toggle--prev');
// var btnNext = document.querySelector('.feedback__toggle--next');
//var feedbackItems = document.querySelectorAll('.feedback__item');
//var sldSelectors = document.querySelectorAll('.slider__selector');

if (btnWriteReview) btnWriteReview.addEventListener('click', writeReview);
// if (btnPrev) btnPrev.addEventListener('click', toggleSlider);
// if (btnNext) btnNext.addEventListener('click', toggleSlider);

function writeReview(event) {
  event.preventDefault();
}
