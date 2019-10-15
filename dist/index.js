"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.askName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var askName = function askName() {
  console.log("Welcome to the Brain Games!");

  var userName = _readlineSync["default"].question('\nMay I have your name? ');

  console.log("Hello, ".concat(userName, "!\n"));
  return userName;
};

exports.askName = askName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhc2tOYW1lIiwiY29uc29sZSIsImxvZyIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDekJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MseUJBQWFDLFFBQWIsQ0FBc0IsMEJBQXRCLENBQWpCOztBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsa0JBQXNCQyxRQUF0QjtBQUNBLFNBQU9BLFFBQVA7QUFDSCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuZXhwb3J0IGNvbnN0IGFza05hbWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyFcIik7XG4gICAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1xcbk1heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8sICR7dXNlck5hbWV9IVxcbmApO1xuICAgIHJldHVybiB1c2VyTmFtZTtcbn07XG5cblxuIl19