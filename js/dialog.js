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

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
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
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

  var addAllDialogEventListener = function () {
    setupOpen.addEventListener('click', openPopup);

    setupOpenIcon.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, openPopup);
    });

    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closePopup);
    });

    setupUserName.addEventListener('focusin', onElementFocusin);
    setupUserName.addEventListener('focusout', onElementFocusout);
  };

  addAllDialogEventListener();

})();
