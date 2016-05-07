var btnBurger = document.querySelector('.menu__toggle');
var menu = document.querySelector('.menu__wrapper');
var btnUser = document.querySelector('.menu__login');
var mfPersonal = document.querySelector('.modal-personal');

if (btnBurger) btnBurger.addEventListener('click', toggleMenu);
if (btnUser) btnUser.addEventListener('click', showPersonal);

function toggleMenu() {

  if ( btnBurger.classList.contains('menu__toggle--closed') ) {
    btnBurger.classList.remove('menu__toggle--closed');
    btnBurger.classList.add('menu__toggle--opened');
    menu.classList.remove('menu__wrapper--closed');
    menu.classList.add('menu__wrapper--opened');
  }
  else if ( btnBurger.classList.contains('menu__toggle--opened') ) {
    btnBurger.classList.remove('menu__toggle--opened');
    btnBurger.classList.add('menu__toggle--closed');
    menu.classList.remove('menu__wrapper--opened');
    menu.classList.add('menu__wrapper--closed');
  }

}

function showPersonal(event) {
  event.preventDefault();

  btnBurger.classList.remove('menu__toggle--opened');
  btnBurger.classList.add('menu__toggle--closed');
  menu.classList.remove('menu__wrapper--opened');
  menu.classList.add('menu__wrapper--closed');

  mfPersonal.classList.add('modal-personal--show');
}
