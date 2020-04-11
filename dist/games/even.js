"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require(".."));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var description = 'Answer "yes" if the number is even, otherwise answer "no"';

var isEven = function isEven(num) {
  return num % 2 === 0;
};

var makeGame = function makeGame() {
  var question = (0, _utils["default"])(1, 100);
  var answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

var runGame = function runGame() {
  return (0, _["default"])(description, makeGame);
};

var _default = runGame;
exports["default"] = _default;