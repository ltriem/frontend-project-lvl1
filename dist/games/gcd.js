"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require(".."));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'Find the greatest common divisor of given numbers.';

var findGcd = function findGcd(a, b) {
  if (b > a) {
    return findGcd(b, a);
  }

  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

var makeGame = function makeGame() {
  var num1 = (0, _utils["default"])(1, 100);
  var num2 = (0, _utils["default"])(1, 100);
  var question = "".concat(num1, " ").concat(num2);
  var answer = findGcd(num1, num2);
  return [question, String(answer)];
};

var runGame = function runGame() {
  return (0, _["default"])(description, makeGame);
};

var _default = runGame;
exports["default"] = _default;