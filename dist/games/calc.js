"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require(".."));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'What is the result of the expression?';
var operations = ['+', '-', '*'];
var amountOfOperations = operations.length;

var makeAnswer = function makeAnswer(operation, num1, num2) {
  var answer;

  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;

    case '-':
      answer = num1 - num2;
      break;

    case '*':
      answer = num1 * num2;
      break;

    default:
      return null;
  }

  return answer;
};

var makeGame = function makeGame() {
  var num1 = (0, _utils["default"])(1, 20);
  var num2 = (0, _utils["default"])(1, 20);
  var operation = operations[(0, _utils["default"])(0, amountOfOperations - 1)];
  var answer = makeAnswer(operation, num1, num2);
  var question = "".concat(num1, " ").concat(operation, " ").concat(num2);
  return [question, String(answer)];
};

var runGame = function runGame() {
  return (0, _["default"])(description, makeGame);
};

var _default = runGame;
exports["default"] = _default;