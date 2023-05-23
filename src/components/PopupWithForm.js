import Popup from './Popup.js';
import { settingsForPopup } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit, popup }) {
    super(popup);
    this._form = this._popup.querySelector(settingsForPopup.formSelector);
    this._inputList = this._form.querySelectorAll(settingsForPopup.inputSelector);
    this._button = this._form.querySelector(settingsForPopup.submitButtonSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _showLoadingText() {
    if (this._popup.classList.contains(settingsForPopup.changeAvaClass) || this._popup.classList.contains(settingsForPopup.editClass)) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Создание...';
    }
  }

  hideLoadingText() {
    if (this._popup.classList.contains(settingsForPopup.changeAvaClass) || this._popup.classList.contains(settingsForPopup.editClass)) {
      this._button.textContent = 'Сохранить';
    } else {
      this._button.textContent = 'Создать';
    }
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.id] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  };

  _sendForm = (evt) => {
    evt.preventDefault();

    this._showLoadingText();
    this._handleFormSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._sendForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._sendForm);
  }
}
