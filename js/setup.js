'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var arrayRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var generateMages = function (counter) {
  var firstNames = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var secondNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];
  var magesStat = [];

  for (var i = 1; i <= counter; i++) {
    magesStat.push({
      name: arrayRandElement(firstNames) + ' ' + arrayRandElement(secondNames),
      coatColor: arrayRandElement(coatColors),
      eyesColor: arrayRandElement(eyesColors),
    });
  }

  return magesStat;
};

var allMages = generateMages(4);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarMageTemplate = document.getElementById('similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderMage = function (mage) {
  var mageElement = similarMageTemplate.cloneNode(true);

  mageElement.querySelector('.setup-similar-label').textContent = mage.name;
  mageElement.querySelector('.wizard-coat').style.fill = mage.coatColor;
  mageElement.querySelector('.wizard-eyes').style.fill = mage.eyesColor;

  return mageElement;
};

var addSimiliarMages = function (magesArray) {
  var similarMagesFragment = document.createDocumentFragment();
  for (var i = 0; i < magesArray.length; i++) {
    similarMagesFragment.appendChild(renderMage(magesArray[i]));
  }
  similarListElement.appendChild(similarMagesFragment);
};

addSimiliarMages(allMages);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Окно в начале открыто, поэтому навешиваю сразу эвент на ESC, так как событие openPopup еще не произошло
document.addEventListener('keydown', onPopupEscPress);

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (!setupUserName.classList.contains('focused')) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

var getSetupOpen = function () {
  return document.querySelector('.setup-open');
};

var setupOpen = getSetupOpen();
setupOpen.addEventListener('click', openPopup);


var getSetupOpenIcon = function () {
  return document.querySelector('.setup-open-icon');
};

var setupOpenIcon = getSetupOpenIcon();
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var getSetupClose = function () {
  return document.querySelector('.setup-close');
};

var setupClose = getSetupClose();
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var getSetupUserName = function () {
  return document.querySelector('.setup-user-name');
};

var setupUserName = getSetupUserName();

setupUserName.addEventListener('focusin', function () {
  setupUserName.classList.add('focused');
});

setupUserName.addEventListener('focusout', function () {
  setupUserName.classList.remove('focused');
});

var getSetupMage = function () {
  return document.querySelector('.setup-wizard');
};

var onCoatClick = function (chosenMage) {
  var mageCoat = chosenMage.querySelector('.wizard-coat');
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  mageCoat.addEventListener('click', function () {
    mageCoat.style.fill = arrayRandElement(coatColors);
  });
};

var onEyesClick = function (chosenMage) {
  var mageEyes = chosenMage.querySelector('.wizard-eyes');
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  mageEyes.addEventListener('click', function () {
    mageEyes.style.fill = arrayRandElement(eyesColors);
  });
};

var getMageFireball = function () {
  return document.querySelector('.setup-fireball-wrap');
};

var onFireballClick = function (mageFireballWrap) {
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  mageFireballWrap.addEventListener('click', function () {
    mageFireballWrap.style.background = arrayRandElement(fireballColors);
  });
};

var setupMage = getSetupMage();
var MageFireball = getMageFireball();
onCoatClick(setupMage);
onEyesClick(setupMage);
onFireballClick(MageFireball);

