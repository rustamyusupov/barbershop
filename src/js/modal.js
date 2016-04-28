var mfPersonal = document.querySelector('.modal-personal');
var mfSuccess = document.querySelector('.modal-form--success');
//var mfFailure = document.querySelector('.modal-form--failure');

var btnLogin = document.querySelector('.btn--log-in');
var btnClose = document.querySelector('.btn--close');
var btnSuccess = document.querySelector('.btn--modal-form-success');
//var btnFailure = document.querySelector('.btn--modal-form-failure');
var btnSendOrder = document.querySelector('.btn--submit');

if (btnLogin) btnLogin.addEventListener('click', closeModalForm);
if (btnClose) btnClose.addEventListener('click', closeModalForm);
if (btnSuccess) btnSuccess.addEventListener('click', closeModalForm);
//if (btnFailure) btnFailure.addEventListener('click', closeModalForm);

function closeModalForm(event) {
  event.preventDefault();

  switch (event.currentTarget.parentNode.parentNode.classList[0]) {
    case 'modal-personal':
      mfPersonal.classList.remove('modal-personal--show');
      break;

    case 'modal-form':
      mfSuccess.classList.remove('modal-form--show');
      btnSendOrder.classList.toggle('btn--in-progress');
      break;
  }

}
