import { openPopup } from './modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_open-image');
const imageName = imagePopup.querySelector('.popup__card-title');
const imageLink = imagePopup.querySelector('.popup__card-image');

function createCard(inputName, inputLink) {
  const cardElement = cardTemplate.querySelector('.image-board__item').cloneNode(true);
  cardElement.querySelector('.card__image').setAttribute('src', inputLink);
  cardElement.querySelector('.card__image').setAttribute('alt', inputName + '.');
  cardElement.querySelector('.card__title').textContent = inputName;
  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    imageName.textContent = inputName;
    imageLink.setAttribute('alt', inputName + '.');
    imageLink.setAttribute('src', inputLink);

    openPopup(imagePopup);
  });
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.image-board__item').remove();
  });

  return cardElement;
}

export { createCard };
