"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = void 0;

var _reactHotToast = require("react-hot-toast");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Notifications = function Notifications() {
  var _useToaster = (0, _reactHotToast.useToaster)(),
      toasts = _useToaster.toasts,
      handlers = _useToaster.handlers;

  var startPause = handlers.startPause,
      endPause = handlers.endPause,
      calculateOffset = handlers.calculateOffset,
      updateHeight = handlers.updateHeight;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 8,
      left: 8
    },
    onMouseEnter: startPause,
    onMouseLeave: endPause
  }, toasts.map(function (toast) {
    var offset = calculateOffset(toast, {
      reverseOrder: false,
      gutter: 8
    });

    var ref = function ref(el) {
      if (el && !toast.height) {
        var height = el.getBoundingClientRect().height;
        updateHeight(toast.id, height);
      }
    };

    return /*#__PURE__*/React.createElement("div", _extends({
      key: toast.id,
      ref: ref,
      style: {
        position: 'absolute',
        width: '200px',
        background: 'papayawhip',
        transition: 'all 0.5s ease-out',
        opacity: toast.visible ? 1 : 0,
        transform: "translateY(".concat(offset, "px)")
      }
    }, toast.ariaProps), toast.message);
  }));
};

exports.Notifications = Notifications;