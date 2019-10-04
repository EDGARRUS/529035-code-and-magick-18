'use strict';

(function () {

  var getSetupMage = function () {
    return document.querySelector('.setup-wizard');
  };

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

  var getMageFireball = function () {
    return document.querySelector('.setup-fireball-wrap');
  };

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var setupMage = getSetupMage();
  var mageEyes = setupMage.querySelector('.wizard-eyes');
  var mageCoat = setupMage.querySelector('.wizard-coat');
  var mageFireball = getMageFireball();

  var addColorizeMageEventListener = function () {
    window.colorize(mageEyes, eyesColors);
    window.colorize(mageCoat, coatColors);
    window.colorize(mageFireball, fireballColors);
  };

  addColorizeMageEventListener();

})();

