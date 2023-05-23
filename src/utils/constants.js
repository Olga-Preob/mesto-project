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

const userInfoSelectors = {
  userNameSelector: '.profile__title',
  userAboutSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__avatar',
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

const settingsForCards = {
  likeActiveClass: 'card__like-button_active',
  binActiveClass: 'card__delete-button_active',
  cardTemplateSelector: '.card-template',
  cardElementSelector: '.image-board__item',
  cardContainerSelector: '.image-board__list',
  tempNameSelector: '.card__title',
  tempImgSelector: '.card__image',
  tempBinSelector: '.card__delete-button',
  tempLikeSelector: '.card__like-button',
  tempLikeCounterSelector:'.card__like-counter',
}

export {
  selectors,
  popupSelectors,
  userInfoSelectors,
  settingsForPopup,
  settingsForValidation,
  settingsForCards
}
