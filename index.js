const openButtons = document.querySelectorAll('.call-popup');
const closeButtons = document.querySelectorAll('.popup__button-close');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.image-board__list');
const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');
const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const imagePopup = document.querySelector('#image-popup');
const imageName = imagePopup.querySelector('.popup__card-title');
const imageLink = imagePopup.querySelector('.popup__card-image');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-job');
const imageNameInput = document.querySelector('#image-name');
const imageLinkInput = document.querySelector('#image-link');
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


function openPopup(item) {
  item.classList.add('popup_opened');
}

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('edit-button')) {
      openPopup(editPopup);
      userNameInput.value = userName.textContent;
      userJobInput.value = userJob.textContent;
    } else if (button.classList.contains('add-button')) {
      openPopup(addPopup);
    }
  });
});


function closePopup(item) {
  item.classList.remove('popup_opened');
}

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    closePopup(button.closest('.popup'));
    if ((imageNameInput.value !== '') || (imageLinkInput.value !== '')) {
      resetForm(addForm);
    }
  });
});


function resetForm(form) {
  form.reset();
}


function createCard(inputName, inputLink) {
  const cardElement = cardTemplate.querySelector('.image-board__item').cloneNode(true);
  cardElement.querySelector('.card__image').setAttribute('src', inputLink);
  cardElement.querySelector('.card__image').setAttribute('alt', inputName + '.');
  cardElement.querySelector('.card__title').textContent = inputName;
  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    imageName.textContent = cardElement.querySelector('.card__title').textContent;
    imageLink.setAttribute('alt', imageName.textContent + '.');
    imageLink.setAttribute('src', evt.target.getAttribute('src'));

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


initialCards.forEach((item) => {
  cardsContainer.prepend(createCard(item.name, item.link));
});


function submitAddForm(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(imageNameInput.value, imageLinkInput.value));
  resetForm(addForm);
  closePopup(addForm.closest('.popup'));
}

addForm.addEventListener('submit', submitAddForm);


function submitEditForm(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(editForm.closest('.popup'));
}

editForm.addEventListener('submit', submitEditForm);
