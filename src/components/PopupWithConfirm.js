import Popup from './Popup.js';
import { settingsForPopup } from '../utils/constants.js';

export default class PopupWithConfirm extends Popup {
  constructor({ handleConfirmClick }, cardId, cardMarkup, popup) {
    super(popup);
    this._cardId = cardId;
    this._cardMarkup = cardMarkup;
    this._buttonConfirm = this._popup.querySelector(settingsForPopup.submitButtonSelector);
    this._handleConfirmClick = handleConfirmClick;
  }

  _showLoadingText() {
    this._buttonConfirm.textContent = 'Удаление...';
  }

  hideLoadingText() {
    this._buttonConfirm.textContent = 'Да';
  }

  _callHandler = () => {
    this._showLoadingText();
    this._handleConfirmClick(this._cardId, this._cardMarkup);
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener('click', this._callHandler);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._buttonConfirm.removeEventListener('click', this._callHandler);
  }
}
