import { settingsForCards } from '../utils/constants.js';

export default class Card {
  constructor(cardHandlers, data, userId, selector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._userId = userId;
    this._selector = selector;
    this._handleCardClick = cardHandlers.handleCardClick;
    this._handleLikeClick = cardHandlers.handleLikeClick;
    this._handleBinClick = cardHandlers.handleBinClick;
    this._isOwner = this._owner._id === this._userId ? true : false;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector(settingsForCards.cardElementSelector)
      .cloneNode(true);

    return cardElement;
  }

  _checkBin() {
    if (this._isOwner) {
      this._binButton.classList.add(settingsForCards.binActiveClass);
    }
  }

  _checkLike() {
    this._likes.forEach((whoLiked) => {
      if (whoLiked._id === this._userId) {
        this._likeButton.classList.add(settingsForCards.likeActiveClass);
      } else {
        this._likeButton.classList.remove(settingsForCards.likeActiveClass);
      }
    })
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', (evt) => {
      this._handleCardClick(evt);
    });

    this._likeButton.addEventListener('click', () => {
      const method = this._likeButton.classList.contains(settingsForCards.likeActiveClass) ? 'DELETE' : 'PUT';
      this._handleLikeClick(method, this._id, this._likeButton, this._likeCounter);
    });

    if (this._isOwner) {
      this._binButton.addEventListener('click', () => {
        this._handleBinClick(this._id, this._element);
      });
    }
  }

  generate() {
    this._element = this._getElement();
    this._cardName = this._element.querySelector(settingsForCards.tempNameSelector);
    this._cardImage = this._element.querySelector(settingsForCards.tempImgSelector);
    this._binButton = this._element.querySelector(settingsForCards.tempBinSelector);
    this._likeButton =  this._element.querySelector(settingsForCards.tempLikeSelector);
    this._likeCounter = this._element.querySelector(settingsForCards.tempLikeCounterSelector);

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name + '.';
    this._cardName.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;

    this._checkBin();
    this._checkLike();
    this._setEventListeners();

    return this._element;
  }
}
