import './pages/index.css';

const popupList = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.popup__form_type_add');
const buttonOpenEdit = document.querySelector('.edit-button');
const buttonSubmitFormAdd = formAdd.querySelector('.popup__button');
const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = document.querySelector('.popup__form_type_edit');
const buttonOpenAdd = document.querySelector('.add-button');
const buttonSubmitFormEdit = formEdit.querySelector('.popup__button');
const cardsContainer = document.querySelector('.image-board__list');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');
const imageNameInput = formAdd.querySelector('#image-name-input');
const imageLinkInput = formAdd.querySelector('#image-link-input');
const userNameInput = formEdit.querySelector('#name-input');
const userJobInput = formEdit.querySelector('#job-input');
const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

import { createCard } from './components/card.js';
import { openPopup, closePopup, closePopupOnClick } from './components/modal.js';
import { resetForm } from './components/utils.js';
import { hideAllInputErrorsInForm, enableValidation } from './components/validate.js';

function openPopupAdd() {
  buttonSubmitFormAdd.setAttribute('disabled', true);
  buttonSubmitFormAdd.classList.add('popup__button_disabled');
  hideAllInputErrorsInForm(formAdd);
  resetForm(formAdd);
  openPopup(popupAdd);
}

function openPopupEdit() {
  buttonSubmitFormEdit.removeAttribute('disabled');
  buttonSubmitFormEdit.classList.remove('popup__button_disabled');
  hideAllInputErrorsInForm(formEdit);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
  openPopup(popupEdit);
}

function submitFormAdd(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(imageNameInput.value, imageLinkInput.value));
  resetForm(formAdd);
  closePopup(popupAdd);
}

function submitFormEdit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(popupEdit);
}

initialCards.forEach((item) => {
  cardsContainer.prepend(createCard(item.name, item.link));
});

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupAdd);

formAdd.addEventListener('submit', submitFormAdd);

formEdit.addEventListener('submit', submitFormEdit);

popupList.forEach((popup) => {
  popup.addEventListener('click', closePopupOnClick);
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
