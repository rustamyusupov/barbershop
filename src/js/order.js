var btnSendOrder = document.querySelector('.btn--submit');
var mfSuccess = document.querySelector('.modal-form--success');

if (btnSendOrder) btnSendOrder.addEventListener('click', sendOrder);

function sendOrder(event) {
  event.preventDefault();

  btnSendOrder.classList.toggle('btn--in-progress');
  mfSuccess.classList.toggle('modal-form--show');
}
