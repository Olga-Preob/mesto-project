const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');
const popupEditForm = document.querySelector('.popup_form_profile-edit');
const closeButtonEditForm = popupEditForm.querySelector('.popup__button-close');
const popupAddForm = document.querySelector('.popup_form_new-card');
const closeButtonAddForm = popupAddForm.querySelector('.popup__button-close');

const editForm = document.querySelector('.popup_form_profile-edit');
const nameInput = editForm.querySelector('.popup__item_user_name');
const jobInput = editForm.querySelector('.popup__item_user_job');

const cardsContainer = document.querySelector('.image-board__list');
const addForm = document.querySelector('.popup_form_new-card');
const inputImageName = addForm.querySelector('.popup__item_image_name');
const inputImageLink = addForm.querySelector('.popup__item_image_link');

const popupImageForm = document.querySelector('.popup_form_image');
const popupImage = document.querySelector('.popup__card-image');
const popupImageName = document.querySelector('.popup__card-title');
const closeButtonImageForm = popupImageForm.querySelector('.popup__button-close');

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


function popupOpenImageForm() {
  popupImageForm.classList.add('popup_opened');
}

function popupCloseImageForm() {
  popupImageForm.classList.remove('popup_opened');
  setTimeout(function () {
    popupImageName.textContent = '';
    popupImage.removeAttribute('alt');
    popupImage.removeAttribute('src');
  }, 650);
}

closeButtonImageForm.addEventListener('click', popupCloseImageForm);


function createCard(inputLink, inputName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.image-board__item').cloneNode(true);

  cardElement.querySelector('.card__image').setAttribute('src', inputLink);
  cardElement.querySelector('.card__image').setAttribute('alt', inputName + '.');
  cardElement.querySelector('.card__title').textContent = inputName;

  cardElement.querySelector('.card__image').addEventListener('click', function (evt) {
    popupImageName.textContent = cardElement.querySelector('.card__title').textContent;
    popupImage.setAttribute('alt', popupImageName.textContent + '.');
    popupImage.setAttribute('src', evt.target.getAttribute('src'));

    popupOpenImageForm();
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.image-board__item').remove();
  });

  cardsContainer.prepend(cardElement);
}


initialCards.forEach(function (item) {
  createCard(item.link, item.name);
});


function popupOpenEditForm() {
  popupEditForm.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpenEditForm);


function popupCloseEditForm() {
  nameInput.value = '';
  jobInput.value = '';
  popupEditForm.classList.remove('popup_opened');
}

closeButtonEditForm.addEventListener('click', popupCloseEditForm);


function popupOpenAddForm() {
  popupAddForm.classList.add('popup_opened');
}

addButton.addEventListener('click', popupOpenAddForm);


function popupCloseAddForm() {
  inputImageLink.value = '';
  inputImageName.value = '';
  popupAddForm.classList.remove('popup_opened');
}

closeButtonAddForm.addEventListener('click', popupCloseAddForm);


function formEditSubmit(evt) {
    evt.preventDefault();

    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    nameInput.placeholder = nameInput.value;
    jobInput.placeholder = jobInput.value;
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    popupCloseEditForm();
}

editForm.addEventListener('submit', formEditSubmit);


function formAddSubmit(evt) {
  evt.preventDefault();

  createCard(inputImageLink.value, inputImageName.value);

  popupCloseAddForm();
}

addForm.addEventListener('submit', formAddSubmit);
