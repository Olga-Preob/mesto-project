import { createCard } from './card.js';
import { resetForm } from './utils.js';

const addForm = document.querySelector('.popup__form_type_add');
const editForm = document.querySelector('.popup__form_type_edit');
const cardsContainer = document.querySelector('.image-board__list');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');
const imageNameInput = addForm.querySelector('#image-name-input');
const imageLinkInput = addForm.querySelector('#image-link-input');
const userNameInput = editForm.querySelector('#name-input');
const userJobInput = editForm.querySelector('#job-input');

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

function submitAddForm(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(imageNameInput.value, imageLinkInput.value));
  resetForm(addForm);
  closePopup(addForm.closest('.popup'));
}

function submitEditForm(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(editForm.closest('.popup'));
}

export { addForm, editForm, cardsContainer, userName, userJob, imageNameInput, imageLinkInput, userNameInput, userJobInput, openPopup, closePopup, submitAddForm, submitEditForm };
