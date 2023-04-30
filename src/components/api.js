function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
  return res.json();
}

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '288abb86-8961-48f2-bb50-be9d390f9db5',
    'Content-Type': 'application/json'
  }
}

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then((res) => {
    return getResponseData(res);
  })
}

const getUserId = () => {
  return getUserInfo().then((userInfo) => {
    return userInfo._id;
  });
}

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res);
    })
}

const sendNewAvatarCurrentUser = (avatarNew) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${avatarNew}`
    })
  })
    .then((res) => {
      return getResponseData(res);
    })
}

const sendNewInfoCurrentUser = (userName, userAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${userName}`,
      about: `${userAbout}`
    })
  })
    .then((res) => {
      return getResponseData(res);
    })
}

const sendNewCardInfo = (imageName, imageLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${imageName}`,
      link: `${imageLink}`
    })
  })
    .then((res) => {
      return getResponseData(res);
    })
}

const requestDeleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res);
    })
}

const requestLikeCard = (likeMethod, cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: `${likeMethod}`,
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res);
    })
}

export { getUserInfo, getUserId, getInitialCards, sendNewAvatarCurrentUser, sendNewInfoCurrentUser, sendNewCardInfo, requestDeleteCard, requestLikeCard }
