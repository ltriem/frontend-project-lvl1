"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require(".."));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
var firstNum = 1;
var lastNum = 100;

var isPrime = function isPrime(num) {
  if (num < 2) {
    return false;
  }

  var iter = function iter(divisor) {
    if (divisor > Math.sqrt(num)) {
      return true;
    }

    if (num % divisor === 0) {
      return false;
    }

    return iter(divisor + 1);
  };

  return iter(2);
};

var makeGame = function makeGame() {
  var question = (0, _utils["default"])(firstNum, lastNum);
  var answer = isPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};

var runGame = function runGame() {
  return (0, _["default"])(description, makeGame);
};

var _default = runGame;
exports["default"] = _default;