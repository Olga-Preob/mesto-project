const selectors = {
  elements: '.elements',
  elementTemplate: '#element'
}

const popupSelectors = {
  popup: '.popup',
  typeEdit: '.popup_type_edit',
  typeAdd: '.popup_type_add',
  typeChangeAvatar: '.popup_type_change-avatar',
  typeOpenImage: '.popup_type_open-image',
  typeConfirm: '.popup_type_confirm',
}

const settingsForPopup = {
  popupClass: 'popup',
  openedClass: 'popup_opened',
  editClass: 'popup_type_edit',
  changeAvaClass: 'popup_type_change-avatar',
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  closeButtonSelector: '.popup__button-close',
  imgLinkSelector: '.popup__card-image',
  imgNameSelector: '.popup__card-title',
}

const settingsForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export {
  selectors,
  popupSelectors,
  settingsForPopup,
  settingsForValidation
}
