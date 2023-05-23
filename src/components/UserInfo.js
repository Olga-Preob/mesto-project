export default class UserInfo {
  constructor(avatar, name, status, {handleSetInfo, handleUploadAvatar}) {
    this._avatar = avatar;
    this._name = name;
    this._status = status;
    this._handleSetInfo = handleSetInfo;
    this._handleUploadAvatar = handleUploadAvatar;
  }


  getUserInfo(res) {
    this._avatar.src = res.avatar;
    this._name.textContent = res.name;
    this._status.textContent = res.about;
    sessionStorage.setItem('userId', res._id);
  }

  setUserInfo(res) {
    this._handleSetInfo(res);
  }

  updateAvatar(res) {
    this._avatar.src = res.avatar;
    this._handleUploadAvatar();
  }
}
