'use strict';

(function () {

  window.codeAndMagicApp.dragging = {

    mouseDraggingElement: function (evt, handler, element) {

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

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (clickEvt) {
            clickEvt.preventDefault();
            handler.removeEventListener('click', onClickPreventDefault);
          };
          handler.addEventListener('click', onClickPreventDefault);
        }

      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },
  };

})();
