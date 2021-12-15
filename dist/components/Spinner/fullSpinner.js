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
    className: "fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden bg-gray-700 opacity-75"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-semibold text-center text-white"
  }, "Loading..."), /*#__PURE__*/_react.default.createElement("p", {
    className: "w-1/3 text-center text-white"
  }, "This may take a few seconds, please don't close this page.")), children);
};

var _default = Spinner;
exports.default = _default;