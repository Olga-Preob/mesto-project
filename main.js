(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,r=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"editUserAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t)})}).then((function(t){return e._getResponseData(t)}))}},{key:"editUserInfo",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(e)})}).then((function(t){return n._getResponseData(t)}))}},{key:"addNewCard",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(e)})}).then((function(t){return n._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"sendLike",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"".concat(t),headers:this._headers}).then((function(t){return n._getResponseData(t)}))}},{key:"errorHandler",value:function(t){console.error(t)}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._likes=n.likes,this._owner=n.owner,this._id=n._id,this._userId=r,this._settings=o,this._handleCardClick=e.handleCardClick,this._handleLikeClick=e.handleLikeClick,this._handleBinClick=e.handleBinClick,this._isOwner=this._owner._id===this._userId}var e,n;return e=t,(n=[{key:"_getElement",value:function(){return document.querySelector(this._settings.cardTemplateSelector).content.querySelector(this._settings.cardElementSelector).cloneNode(!0)}},{key:"_checkBin",value:function(){this._isOwner&&this._binButton.classList.add(this._settings.binActiveClass)}},{key:"_checkLike",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId?t._likeButton.classList.add(t._settings.likeActiveClass):t._likeButton.classList.remove(t._settings.likeActiveClass)}))}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(e){t._handleCardClick(e)})),this._likeButton.addEventListener("click",(function(){var e=t._likeButton.classList.contains(t._settings.likeActiveClass)?"DELETE":"PUT";t._handleLikeClick(e,t._id,t._likeButton,t._likeCounter)})),this._isOwner&&this._binButton.addEventListener("click",(function(){t._handleBinClick(t._id,t._element)}))}},{key:"generate",value:function(){return this._element=this._getElement(),this._cardName=this._element.querySelector(this._settings.tempNameSelector),this._cardImage=this._element.querySelector(this._settings.tempImgSelector),this._binButton=this._element.querySelector(this._settings.tempBinSelector),this._likeButton=this._element.querySelector(this._settings.tempLikeSelector),this._likeCounter=this._element.querySelector(this._settings.tempLikeCounterSelector),this._cardImage.src=this._link,this._cardImage.alt=this._name+".",this._cardName.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._checkBin(),this._checkLike(),this._setEventListeners(),this._element}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formEditClass=e.formEditClass,this._formElement=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_enableFormEditButton",value:function(){this._formElement.classList.contains(this._formEditClass)&&this._enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._enableFormEditButton(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var t=this;this._setEventListeners(),this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._formElement.addEventListener("reset",(function(){t._disableButton(),t._enableFormEditButton(),t._inputList.forEach((function(e){t._hideInputError(e)}))}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),f(this,"setEventListeners",(function(){r._popup.querySelector(r._settings.closeButtonSelector).addEventListener("click",(function(){r.close()})),r._popup.addEventListener("click",(function(t){t.target.classList.contains(r._settings.popupClass)&&r.close()}))})),this._popup=e,this._settings=n,this.setEventListeners()}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add(this._settings.openedClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._settings.openedClass),this._removeEventListeners()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}(this,t)});function u(t,e,n){var r,o=t.handleConfirmClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),v(_(r=i.call(this,e,n)),"_callHandler",(function(){var t=r._buttonConfirm.textContent;r._buttonConfirm.textContent="Удаление...",r._handleConfirmClick(r._cardId,r._cardMarkup).then((function(){return r.close()})).finally((function(){r._buttonConfirm.textContent=t}))})),v(_(r),"setEventListeners",(function(){r._buttonConfirm.addEventListener("click",r._callHandler)})),r._buttonConfirm=r._popup.querySelector(r._settings.submitButtonSelector),r._handleConfirmClick=o,r.setEventListeners(),r}return e=u,(n=[{key:"getData",value:function(t,e){this._cardId=t,this._cardMarkup=e}},{key:"_showLoadingText",value:function(){this._buttonConfirm.textContent="Удаление..."}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,I(r.key),r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function L(t,e,n){return(e=I(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function u(t,e,n){var r,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),L(O(r=i.call(this,e,n)),"_sendForm",(function(t){t.preventDefault();var e=r._submitButton.textContent;r._showLoadingText(),r._handleFormSubmit(r._getInputValues()).then((function(){return r.close()})).finally((function(){r._submitButton.textContent=e}))})),L(O(r),"setEventListeners",(function(){r._form.addEventListener("submit",r._sendForm)})),r._form=r._popup.querySelector(r._settings.formSelector),r._inputList=r._form.querySelectorAll(r._settings.inputSelector),r._submitButton=r._form.querySelector(r._settings.submitButtonSelector),r._handleFormSubmit=o,r.setEventListeners(),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.id]=e.value})),this._formValues}},{key:"_showLoadingText",value:function(){this._popup.classList.contains(this._settings.changeAvaClass)||this._popup.classList.contains(this._settings.editClass)?this._submitButton.textContent="Сохранение...":this._submitButton.textContent="Создание..."}},{key:"close",value:function(){C(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.id]}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._imageLink=n._popup.querySelector(n._settings.imgLinkSelector),n._imageName=n._popup.querySelector(n._settings.imgNameSelector),n}return e=u,(n=[{key:"open",value:function(t,e){U(T(u.prototype),"open",this).call(this),this._imageLink.src=t,this._imageLink.alt=e+".",this._imageName.textContent=e}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var N=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"setItem",value:function(t){this._container.prepend(t)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var F,G=function(){function t(e,n,r,o){var i=e.requestGetUserInfo,u=e.requestSetUserAvatar,a=e.requestSetUserInfo;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userAvatar=n,this._userName=r,this._userAbout=o,this._requestGetUserInfo=i,this._requestSetUserAvatar=u,this._requestSetUserInfo=a}var e,n;return e=t,(n=[{key:"changeUserAvatar",value:function(t){this._userAvatar.src=t}},{key:"changeUserInfo",value:function(t,e){this._userAbout.textContent=t,this._userName.textContent=e}},{key:"getUserInfo",value:function(){return this._requestGetUserInfo()}},{key:"setUserAvatar",value:function(t){var e=t.avaLinkInput;return this._requestSetUserAvatar(e)}},{key:"setUserInfo",value:function(t){var e=t.nameInput,n=t.aboutInput;return this._requestSetUserInfo({nameInput:e,aboutInput:n})}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),M=document.querySelector(".popup_type_add"),J=document.querySelector(".popup_type_edit"),z=document.querySelector(".popup_type_change-avatar"),$=document.querySelector(".popup_type_open-image"),K=document.querySelector(".popup_type_confirm"),Q=document.querySelector(".add-button"),W=document.querySelector(".change-avatar-button"),X=document.querySelector(".edit-button"),Y=document.querySelectorAll(".popup__form"),Z=document.querySelector(".image-board__list"),tt=document.querySelector(".profile"),et=document.querySelector(".profile__avatar"),nt=document.querySelector(".profile__title"),rt=document.querySelector(".profile__subtitle"),ot={popupClass:"popup",openedClass:"popup_opened",editClass:"popup_type_edit",changeAvaClass:"popup_type_change-avatar",popupSelector:".popup",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",closeButtonSelector:".popup__button-close",imgLinkSelector:".popup__card-image",imgNameSelector:".popup__card-title"},it={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",formEditClass:"popup__form_type_edit"},ut={likeActiveClass:"card__like-button_active",binActiveClass:"card__delete-button_active",cardTemplateSelector:".card-template",cardElementSelector:".image-board__item",cardContainerSelector:".image-board__list",tempNameSelector:".card__title",tempImgSelector:".card__image",tempBinSelector:".card__delete-button",tempLikeSelector:".card__like-button",tempLikeCounterSelector:".card__like-counter"},at="visible-element";function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var st=new n({baseUrl:"https://nomoreparties.co/v1/plus-cohort-23",headers:{authorization:"288abb86-8961-48f2-bb50-be9d390f9db5","Content-Type":"application/json"}}),lt=new G({requestGetUserInfo:function(){return st.getUserInfo().then((function(t){return{nameInput:t.name,aboutInput:t.about,avaLinkInput:t.avatar,_id:t._id}})).catch((function(t){return st.errorHandler(t)}))},requestSetUserAvatar:function(t){return st.editUserAvatar(t).then((function(t){return lt.changeUserAvatar(t.avatar)})).catch((function(t){return st.errorHandler(t)}))},requestSetUserInfo:function(t){var e=t.nameInput,n=t.aboutInput;return st.editUserInfo(e,n).then((function(t){return lt.changeUserInfo(t.about,t.name)})).catch((function(t){return st.errorHandler(t)}))}},et,nt,rt),ft=new N({renderer:function(t){ft.setItem(function(t){return new i(_t,t,F,ut).generate()}(t))}},ut.cardContainerSelector),pt=new P({handleFormSubmit:function(t){return lt.setUserAvatar(t).then((function(){return pt.close()})).catch((function(t){return st.errorHandler(t)}))}},z,ot),yt=new P({handleFormSubmit:function(t){return lt.setUserInfo(t).then((function(){return yt.close()})).catch((function(t){return st.errorHandler(t)}))}},J,ot),ht=new P({handleFormSubmit:function(t){return st.addNewCard(t.imgNameInput,t.imgLinkInput).then((function(t){ft.renderItems([t]),ht.close()})).catch((function(t){return st.errorHandler(t)}))}},M,ot),mt=new S({handleConfirmClick:function(t,e){return st.deleteCard(t).then((function(){e.remove(),mt.close()})).catch((function(t){return st.errorHandler(t)}))}},K,ot),dt=new R($,ot),_t={handleCardClick:function(t){var e=t.target;dt.open(e.src,e.alt.slice(0,-1))},handleLikeClick:function(t,e,n,r){st.sendLike(t,e).then((function(t){n.classList.toggle(ut.likeActiveClass),r.textContent=t.likes.length})).catch((function(t){return st.errorHandler(t)}))},handleBinClick:function(t,e){mt.getData(t,e),mt.open()}},bt=function(t,e){t?e.classList.remove(at):e.classList.add(at)};W.addEventListener("click",(function(){pt.open()})),X.addEventListener("click",(function(){lt.getUserInfo().then((function(t){yt.setInputValues(t),yt.open()})).catch((function(t){return st.errorHandler(t)}))})),Q.addEventListener("click",(function(){ht.open()})),Y.forEach((function(t){new c(it,t).enableValidation()})),Promise.all([lt.getUserInfo(),st.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];F=o._id,lt.changeUserAvatar(o.avaLinkInput),lt.changeUserInfo(o.aboutInput,o.nameInput),ft.renderItems(i.reverse()),bt(!1,tt),bt(!1,Z)})).catch((function(t){return st.errorHandler(t)})),document.querySelectorAll(ot.popupSelector).forEach((function(t){t.classList.add("display-flex")}))})();