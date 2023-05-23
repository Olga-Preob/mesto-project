export default class UserInfo {
  constructor(avatar, name, status, {requestGetUser, requestSetInfo, requestUploadAvatar}) {
    this._avatar = avatar;
    this._name = name;
    this._status = status;

    this._requestGetUser = requestGetUser;
    this._requestSetInfo = requestSetInfo;
    this._requestUploadAvatar = requestUploadAvatar;
  }

  changeUserAvatar(link) {
    this._avatar.src = link;
  }

  changeUserInfo(about, name) {
    this._status.textContent = about;
    this._name.textContent = name;
  }

  getUserInfo() {
    return this._requestGetUser();
  }

  setUserAvatar({ avaLinkInput }) {
    return this._requestUploadAvatar(avaLinkInput);
  }

  setUserInfo({ nameInput, aboutInput }) {
    return this._requestSetInfo({ nameInput, aboutInput });
  }
}
