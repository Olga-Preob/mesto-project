import './pages/index.css';

const popupList = document.querySelectorAll('.popup');
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
const formChangeAvatar = document.querySelector('.popup__form_type_change-avatar');
const buttonOpenChangeAvatar = document.querySelector('.change-avatar-button');
const buttonSubmitFormChangeAvatar = formChangeAvatar.querySelector('.popup__button');
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.popup__form_type_add');
const buttonOpenEdit = document.querySelector('.edit-button');
const buttonSubmitFormAdd = formAdd.querySelector('.popup__button');
const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = document.querySelector('.popup__form_type_edit');
const buttonOpenAdd = document.querySelector('.add-button');
const buttonSubmitFormEdit = formEdit.querySelector('.popup__button');
const cardsContainer = document.querySelector('.image-board__list');
const userAvatar = document.querySelector('.profile__avatar');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');
const imageNameInput = formAdd.querySelector('#image-name-input');
const imageLinkInput = formAdd.querySelector('#image-link-input');
const userNameInput = formEdit.querySelector('#name-input');
const userJobInput = formEdit.querySelector('#job-input');
const avatarLinkInput = formChangeAvatar.querySelector('#avatar-link-input');
const userProfile = document.querySelector('.profile');
const imageBoardList = document.querySelector('.image-board__list');

import { getInfoAboutCurrentUser, getInitialCards, sendNewAvatarCurrentUser, sendNewInfoCurrentUser, sendNewCardInfo } from './components/api.js';
import { createCard } from './components/card.js';
import { openPopup, closePopup, closePopupOnClick } from './components/modal.js';
import { changeVisibility, resetForm } from './components/utils.js';
import { hideAllInputErrorsInForm, enableValidation } from './components/validate.js';

async function getUserProfileInfo(userNameElement, userJobElement, userAvatarElement) {
  userName.textContent = userNameElement;
  userJob.textContent = userJobElement;
  userAvatar.setAttribute('src', userAvatarElement);
}

async function renderUserProfile() {
  changeVisibility(true, userProfile);
  changeVisibility(true, imageBoardList);
  await getInfoAboutCurrentUser()
          .then((userInfo) => {
            getUserProfileInfo(userInfo.name, userInfo.about, userInfo.avatar)
          })
          .catch((err) => {
            console.log(err);
          });

  await getInitialCards()
          .then((arrCards) => {
            arrCards.forEach((card) => {
              cardsContainer.append(createCard(card.name, card.link, card.likes, card.owner._id, card._id));
            });
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            changeVisibility(false, userProfile);
            changeVisibility(false, imageBoardList);
          });
}

function openPopupChangeAvatar() {
  buttonSubmitFormChangeAvatar.textContent = 'Сохранить';
  buttonSubmitFormChangeAvatar.setAttribute('disabled', true);
  buttonSubmitFormChangeAvatar.classList.add('popup__button_disabled');
  hideAllInputErrorsInForm(formChangeAvatar);
  resetForm(formChangeAvatar);
  openPopup(popupChangeAvatar);
}

function openPopupAdd() {
  buttonSubmitFormAdd.textContent = 'Создать';
  buttonSubmitFormAdd.setAttribute('disabled', true);
  buttonSubmitFormAdd.classList.add('popup__button_disabled');
  hideAllInputErrorsInForm(formAdd);
  resetForm(formAdd);
  openPopup(popupAdd);
}

function openPopupEdit() {
  buttonSubmitFormEdit.textContent = 'Сохранить';
  buttonSubmitFormEdit.removeAttribute('disabled');
  buttonSubmitFormEdit.classList.remove('popup__button_disabled');
  hideAllInputErrorsInForm(formEdit);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
  openPopup(popupEdit);
}

function submitFormChangeAvatar(evt) {
  evt.preventDefault();
  buttonSubmitFormChangeAvatar.textContent = 'Сохранение...';
  sendNewAvatarCurrentUser(avatarLinkInput.value)
    .then((userInfo) => {
      getUserProfileInfo(userInfo.name, userInfo.about, userInfo.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitFormChangeAvatar.textContent = 'Сохранено';
      closePopup(popupChangeAvatar);
    });
  resetForm(formChangeAvatar);
}

function submitFormAdd(evt) {
  evt.preventDefault();
  buttonSubmitFormAdd.textContent = 'Создание...';
  sendNewCardInfo(imageNameInput.value, imageLinkInput.value)
    .then((cardNew) => {
      cardsContainer.prepend(createCard(cardNew.name, cardNew.link, cardNew.likes, cardNew.owner._id, cardNew._id));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitFormAdd.textContent = 'Создано';
      closePopup(popupAdd);
    });
  resetForm(formAdd);
}

function submitFormEdit(evt) {
  evt.preventDefault();
  buttonSubmitFormEdit.textContent = 'Сохранение...';
  sendNewInfoCurrentUser(userNameInput.value, userJobInput.value)
    .then((infoNew) => {
      getUserProfileInfo(infoNew.name, infoNew.about, infoNew.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitFormEdit.textContent = 'Сохранено';
      closePopup(popupEdit);
    });
}

renderUserProfile();

buttonOpenChangeAvatar.addEventListener('click', openPopupChangeAvatar);

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupAdd);

formChangeAvatar.addEventListener('submit', submitFormChangeAvatar);

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
