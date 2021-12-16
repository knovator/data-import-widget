"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Modal = _interopRequireDefault(require("./components/Modal"));

require("./../output.css");

require("./../custom.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, props);
};

var _default = _Modal.default;
exports.default = _default;