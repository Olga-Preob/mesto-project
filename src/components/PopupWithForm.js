import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popup, settings) {
    super(popup, settings);
    this._form = this._popup.querySelector(this._settings.formSelector);
    this._inputList = this._form.querySelectorAll(this._settings.inputSelector);
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.id] = input.value;
    });

    return this._formValues;
  }

  _showLoadingText() {
    if (this._popup.classList.contains(this._settings.changeAvaClass) || this._popup.classList.contains(this._settings.editClass)) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = 'Создание...';
    }
  }

  _sendForm = (evt) => {
    evt.preventDefault();

    const initialText = this._submitButton.textContent;

    this._showLoadingText();
    this._handleFormSubmit(this._getInputValues())
      .then(() => this.close())
      .finally(() => {
        this._submitButton.textContent = initialText;
      });
  }

  close() {
    super.close();
    this._form.reset();
  };

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.id];
    });
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._sendForm);
  }
}
