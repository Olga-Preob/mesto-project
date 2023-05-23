import './pages/index.css';


import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithConfirm from './components/PopupWithConfirm.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import {
  popupTypeAdd,
  popupTypeEdit,
  popupTypeChangeAvatar,
  popupTypeOpenImg,
  popupTypeCOnfirm,
  buttonOpenAdd,
  buttonOpenChangeAvatar,
  buttonOpenEdit,
  buttonEdit,
  formList,
  imageBoardList,
  inputEditName,
  inputEditAbout,
  methods,
  popupSelectors,
  settingsForCards,
  settingsForValidation,
  userInfoSelectors,
  userProfile,
  visibilityElements
} from './utils/constants.js';
import Api from "./components/Api";

let userId;

const api = Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '288abb86-8961-48f2-bb50-be9d390f9db5',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(userInfoSelectors.userAvatarSelector, userInfoSelectors.userNameSelector, userInfoSelectors.userAboutSelector, {
  requestSetInfo: ({name, status}) => {
    api.updateUserInfo(name, status)
      .then((res) => userInfo.setUserInfo(res))
      .catch((err) => api.errorHandler(err));
  }, requestUploadAvatar: (link) => {
    api.uploadAvatarImage(link)
      .then((res) => userInfo.setAvatarRequest({res}))
      .catch((err) => api.errorHandler(err));
  },
  requestGetUser: () => {
    api.getUserInfo();
  }
});

function renderCard(items, method) {
  const cardList = new Section({
      items: items,
      renderer: (item) => {
        const card = new Card(cardHandlers, item, userId, settingsForCards.cardTemplateSelector);
        const cardElement = card.generate();

        cardList.setItem(cardElement, method);
      }
    },
    settingsForCards.cardContainerSelector
  );

  cardList.renderItems();
}

const changeVisibility = (isLoading, element) => {
  if (isLoading) {
    element.classList.remove(visibilityElements.visibleElement);
  } else {
    element.classList.add(visibilityElements.visibleElement);
  }
}

function popupChangeDisplay () {
  const popupList = document.querySelectorAll(popupSelectors.popup);
  popupList.forEach((popup) => {
    popup.classList.add(visibilityElements.displayFlexClass);
  });
}
