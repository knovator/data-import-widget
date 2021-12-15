"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useImportData = function useImportData(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      templateList = _useState2[0],
      setTemplateList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loader = _useState4[0],
      setLoader = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)({
    templateId: "",
    files: {
      name: ""
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      templateData = _useState8[0],
      setTemplateData = _useState8[1];

  (0, _react.useEffect)(function () {
    console.log("Fetching Data from Server");

    _axios.default.get("https://api.dataimport.knovator.in/v1/projects/STRING_ERP").then(function (_ref) {
      var response = _ref.data;
      // console.log(`response`, response);
      setTemplateList(response.templates);
    }).catch(function (err) {
      console.error(err);
    });
  }, []);

  var handleTemplateChange = function handleTemplateChange(templateId) {
    setTemplateData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        templateId: templateId.target.value
      });
    });
  };

  var handleFileUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = event.target.files[0];
              setTemplateData(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  files: file
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFileUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var formData, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              if (!templateData.templateId) {
                _context2.next = 20;
                break;
              }

              _context2.prev = 2;
              setLoading(true);
              formData = new FormData();
              formData.append("files", templateData.files);
              _context2.next = 8;
              return _axios.default.post("https://api.dataimport.knovator.in/v1/templates/".concat(templateData.templateId, "/process-file"), formData);

            case 8:
              response = _context2.sent;
              console.log("response", response);
              (0, _reactHotToast.default)("File is uploaded to Server. Update will be notified by Email");
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              message = _context2.t0.message;
              // console.log(message);
              (0, _reactHotToast.default)(message);

            case 17:
              _context2.prev = 17;
              setLoading(false);
              return _context2.finish(17);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13, 17, 20]]);
    }));

    return function handleSubmit(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    templateList: templateList,
    handleTemplateChange: handleTemplateChange,
    setTemplateData: setTemplateData,
    templateData: templateData,
    handleSubmit: handleSubmit,
    handleFileUpload: handleFileUpload,
    loader: loader,
    loading: loading,
    setLoader: setLoader
  };
};

var _default = useImportData;
exports.default = _default;