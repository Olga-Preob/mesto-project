export default class UserInfo {
  constructor({ requestGetUserInfo, requestSetUserAvatar, requestSetUserInfo }, avatar, name, about) {
    this._userAvatar = avatar;
    this._userName = name;
    this._userAbout = about;
    this._requestGetUserInfo = requestGetUserInfo;
    this._requestSetUserAvatar = requestSetUserAvatar;
    this._requestSetUserInfo = requestSetUserInfo;
  }

  changeUserAvatar(link) {
    this._userAvatar.src = link;
  }

  changeUserInfo(about, name) {
    this._userAbout.textContent = about;
    this._userName.textContent = name;
  }

  getUserInfo() {
    return this._requestGetUserInfo();
  }

  setUserAvatar({ avaLinkInput }) {
    return this._requestSetUserAvatar(avaLinkInput);
  }

  setUserInfo({ nameInput, aboutInput }) {
    return this._requestSetUserInfo({ nameInput, aboutInput });
  }
}
