"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var askName = function askName() {
  console.log('Welcome to the Brain Games!');

  var userName = _readlineSync["default"].question('\nMay I have your name? ');

  console.log("Hello, ".concat(userName, "!\n"));
  return userName;
};

var _default = askName;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhc2tOYW1lIiwiY29uc29sZSIsImxvZyIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUJBQWFDLFFBQWIsQ0FBc0IsMEJBQXRCLENBQWpCOztBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsa0JBQXNCQyxRQUF0QjtBQUNBLFNBQU9BLFFBQVA7QUFDRCxDQUxEOztlQU9lSCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgYXNrTmFtZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignXFxuTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7dXNlck5hbWV9IVxcbmApO1xuICByZXR1cm4gdXNlck5hbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc2tOYW1lO1xuIl19