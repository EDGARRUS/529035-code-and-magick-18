'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var BAR_WIDTH = 40;
var barHeight = 150;
var BAR_GAP = 40;
var BAR_CHANGE_Y = 240;
var black = '#000';
var white = '#fff';
var myName = 'Вы';
var myColor = 'rgba(255, 0, 0, 1)';
var textFont = 'old 16px PT Mono';
var textVictory = 'Ура вы победили!';
var textVictoryGap = 50;
var textResult = 'Список результатов:';
var textResultGap = 70;
var playerNameGap = 270;
var playerStatGap = 230;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, cloudShadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, white);

  var renderTextBeforeBar = function (DescriptionVictory, DescriptionResult) {
    ctx.fillStyle = black;
    ctx.font = textFont;
    ctx.fillText(DescriptionVictory, CLOUD_X + GAP, textVictoryGap);
    ctx.fillText(DescriptionResult, CLOUD_X + GAP, textResultGap);
  };

  var renderDescriptionBar = function (name, color, numberBar, time) {
    ctx.fillStyle = color;
    ctx.fillText(Math.round(time), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * numberBar, CLOUD_Y + playerStatGap - (barHeight * time) / maxTime);
    ctx.fillText(name, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * numberBar, playerNameGap);
  };

  var renderVisualBar = function (color, numberBar, time) {
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * numberBar, CLOUD_Y + BAR_CHANGE_Y - (barHeight * time) / maxTime, BAR_WIDTH, (barHeight * time) / maxTime);
  };

  var renderMainPlayerBar = function (name, time, numberBar) {
    renderDescriptionBar(name, black, numberBar, time);
    renderVisualBar(myColor, numberBar, time);
  };

  var renderOtherPlayerBar = function (name, time, numberBar) {
    renderDescriptionBar(name, black, numberBar, time);
    renderVisualBar(randomBlue, numberBar, time);
  };

  renderTextBeforeBar(textVictory, textResult);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    if (names[i] === myName) {
      renderMainPlayerBar(names[i], times[i], i);
    } else {
      var randomBlue = 'hsl(240,' + Math.random().toFixed(2) * 100 + '%' + ',50%)';
      renderOtherPlayerBar(names[i], times[i], i);
    }
  }
};
