const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_open-image');
const imageName = imagePopup.querySelector('.popup__card-title');
const imageLink = imagePopup.querySelector('.popup__card-image');

import { userId } from '../index.js';
import { openPopup } from './modal.js';
import { requestDeleteCard, requestLikeCard } from './api.js';

function deleteCard(cardId, markup) {
  requestDeleteCard(cardId)
    .then((res) => {
      markup.remove();
    })
    .catch((err) => {
      console.log(err);
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

  if (userId === owner) {
    cardElement.querySelector('.card__delete-button').classList.add('card__delete-button_active');
    cardElement.querySelector('.card__delete-button_active').addEventListener('click', (evt) => {
      const cardMarkup = evt.target.closest('.image-board__item');
      deleteCard(cardId, cardMarkup)
    })
  }

  if (likes.some((people) => {
    return userId === people._id;
  })) {
    cardElement.querySelector('.card__like-button').classList.add('card__like-button_active');
  }

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
