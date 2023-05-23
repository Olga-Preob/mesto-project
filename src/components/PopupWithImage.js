import Popup from './Popup.js';
import { settingsForPopup } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imageLink = this._popup.querySelector(settingsForPopup.imgLinkSelector);
    this._imageName = this._popup.querySelector(settingsForPopup.imgNameSelector);
  }

  open(link, name) {
    super.open();
    this._imageLink.src = link;
    this._imageLink.alt = name + '.';
    this._imageName.textContent = name;
  }
}
