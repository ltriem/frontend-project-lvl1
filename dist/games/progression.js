"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require(".."));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'What number is missing in the progression?';
var progressionLength = 10;

var makeQuestion = function makeQuestion(firstNum, step, numberPosition) {
  var array = [];

  for (var i = 0; i < progressionLength; i += 1) {
    if (i === numberPosition) {
      array.push('..');
    } else {
      array.push(String(firstNum + step * i));
    }
  }

  return array.join(' ');
};

var makeGame = function makeGame() {
  var firstNum = (0, _utils["default"])(1, 50);
  var step = (0, _utils["default"])(1, 20);
  var hiddenNumberPosition = (0, _utils["default"])(0, progressionLength - 1);
  var question = makeQuestion(firstNum, step, hiddenNumberPosition);
  var answer = firstNum + step * hiddenNumberPosition;
  return [question, String(answer)];
};

var runGame = function runGame() {
  return (0, _["default"])(description, makeGame);
};

var _default = runGame;
exports["default"] = _default;