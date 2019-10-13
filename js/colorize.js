'use strict';

(function () {

  window.codeAndMagicApp.colorize = function (element, colors, updateMages) {
    element.addEventListener('click', function () {
      var color = window.codeAndMagicApp.util.arrayRandElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }

      updateMages(color);

    });
  };

})();

