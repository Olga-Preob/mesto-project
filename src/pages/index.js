import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  popupTypeAdd,
  popupTypeEdit,
  popupTypeChangeAvatar,
  popupTypeOpenImg,
  popupTypeConfirm,
  buttonOpenAdd,
  buttonOpenChangeAvatar,
  buttonOpenEdit,
  formList,
  imageBoardList,
  settingsForCards,
  settingsForPopup,
  settingsForValidation,
  visibilityElements,
  userProfile,
  userAvatar,
  userName,
  userAbout
} from '../utils/constants.js';


let userId;

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '288abb86-8961-48f2-bb50-be9d390f9db5',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  requestGetUserInfo: () => {
    return api.getUserInfo()
      .then((res) => {
        const userData = {
          nameInput: res.name,
          aboutInput: res.about,
          avaLinkInput: res.avatar,
          _id: res._id
        };
        return userData;
      })
      .catch((err) => api.errorHandler(err));
    },
  requestSetUserAvatar: (link) => {
    return api.editUserAvatar(link)
      .then((res) => userInfo.changeUserAvatar(res.avatar))
      .catch((err) => api.errorHandler(err));
    },
  requestSetUserInfo: ({ nameInput, aboutInput }) => {
    return api.editUserInfo(nameInput, aboutInput)
      .then((res) => userInfo.changeUserInfo(res.about, res.name))
      .catch((err) => api.errorHandler(err));
    }
  },
  userAvatar,
  userName,
  userAbout
);

function createCard(item) {
  const card = new Card(cardHandlers, item, userId, settingsForCards);
  const cardElement = card.generate();
  return cardElement;
}

const cardList = new Section({
  renderer: (item) => {
    cardList.setItem(createCard(item));
    }
  },
  settingsForCards.cardContainerSelector
);

const popupChangeAvatar = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    return userInfo.setUserAvatar(inputValues)
      .then(() => popupChangeAvatar.close())
      .catch((err) => api.errorHandler(err));
    }
  },
  popupTypeChangeAvatar,
  settingsForPopup
);

const popupEdit = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    return userInfo.setUserInfo(inputValues)
      .then(() => popupEdit.close())
      .catch((err) => api.errorHandler(err));
    }
  },
  popupTypeEdit,
  settingsForPopup
);

const popupAdd = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    return api.addNewCard(inputValues.imgNameInput, inputValues.imgLinkInput)
      .then((cardInfo) => {
        cardList.renderItems([cardInfo]);
        popupAdd.close();
      })
      .catch((err) => api.errorHandler(err));
    }
  },
  popupTypeAdd,
  settingsForPopup
);

const popupWithConfirm = new PopupWithConfirm({
  handleConfirmClick: (cardId, cardMarkup) => {
    return api.deleteCard(cardId)
      .then(() => {
        cardMarkup.remove();
        popupWithConfirm.close();
      })
      .catch((err) => api.errorHandler(err));
    }
  },
  popupTypeConfirm,
  settingsForPopup
);

const popupWithImage = new PopupWithImage(popupTypeOpenImg, settingsForPopup);

const cardHandlers = {
  handleCardClick: (evt) => {
    const evtImage = evt.target;
    popupWithImage.open(evtImage.src, evtImage.alt.slice(0, -1));
  },

  handleLikeClick: (method, cardId, likeButton, likeCounter) => {
    api.sendLike(method, cardId)
      .then((cardArr) => {
        likeButton.classList.toggle(settingsForCards.likeActiveClass);
        likeCounter.textContent = cardArr.likes.length;
      })
      .catch((err) => api.errorHandler(err));
  },

  handleBinClick: (cardId, cardMarkup) => {
    popupWithConfirm.getData(cardId, cardMarkup);
    popupWithConfirm.open();
  },
}

function openPopupChangeAvatar() {
  popupChangeAvatar.open();
}

function openPopupAdd() {
  popupAdd.open();
}

function openPopupEdit() {
  userInfo.getUserInfo()
    .then((userData) => {
      popupEdit.setInputValues(userData);
      popupEdit.open();
    })
    .catch((err) => api.errorHandler(err));
}

const changeVisibility = (isLoading, element) => {
  if (isLoading) {
    element.classList.remove(visibilityElements.visibleElement);
  } else {
    element.classList.add(visibilityElements.visibleElement);
  }
}

function popupChangeDisplay () {
  const popupList = document.querySelectorAll(settingsForPopup.popupSelector);
  popupList.forEach((popup) => {
    popup.classList.add(visibilityElements.displayFlexClass);
  });
}

buttonOpenChangeAvatar.addEventListener('click', openPopupChangeAvatar);
buttonOpenEdit.addEventListener('click', openPopupEdit);
buttonOpenAdd.addEventListener('click', openPopupAdd);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(settingsForValidation, formElement);
  formValidator.enableValidation();
})

Promise.all([userInfo.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    sessionStorage.setItem('userId', userData._id)
    userId = sessionStorage.getItem('userId');

    userInfo.changeUserAvatar(userData.avaLinkInput);
    userInfo.changeUserInfo(userData.aboutInput, userData.nameInput);

    cardList.renderItems(cards.reverse());

    changeVisibility(false, userProfile);
    changeVisibility(false, imageBoardList);
  })
  .catch((err) => api.errorHandler(err));

popupChangeDisplay();
