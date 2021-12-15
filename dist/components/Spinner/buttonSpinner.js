"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-3 h-3 m-2 border-t-2 border-b-2 rounded-full animate-spin border-white-500"
  })), children);
};

var _default = Spinner;
exports.default = _default;