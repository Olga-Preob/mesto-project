import { settingsForPopup } from '../utils/constants.js';

export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add(settingsForPopup.openedClass);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(settingsForPopup.openedClass);
    this._removeEventListeners();
  }

  setEventListeners() {
    const popupButtonClose = this._popup.querySelector(settingsForPopup.closeButtonSelector);
    popupButtonClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(settingsForPopup.popupClass)) {
        this.close();
      }
    });
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
