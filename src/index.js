import './pages/index.css';
import Api from "./components/Api";
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
  popupTypeConfirm,
  buttonOpenAdd,
  buttonOpenChangeAvatar,
  buttonOpenEdit,
  buttonEdit,
  formList,
  imageBoardList,
  inputEditName,
  inputEditAbout,
  popupSelectors,
  settingsForCards,
  settingsForValidation,
  visibilityElements,
  userProfile,
  userAvatar,
  userName,
  userAbout
} from './utils/constants.js';


let userId;

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '288abb86-8961-48f2-bb50-be9d390f9db5',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(userAvatar, userName, userAbout, {
  requestGetUser: () => {
    return api.getUserInfo();
  },
  requestSetInfo: ({ nameInput, aboutInput }) => {
    return api.updateUserInfo(nameInput, aboutInput)
      .then((res) => userInfo.changeUserInfo(res.about, res.name))
      .catch((err) => api.errorHandler(err));
  },
  requestUploadAvatar: (link) => {
    return api.uploadAvatarImage(link)
      .then((res) => userInfo.changeUserAvatar(res.avatar))
      .catch((err) => api.errorHandler(err));
  }
});

const cardHandlers = {
  handleCardClick: (evt) => {
    const popupWithImage = new PopupWithImage(popupTypeOpenImg);
    const evtImage = evt.target;
    popupWithImage.open(evtImage.src, evtImage.alt.slice(0, -1));
  },

  handleLikeClick: (method, cardId, likeButton, likeCounter) => {
    api.likes(method, cardId)
      .then((cardArr) => {
        likeButton.classList.toggle(settingsForCards.likeActiveClass);
        likeCounter.textContent = cardArr.likes.length;
      })
      .catch((err) => api.errorHandler(err));
  },

  handleBinClick: (cardId, cardMarkup) => {
    const popupWithConfirm = new PopupWithConfirm({
      handleConfirmClick: (cardId, cardMarkup) => {
        api.deleteCard(cardId)
          .then(() => {
            cardMarkup.remove();
            popupWithConfirm.close();
          })
          .catch((err) => api.errorHandler(err))
          .finally(() => popupWithConfirm.hideLoadingText());
        }
      },
      cardId,
      cardMarkup,
      popupTypeConfirm
    );
    popupWithConfirm.open();
  },
}

function renderCard(items) {
  const cardList = new Section({
      data: items,
      renderer: (item) => {
        const card = new Card(cardHandlers, item, userId, settingsForCards.cardTemplateSelector);
        const cardElement = card.generate();

        cardList.setItem(cardElement);
      }
    },
    settingsForCards.cardContainerSelector
  );

  cardList.renderItems();
}

const popupChangeAvatar = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    userInfo.setUserAvatar(inputValues)
      .then(() => popupChangeAvatar.close())
      .catch((err) => api.errorHandler(err))
      .finally(() => popupChangeAvatar.hideLoadingText());
  },
  popup: popupTypeChangeAvatar
});

const popupAdd = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    api.addCard(inputValues.imgNameInput, inputValues.imgLinkInput)
      .then((cardInfo) => {
        renderCard([cardInfo]);
        popupAdd.close();
      })
      .catch((err) => api.errorHandler(err))
      .finally(() => popupAdd.hideLoadingText());
  },
  popup: popupTypeAdd
});

const popupEdit = new PopupWithForm({
  handleFormSubmit: (inputValues) => {
    userInfo.setUserInfo(inputValues)
      .then(() => popupEdit.close())
      .catch((err) => api.errorHandler(err))
      .finally(() => popupEdit.hideLoadingText());
  },
  popup: popupTypeEdit
});

function openPopupChangeAvatar() {
  popupChangeAvatar.open();
}

function openPopupAdd() {
  popupAdd.open();
}

function openPopupEdit() {
  userInfo.getUserInfo()
    .then(({ about, name }) => {
      inputEditAbout.value = about
      inputEditName.value = name;
      buttonEdit.removeAttribute('disabled');
      buttonEdit.classList.remove(settingsForValidation.inactiveButtonClass);

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
  const popupList = document.querySelectorAll(popupSelectors.popup);
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
  .then(([info, cards]) => {
    sessionStorage.setItem('userId', info._id)
    userId = sessionStorage.getItem('userId');

    userInfo.changeUserAvatar(info.avatar);
    userInfo.changeUserInfo(info.about, info.name);

    renderCard(cards);

    changeVisibility(false, userProfile);
    changeVisibility(false, imageBoardList);
  })
  .catch((err) => api.errorHandler(err));

popupChangeDisplay();

export { userId }
