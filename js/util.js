'use strict';

window.codeAndMagicApp = {};

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.codeAndMagicApp.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    arrayRandElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
  };

})();
