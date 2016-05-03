var btnShowAll = document.querySelector('.btn--news');
var news = document.querySelectorAll('.news__item');
var viewportWidth = Math.max(document.documentElement.clientWidth,  window.innerWidth || 0)

if (btnShowAll) btnShowAll.addEventListener('click', showAllNews);

function showAllNews(event) {
  event.preventDefault();

  for (var i = 0; i < news.length; i++) {
    news[i].style.display = 'flex';

    if ( i === 1 ) {
      news[i].style.marginBottom = 'auto';
    }

    news[i].style.border = 'none';

  }

}
