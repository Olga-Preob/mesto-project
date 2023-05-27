export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    }).then((res) => {return this._getResponseData(res)})
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    }).then((res) => {return this._getResponseData(res)})
  }

  editUserAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarLink}`
      })
    }).then((res) => {return this._getResponseData(res)})
  }

  editUserInfo(userName, userAbout) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${userName}`,
        about: `${userAbout}`
      })
    }).then((res) => {return this._getResponseData(res)})
  }

  addNewCard(imageName, imageLink) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${imageName}`,
        link: `${imageLink}`
      })
    }).then((res) => {return this._getResponseData(res)})
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => {return this._getResponseData(res)})
  }

  sendLike(likeMethod, cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: `${likeMethod}`,
      headers: this._headers
    }).then((res) => {return this._getResponseData(res)})
  }

  errorHandler(err) {
    console.error(err);
  }
}
