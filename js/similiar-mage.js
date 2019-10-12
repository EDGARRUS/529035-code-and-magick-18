'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarMageTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderMage = function (mage) {
    var mageElement = similarMageTemplate.cloneNode(true);

    mageElement.querySelector('.setup-similar-label').textContent = mage.name;
    mageElement.querySelector('.wizard-coat').style.fill = mage.colorCoat;
    mageElement.querySelector('.wizard-eyes').style.fill = mage.colorEyes;

    return mageElement;
  };

  var addSimiliarMages = function (magesArray) {
    var similarMagesFragment = document.createDocumentFragment();
    var magesRandomArray = window.codeAndMagicApp.util.arrayShuffle(magesArray);
    for (var i = 0; i < 4; i++) {

      similarMagesFragment.appendChild(renderMage(magesRandomArray[i]));
    }
    similarListElement.appendChild(similarMagesFragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var addSimiliarMage = function (magesArray) {
    var similarMagesFragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {

      similarMagesFragment.appendChild(renderMage(magesArray[i]));
    }
    similarListElement.appendChild(similarMagesFragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.codeAndMagicApp.similiarMage = {};

  var newEyesColor;
  var newCoatColor;

  var getRank = function (mage) {
    var rank = 0;

    if (mage.colorCoat === newCoatColor) {
      rank += 2;
    }
    if (mage.colorEyes === newEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateMages = function () {

    var filterArrayMages = window.codeAndMagicApp.backend.mages.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    document.querySelectorAll('.setup-similar-item').forEach(function (element) {
      element.remove();
    });
    addSimiliarMage(filterArrayMages);
  };

  window.codeAndMagicApp.similiarMage.onEyesChange = window.codeAndMagicApp.debounce(function (color) {
    newEyesColor = color;
    updateMages();
  });

  window.codeAndMagicApp.similiarMage.onCoatChange = window.codeAndMagicApp.debounce(function (color) {
    newCoatColor = color;
    updateMages();
  });

  window.codeAndMagicApp.backend.load(addSimiliarMages, window.codeAndMagicApp.util.errorHandler);

})();
