export default class FormValidator {
  constructor(settingsForValidation, formElement) {
    this._formSelector = settingsForValidation.formSelector;
    this._inputSelector = settingsForValidation.inputSelector;
    this._submitButtonSelector = settingsForValidation.submitButtonSelector;
    this._inactiveButtonClass = settingsForValidation.inactiveButtonClass;
    this._inputErrorClass = settingsForValidation.inputErrorClass;
    this._errorClass = settingsForValidation.errorClass;
    this._formEditClass = settingsForValidation.formEditClass;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableButton() {
    this._buttonElement.setAttribute('disabled', true);
  }

  _enableButton() {
    this._buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _enableFormEditButton() {
    if (this._formElement.classList.contains(this._formEditClass)) {
      this._enableButton();
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState();
    this._enableFormEditButton();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._formElement.addEventListener('reset', () => {
      this._disableButton();
      this._enableFormEditButton();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    });
  }
}
