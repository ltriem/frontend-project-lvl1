"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var _default = getRandomInt;
exports["default"] = _default;