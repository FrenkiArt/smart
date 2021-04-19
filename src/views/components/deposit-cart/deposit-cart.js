if (document.querySelector('.deposit-cart__cancel')) {
  document.querySelectorAll('.deposit-cart__cancel').forEach((item) => {
    item.addEventListener('click', depoCancelHandler);
  });

  document.querySelectorAll('.popup-sure__btn').forEach((item) => {
    item.addEventListener('click', hidePopupSureHandler);
  });
}

function depoCancelHandler(e) {
  e.preventDefault();

  hidePopupSureHandler();

  const parentCart = e.target.closest('.deposit-cart');
  parentCart.querySelector('.popup-sure').classList.add('active');
}

function hidePopupSureHandler() {
  document.querySelectorAll('.popup-sure').forEach((item) => {
    item.classList.remove('active');
  });
}
