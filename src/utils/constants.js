const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeChangeAvatar = document.querySelector('.popup_type_change-avatar');
const popupTypeOpenImg = document.querySelector('.popup_type_open-image');
const popupTypeConfirm = document.querySelector('.popup_type_confirm');
const buttonOpenAdd = document.querySelector('.add-button');
const buttonOpenChangeAvatar = document.querySelector('.change-avatar-button');
const buttonOpenEdit = document.querySelector('.edit-button');
const formList = document.querySelectorAll('.popup__form');
const imageBoardList = document.querySelector('.image-board__list');
const userProfile = document.querySelector('.profile');
const userAvatar = document.querySelector('.profile__avatar');
const userName = document.querySelector('.profile__title');
const userAbout = document.querySelector('.profile__subtitle');

const settingsForPopup = {
  popupClass: 'popup',
  openedClass: 'popup_opened',
  editClass: 'popup_type_edit',
  changeAvaClass: 'popup_type_change-avatar',
  popupSelector: '.popup',
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

const visibilityElements = {
  displayFlexClass: 'display-flex',
  visibleElement: 'visible-element'
}

export {
  popupTypeAdd,
  popupTypeEdit,
  popupTypeChangeAvatar,
  popupTypeOpenImg,
  popupTypeConfirm,
  buttonOpenAdd,
  buttonOpenChangeAvatar,
  buttonOpenEdit,
  formList,
  imageBoardList,
  settingsForCards,
  settingsForPopup,
  settingsForValidation,
  visibilityElements,
  userProfile,
  userAvatar,
  userName,
  userAbout
}
