import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popup, settings) {
    super(popup, settings);
    this._imageLink = this._popup.querySelector(this._settings.imgLinkSelector);
    this._imageName = this._popup.querySelector(this._settings.imgNameSelector);
  }

  open(link, name) {
    super.open();
    this._imageLink.src = link;
    this._imageLink.alt = name + '.';
    this._imageName.textContent = name;
  }
}
