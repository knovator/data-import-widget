"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useImportData2 = _interopRequireDefault(require("./hooks/useImportData"));

var _buttonSpinner = _interopRequireDefault(require("../Spinner/buttonSpinner"));

var _fullSpinner = _interopRequireDefault(require("../Spinner/fullSpinner"));

var _reactHotToast = require("react-hot-toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(props) {
  var _templateData$files, _templateData$files2;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useImportData = (0, _useImportData2.default)(props),
      templateList = _useImportData.templateList,
      templateData = _useImportData.templateData,
      handleTemplateChange = _useImportData.handleTemplateChange,
      handleFileUpload = _useImportData.handleFileUpload,
      handleSubmit = _useImportData.handleSubmit,
      loading = _useImportData.loading;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHotToast.Toaster, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-primary active:bg-pink-600 hover:shadow-lg focus:outline-none",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, props.children), showModal ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: "w-90"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between p-3 border-b border-solid rounded-t border-blueGray-200"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-xl font-semibold"
  }, "Import Data"), /*#__PURE__*/_react.default.createElement("button", {
    className: "float-right ml-auto text-3xl text-black border-0",
    onClick: function onClick() {
      return setShowModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-6 h-2 text-black bg-transparent"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex-auto p-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "wrapper",
    className: "grid grid-cols-12 gap-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block mb-1 text-sm font-medium text-gray-700"
  }, "Select Templete"), /*#__PURE__*/_react.default.createElement("select", {
    id: "templet_id",
    name: "templet_id",
    defaultValue: "Select Templete",
    onChange: function onChange(id) {
      return handleTemplateChange(id);
    },
    className: "block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    hidden: true
  }, "Select templete"), templateList.map(function (temp) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: temp._id,
      value: temp._id
    }, temp.name);
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-6"
  }, /*#__PURE__*/_react.default.createElement(_fullSpinner.default, {
    loading: loading
  }, (templateData === null || templateData === void 0 ? void 0 : templateData.templateId) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-opacity-50 text-primary"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold "
  }, "Upload your file")), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-4 m-auto bg-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative px-5 py-10 border-2 border-dashed rounded-lg file_upload"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "".concat(loading ? "text-gray-300" : "text-primary", " w-8 mx-auto mb-2"),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col text-center input_field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "hidden text-sm cursor-pointer w-36",
    type: "file",
    onChange: handleFileUpload,
    disabled: loading ? true : false
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(loading ? "bg-gray-400 " : "bg-primary", " items-center justify-center text text-white  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 inline-flex shadow-md")
  }, /*#__PURE__*/_react.default.createElement(_buttonSpinner.default, {
    loading: loading
  }), " Select")), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(loading ? "text-gray-400" : "text-gray-600", " title uppercase text-xs flex items-center gap-3 justify-center")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-10 h-0.5 bg-gray-400"
  }), "or drop files here", /*#__PURE__*/_react.default.createElement("div", {
    className: "w-10 h-0.5 bg-gray-400"
  })))), ((_templateData$files = templateData.files) === null || _templateData$files === void 0 ? void 0 : _templateData$files.name) !== "" && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm text-gray-400",
    style: {
      display: "flex",
      alignItems: "center",
      marginTop: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: "inline-block",
      marginRight: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
  }))), /*#__PURE__*/_react.default.createElement("span", null, (_templateData$files2 = templateData.files) === null || _templateData$files2 === void 0 ? void 0 : _templateData$files2.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-2 m-auto bg-white rounded-lg bg-whtie"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "index.html",
    className: "text-black hover:underline"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: "inline-block",
      marginRight: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
  }))), /*#__PURE__*/_react.default.createElement("span", null, "Download Sample Templete")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-2 text-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "".concat(templateData.files.name === "" ? "bg-gray-400 cursor-not-allowed" : "bg-primary cursor-pointer", " flex items-center text  text-white border border-gray-300 rounded font-semibold  mx-auto px-4 shadow-md")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "m-2"
  }, "Import"))))))))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25"
  })) : null);
};

var _default = Modal;
exports.default = _default;