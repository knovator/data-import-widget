"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _buttonSpinner = _interopRequireDefault(require("../Spinner/buttonSpinner"));

var _fullSpinner = _interopRequireDefault(require("../Spinner/fullSpinner"));

var _api = _interopRequireWildcard(require("@knovator/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateState", function (data) {
      return _this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), data);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTemplate", function (data) {
      _this.updateState({
        selectedTemplate: _objectSpread(_objectSpread({}, _this.state.selectedTemplate), data)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTemplateChange", function (e) {
      _this.updateTemplate({
        templateId: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileUpload", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var file;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = event.target.files[0];

                _this.updateTemplate({
                  files: file
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "notify", function (data) {
      if (typeof _this.props.onNotify === "function") {
        _this.props.onNotify(data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        var selectedTemplate, additionalData, formData, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                selectedTemplate = _this.state.selectedTemplate;
                additionalData = {};

                if (typeof _this.props.getAdditionalInfo === "function") {
                  additionalData = _this.props.getAdditionalInfo();
                }

                if (!selectedTemplate.templateId) {
                  _context2.next = 22;
                  break;
                }

                _context2.prev = 5;

                _this.updateState({
                  loading: true
                });

                formData = new FormData();
                formData.append("files", selectedTemplate.files);
                formData.append("additionalData", JSON.stringify(additionalData));
                _context2.next = 12;
                return (0, _api.default)({
                  url: "templates/".concat(selectedTemplate.templateId, "/process-file"),
                  data: formData,
                  method: "post"
                });

              case 12:
                response = _context2.sent;

                _this.notify({
                  type: "success",
                  payload: response
                });

                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](5);

                _this.notify({
                  type: "error",
                  payload: _context2.t0
                });

              case 19:
                _context2.prev = 19;

                _this.updateState({
                  loading: false
                });

                return _context2.finish(19);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 16, 19, 22]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "setShow", function (show) {
      _this.updateState({
        show: show
      });
    });

    _this.state = {
      show: false,
      loading: false,
      templates: [],
      selectedTemplate: {
        templateId: "",
        files: {
          name: ""
        }
      }
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this$props, _this$props$getToken, getToken, _this$props$apiPrefix, apiPrefix, _this$props$apiBaseUr, apiBaseUrl, _this$props$projectCo, projectCode, data, _ref3, _ref3$templates, templates;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // configurative @knovator/api
                _this$props = this.props, _this$props$getToken = _this$props.getToken, getToken = _this$props$getToken === void 0 ? "" : _this$props$getToken, _this$props$apiPrefix = _this$props.apiPrefix, apiPrefix = _this$props$apiPrefix === void 0 ? "v1" : _this$props$apiPrefix, _this$props$apiBaseUr = _this$props.apiBaseUrl, apiBaseUrl = _this$props$apiBaseUr === void 0 ? "https://api.dataimport.knovator.in" : _this$props$apiBaseUr;
                (0, _api.setAPIConfig)({
                  getToken: getToken,
                  prefix: apiPrefix,
                  handleCache: false,
                  baseUrl: apiBaseUrl
                });
                _this$props$projectCo = this.props.projectCode, projectCode = _this$props$projectCo === void 0 ? "STRING_ERP" : _this$props$projectCo;
                _context3.next = 5;
                return (0, _api.default)({
                  url: "projects/".concat(projectCode),
                  config: {
                    handleCache: false
                  }
                });

              case 5:
                data = _context3.sent;
                _ref3 = data || {}, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? [] : _ref3$templates;
                this.updateState({
                  templates: templates
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _selectedTemplate$fil,
          _selectedTemplate$fil2;

      var _this$state = this.state,
          show = _this$state.show,
          loading = _this$state.loading,
          _this$state$templates = _this$state.templates,
          templates = _this$state$templates === void 0 ? [] : _this$state$templates,
          _this$state$selectedT = _this$state.selectedTemplate,
          selectedTemplate = _this$state$selectedT === void 0 ? {} : _this$state$selectedT;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "data-import"
      }, /*#__PURE__*/_react.default.createElement("span", {
        onClick: function onClick() {
          return _this2.setShow(true);
        }
      }, this.props.children), show ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "max-w-6xl ",
        style: {
          width: "80%"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "w-auto"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "flex items-center justify-between px-12 pt-12 rounded-t"
      }, /*#__PURE__*/_react.default.createElement("h3", {
        className: "text-2xl font-semibold "
      }, "Import Data"), /*#__PURE__*/_react.default.createElement("button", {
        className: "absolute flex items-center justify-center w-8 h-8 p-0 text-black border-0 rounded-full cursor-pointer top-4 right-4 bg-slate-400 bg-opacity-20",
        onClick: function onClick() {
          return _this2.setShow(false);
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "text-2xl text-black bg-transparent"
      }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "relative flex-auto p-4"
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "wrapper",
        className: "grid grid-cols-12 gap-4"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-span-6 p-8"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "block mb-4 text-base font-medium leading-5 text-gray-700"
      }, "Select Template"), /*#__PURE__*/_react.default.createElement("select", {
        id: "template_id",
        name: "template_id",
        defaultValue: "Select Template",
        onChange: function onChange(id) {
          return _this2.handleTemplateChange(id);
        },
        className: "block p-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm w-90 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "",
        hidden: true
      }, "Select Template"), templates.map(function (temp) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: temp._id,
          value: temp._id
        }, temp.name);
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-span-6 p-8 pl-0"
      }, /*#__PURE__*/_react.default.createElement(_fullSpinner.default, {
        loading: loading
      }, (selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.templateId) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-opacity-50 text-primary"
      }, /*#__PURE__*/_react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-7 h-7",
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
        className: "m-0 text-base font-bold "
      }, "Upload your file")), /*#__PURE__*/_react.default.createElement("div", {
        className: "py-4 m-auto bg-white"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "relative flex flex-col items-center px-5 py-10 border-2 border-dashed rounded-lg file_upload"
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
        className: "mb-4"
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: "hidden text-sm cursor-pointer w-36",
        type: "file",
        onChange: this.handleFileUpload,
        disabled: loading ? true : false
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(loading ? "bg-gray-400 " : "bg-primary", " items-center h-8 justify-center text text-white  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 inline-flex shadow-md")
      }, /*#__PURE__*/_react.default.createElement(_buttonSpinner.default, {
        loading: loading
      }), " ", "Select")), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(loading ? "text-gray-400" : "text-gray-600", " title uppercase text-xs border-0 px-0 flex items-center gap-3 justify-center")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "w-10 h-0.5 bg-gray-400"
      }), "or drop files here", /*#__PURE__*/_react.default.createElement("div", {
        className: "w-10 h-0.5 bg-gray-400"
      })))), ((_selectedTemplate$fil = selectedTemplate.files) === null || _selectedTemplate$fil === void 0 ? void 0 : _selectedTemplate$fil.name) !== "" && /*#__PURE__*/_react.default.createElement("div", {
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
      }))), /*#__PURE__*/_react.default.createElement("span", null, (_selectedTemplate$fil2 = selectedTemplate.files) === null || _selectedTemplate$fil2 === void 0 ? void 0 : _selectedTemplate$fil2.name)), /*#__PURE__*/_react.default.createElement("div", {
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
      }))), /*#__PURE__*/_react.default.createElement("span", null, "Download Sample Template")))), /*#__PURE__*/_react.default.createElement("div", {
        className: "py-2 text-center"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        onClick: this.handleSubmit,
        className: "".concat(selectedTemplate.files.name === "" ? "bg-gray-400 cursor-not-allowed" : "bg-primary cursor-pointer", " flex h-8 items-center text  text-white border border-gray-300 rounded font-semibold  mx-auto px-4 shadow-md")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "m-2"
      }, "Import"))))))))))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "fixed inset-0 z-40 bg-black opacity-25"
      })) : null);
    }
  }]);

  return Modal;
}(_react.Component);

var _default = Modal;
exports.default = _default;