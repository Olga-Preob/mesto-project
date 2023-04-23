import './pages/index.css';

const allPopups = document.querySelectorAll('.popup');
const openButtons = document.querySelectorAll('.call-popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const editFormSubmitButton = editForm.querySelector('.popup__button');
const addFormSubmitButton = addForm.querySelector('.popup__button');
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

import { addForm, editForm, cardsContainer, userName, userJob, imageNameInput, imageLinkInput, userNameInput, userJobInput, openPopup, closePopup, submitAddForm, submitEditForm } from './components/modal.js';
import { cardTemplate, imagePopup, imageName, imageLink, createCard } from './components/card.js';
import { resetForm, resetInputError } from './components/utils.js';
import { showInputError, hideInputError, hasInvalidInput, checkInputValidity, toggleButtonState, setEventListeners, enableValidation } from './components/validate.js';

initialCards.forEach((item) => {
  cardsContainer.prepend(createCard(item.name, item.link));
});

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('edit-button')) {
      editFormSubmitButton.removeAttribute('disabled');
      editFormSubmitButton.classList.remove('popup__button_disabled');
      resetInputError(editForm);
      userNameInput.value = userName.textContent;
      userJobInput.value = userJob.textContent;
      openPopup(editPopup);
    } else if (button.classList.contains('add-button')) {
      addFormSubmitButton.setAttribute('disabled', true);
      addFormSubmitButton.classList.add('popup__button_disabled');
      resetInputError(addForm);
      resetForm(addForm);
      openPopup(addPopup);
    }
  });
});

addForm.addEventListener('submit', submitAddForm);
editForm.addEventListener('submit', submitEditForm);

allPopups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if ((evt.target.classList.contains('popup__button-close')) || (evt.target.classList.contains('popup'))) {
      closePopup(popup);
    }
  });

  document.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Escape') && (popup.classList.contains('popup_opened'))) {
      closePopup(popup);
    }
  });
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
