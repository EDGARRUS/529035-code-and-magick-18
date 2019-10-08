'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  var defaultCoordYUserDialog = (userDialog.offsetTop) + 'px';
  var defaultCoordXUserDialog = (userDialog.offsetLeft) + 'px';

  var setDefaultCoordUserDialog = function () {
    userDialog.style.top = defaultCoordYUserDialog;
    userDialog.style.left = defaultCoordXUserDialog;
  };

  var onPopupEscPress = function (evt) {
    window.codeAndMagicApp.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    if (!setupUserName.classList.contains('focused')) {
      userDialog.classList.add('hidden');
      setDefaultCoordUserDialog();
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  var getSetupOpen = function () {
    return document.querySelector('.setup-open');
  };

  var getSetupOpenIcon = function () {
    return document.querySelector('.setup-open-icon');
  };

  var getSetupClose = function () {
    return document.querySelector('.setup-close');
  };

  var getSetupUserName = function () {
    return document.querySelector('.setup-user-name');
  };

  var onElementFocusin = function () {
    setupUserName.classList.add('focused');
  };

  var onElementFocusout = function () {
    setupUserName.classList.remove('focused');
  };

  document.addEventListener('keydown', onPopupEscPress);

  var setupOpen = getSetupOpen();
  var setupOpenIcon = getSetupOpenIcon();
  var setupClose = getSetupClose();
  var setupUserName = getSetupUserName();

  var getDialogWrapper = function () {
    return document.querySelector('.upload');
  };

  var dialogHandler = getDialogWrapper();

  var addAllDialogEventListener = function () {
    setupOpen.addEventListener('click', openPopup);

    setupOpenIcon.addEventListener('keydown', function (evt) {
      window.codeAndMagicApp.util.isEnterEvent(evt, openPopup);
    });

    dialogHandler.addEventListener('mousedown', function (evt) {
      window.codeAndMagicApp.dragging.mouseDraggingElement(evt, dialogHandler, userDialog);
    });

    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', function (evt) {
      window.codeAndMagicApp.util.isEnterEvent(evt, closePopup);
    });

    setupUserName.addEventListener('focusin', onElementFocusin);
    setupUserName.addEventListener('focusout', onElementFocusout);
  };

  addAllDialogEventListener();

  var successSubmitForm = function () {
    userDialog.classList.add('hidden');
  };

  var formSetup = userDialog.querySelector('.setup-wizard-form');
  formSetup.addEventListener('submit', function (evt) {
    window.codeAndMagicApp.backend.save(new FormData(formSetup), successSubmitForm, window.codeAndMagicApp.util.errorHandler);

    evt.preventDefault();
  });

})();
