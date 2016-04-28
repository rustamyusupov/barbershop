var btnShowAll = document.querySelector('.btn--news');
var news = document.querySelectorAll('.news__item');
var viewportWidth = Math.max(document.documentElement.clientWidth,  window.innerWidth || 0)

if (btnShowAll) btnShowAll.addEventListener('click', showAllNews);

function showAllNews(event) {
  event.preventDefault();

  for (var i = 0; i < news.length; i++) {
    news[i].style.display = 'flex';

    if (viewportWidth < 768) {
      news[i].style.borderBottom = '1px solid #e5ddd5';
    }

    if ( i === 1 ) {
      news[i].style.marginBottom = 'auto';
    }

    if ( i === news.length - 1 ) {
      news[i].style.border = 'none';
      news[i].style.marginBottom = "5px";
    }

  }

}
