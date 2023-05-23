export default class UserInfo {
  constructor(avatar, name, status, {requestGetUser, requestSetInfo, requestUploadAvatar}) {
    this._avatar = avatar;
    this._name = name;
    this._status = status;

    this._requestGetUser = requestGetUser;
    this._requestSetInfo = requestSetInfo;
    this._requestUploadAvatar = requestUploadAvatar;
  }

  getUserRequest() {
    return this._requestGetUser();
  }

  setUserRequest({ name, status }) {
    return this._requestSetInfo({ name, status });
  }

  setAvatarRequest({link}) {
    return this._requestUploadAvatar({link});
  }


  getUserInfo(res) {
    this._avatar.src = res.avatar;
    this._name.textContent = res.name;
    this._status.textContent = res.about;
    sessionStorage.setItem('userId', res._id);
  }

  setUserInfo(res) {
    return this._requestSetInfo(res);
  }

  updateAvatar(res) {
    this._avatar.src = res.avatar;
  }
}
