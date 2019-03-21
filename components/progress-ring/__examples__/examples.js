"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXPIRED_100 = exports.EXPIRED_WITH_CUSTOM_ICON = exports.EXPIRED_WITH_ICON = exports.EXPIRED_PARTIAL = exports.WARNING_100 = exports.WARNING_WITH_ICON = exports.WARNING_PARTIAL = exports.COMPLETE_WITH_ICON = exports.COMPLETE_100 = exports.BASE_100 = exports.BASE_PARTIAL = exports.BASE_0 = void 0;

var _react = _interopRequireDefault(require("react"));

var _progressRing = _interopRequireWildcard(require("../../../components/progress-ring"));

var _icon = _interopRequireDefault(require("../../../components/icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_0 = function BASE_0() {
  return _react.default.createElement(_progressRing.default, {
    value: 0
  });
};

exports.BASE_0 = BASE_0;

var BASE_PARTIAL = function BASE_PARTIAL() {
  return _react.default.createElement(_progressRing.default, {
    value: 20
  });
};

exports.BASE_PARTIAL = BASE_PARTIAL;

var BASE_100 = function BASE_100() {
  return _react.default.createElement(_progressRing.default, {
    value: 100
  });
};

exports.BASE_100 = BASE_100;

var COMPLETE_100 = function COMPLETE_100() {
  return _react.default.createElement(_progressRing.default, {
    value: 100,
    theme: _progressRing.THEME_OPTIONS.COMPLETE
  });
};

exports.COMPLETE_100 = COMPLETE_100;

var COMPLETE_WITH_ICON = function COMPLETE_WITH_ICON() {
  return _react.default.createElement(_progressRing.default, {
    value: 100,
    theme: _progressRing.THEME_OPTIONS.COMPLETE,
    hasIcon: true
  });
};

exports.COMPLETE_WITH_ICON = COMPLETE_WITH_ICON;

var WARNING_PARTIAL = function WARNING_PARTIAL() {
  return _react.default.createElement(_progressRing.default, {
    value: 20,
    theme: _progressRing.THEME_OPTIONS.WARNING
  });
};

exports.WARNING_PARTIAL = WARNING_PARTIAL;

var WARNING_WITH_ICON = function WARNING_WITH_ICON() {
  return _react.default.createElement(_progressRing.default, {
    value: 20,
    theme: _progressRing.THEME_OPTIONS.WARNING,
    hasIcon: true
  });
};

exports.WARNING_WITH_ICON = WARNING_WITH_ICON;

var WARNING_100 = function WARNING_100() {
  return _react.default.createElement(_progressRing.default, {
    value: 100,
    theme: _progressRing.THEME_OPTIONS.WARNING
  });
};

exports.WARNING_100 = WARNING_100;

var EXPIRED_PARTIAL = function EXPIRED_PARTIAL() {
  return _react.default.createElement(_progressRing.default, {
    value: 20,
    theme: _progressRing.THEME_OPTIONS.EXPIRED
  });
};

exports.EXPIRED_PARTIAL = EXPIRED_PARTIAL;

var EXPIRED_WITH_ICON = function EXPIRED_WITH_ICON() {
  return _react.default.createElement(_progressRing.default, {
    value: 20,
    theme: _progressRing.THEME_OPTIONS.EXPIRED,
    hasIcon: true
  });
};

exports.EXPIRED_WITH_ICON = EXPIRED_WITH_ICON;

var EXPIRED_WITH_CUSTOM_ICON = function EXPIRED_WITH_CUSTOM_ICON() {
  return _react.default.createElement(_progressRing.default, {
    value: 20,
    theme: _progressRing.THEME_OPTIONS.EXPIRED,
    hasIcon: true,
    icon: _react.default.createElement(_icon.default, {
      category: "utility",
      name: "lock"
    })
  });
};

exports.EXPIRED_WITH_CUSTOM_ICON = EXPIRED_WITH_CUSTOM_ICON;

var EXPIRED_100 = function EXPIRED_100() {
  return _react.default.createElement(_progressRing.default, {
    value: 100,
    theme: _progressRing.THEME_OPTIONS.EXPIRED
  });
};

exports.EXPIRED_100 = EXPIRED_100;