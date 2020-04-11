"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var roundsCount = 3;

var start = function start(description, makeGame) {
  console.log('Welcome to the Brain Games!');

  var name = _readlineSync["default"].question('May I have your name? ');

  console.log("Hello, ".concat(name, "!\n"));
  console.log(description);

  var iter = function iter(counter) {
    if (counter === roundsCount) {
      console.log("Congratulations, ".concat(name, "!"));
      return;
    }

    var _makeGame = makeGame(),
        _makeGame2 = _slicedToArray(_makeGame, 2),
        question = _makeGame2[0],
        answer = _makeGame2[1];

    console.log("Question: ".concat(question));

    var playerAnswer = _readlineSync["default"].question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log("'".concat(playerAnswer, "' is wrong answer ;(. Correct answer was '").concat(answer, "'"));
      console.log("Let's try again, ".concat(name, "!"));
    }
  };

  iter(0);
};

var _default = start;
exports["default"] = _default;