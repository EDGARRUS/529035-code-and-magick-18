'use strict';

(function () {

  var generateMages = function (counter) {
    var firstNames = [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон',
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
      'rgb(0, 0, 0)',
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
        name: window.util.arrayRandElement(firstNames) + ' ' + window.util.arrayRandElement(secondNames),
        coatColor: window.util.arrayRandElement(coatColors),
        eyesColor: window.util.arrayRandElement(eyesColors),
      });
    }

    return magesStat;
  };

  var allMages = generateMages(4);

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

})();
