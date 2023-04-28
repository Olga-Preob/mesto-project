const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_open-image');
const imageName = imagePopup.querySelector('.popup__card-title');
const imageLink = imagePopup.querySelector('.popup__card-image');
const popupConfirm = document.querySelector('.popup_type_confirm');
const formConfirm = document.querySelector('.popup__form_type_confirm');
const buttonSubmitFormConfirm = formConfirm.querySelector('.popup__button');

import { closePopup, openPopup } from './modal.js';
import { getInfoAboutCurrentUser, requestDeleteCard, requestLikeCard } from './api.js';

function deleteCard(cardId, markup) {
  buttonSubmitFormConfirm.textContent = 'Да';
  openPopup(popupConfirm);

  formConfirm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    buttonSubmitFormConfirm.textContent = 'Удаление...';

    requestDeleteCard(cardId)
      .then((res) => {
        markup.remove();
        buttonSubmitFormConfirm.textContent = 'Удалено';
        closePopup(popupConfirm);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function changeLikeState(likeMethod, cardId, button, likeCounter) {
  requestLikeCard(likeMethod, cardId)
    .then((cardInfo) => {
      button.classList.toggle('card__like-button_active');
      likeCounter.textContent = cardInfo.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(inputName, inputLink, likes, owner, cardId) {
  const cardElement = cardTemplate.querySelector('.image-board__item').cloneNode(true);
  const cardElementCounter = cardElement.querySelector('.card__like-counter');
  cardElement.querySelector('.card__image').setAttribute('src', inputLink);
  cardElement.querySelector('.card__image').setAttribute('alt', inputName + '.');
  cardElement.querySelector('.card__title').textContent = inputName;
  cardElementCounter.textContent = likes.length;

  getInfoAboutCurrentUser()
    .then((userInfo) => {
      if (likes.some((people) => {
        return userInfo._id === people._id;
      })) {
        cardElement.querySelector('.card__like-button').classList.add('card__like-button_active');
      }

      if (userInfo._id === owner) {
        cardElement.querySelector('.card__delete-button').classList.add('card__delete-button_active');
        cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
          const cardMarkup = evt.target.closest('.image-board__item');
          deleteCard(cardId, cardMarkup);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    const buttonLike = evt.target;
    if (!buttonLike.classList.contains('card__like-button_active')) {
      changeLikeState('PUT', cardId, buttonLike, cardElementCounter);
    } else {
      changeLikeState('DELETE', cardId, buttonLike, cardElementCounter);
    }

  });

  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    imageName.textContent = inputName;
    imageLink.setAttribute('alt', inputName + '.');
    imageLink.setAttribute('src', inputLink);
    openPopup(imagePopup);
  });

  return cardElement;
}

export { createCard };
