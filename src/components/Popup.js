export default class Popup {
  constructor(popup, settings) {
    this._popup = popup;
    this._settings = settings;
    this.setEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add(this._settings.openedClass);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._settings.openedClass);
    this._removeEventListeners();
  }

  setEventListeners = () => {
    const popupButtonClose = this._popup.querySelector(this._settings.closeButtonSelector);
    popupButtonClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._settings.popupClass)) {
        this.close();
      }
    });
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
