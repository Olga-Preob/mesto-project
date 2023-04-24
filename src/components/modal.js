function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnClick(evt) {
  if ((evt.target.classList.contains('popup__button-close')) || (evt.target.classList.contains('popup'))) {
    closePopup(evt.target.closest('.popup'));
  }
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

export { openPopup, closePopup, closePopupOnClick };
