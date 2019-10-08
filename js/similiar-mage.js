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

  window.codeAndMagicApp.backend.load(addSimiliarMages, window.codeAndMagicApp.util.errorHandler);

})();
