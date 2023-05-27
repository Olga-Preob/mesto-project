import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor({ handleConfirmClick }, popup, settings) {
    super(popup, settings);
    this._buttonConfirm = this._popup.querySelector(this._settings.submitButtonSelector);
    this._handleConfirmClick = handleConfirmClick;
    this.setEventListeners();
  }

  getData(cardId, cardMarkup) {
    this._cardId = cardId;
    this._cardMarkup = cardMarkup;
  }

  _showLoadingText() {
    this._buttonConfirm.textContent = 'Удаление...';
  }

  _callHandler = () => {
    const initialText = this._buttonConfirm.textContent;

    this._buttonConfirm.textContent = 'Удаление...';

    this._handleConfirmClick(this._cardId, this._cardMarkup)
      .then(() => this.close())
      .finally(() => {
        this._buttonConfirm.textContent = initialText;
      });
  }

  setEventListeners = () => {
    this._buttonConfirm.addEventListener('click', this._callHandler);
  }
}
