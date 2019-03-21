"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = _interopRequireDefault(require("../../input"));

var _keyCode = _interopRequireDefault(require("../../../utilities/key-code"));

var _constants = require("../../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 *  Component description.
 */
var TimepickerDropdownTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimepickerDropdownTrigger, _React$Component);

  function TimepickerDropdownTrigger() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TimepickerDropdownTrigger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TimepickerDropdownTrigger.__proto__ || Object.getPrototypeOf(TimepickerDropdownTrigger)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onKeyDown && event.keyCode) {
          if (event.keyCode === _keyCode.default.ENTER || event.keyCode === _keyCode.default.DOWN || event.keyCode === _keyCode.default.UP || event.keyCode === _keyCode.default.ESCAPE) {
            _this.props.onKeyDown(event);
          }
        }
      }
    }), _temp));
  }

  _createClass(TimepickerDropdownTrigger, [{
    key: "render",
    // ### Render
    value: function render() {
      var _props = this.props,
          iconRight = _props.iconRight,
          menu = _props.menu,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onMouseDown = _props.onMouseDown,
          triggerRef = _props.triggerRef,
          props = _objectWithoutProperties(_props, ["iconRight", "menu", "onBlur", "onFocus", "onKeyDown", "onMouseDown", "triggerRef"]);

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        _react.default.createElement("div", {
          onBlur: onBlur,
          onFocus: onFocus,
          onKeyDown: this.handleKeyDown,
          onMouseDown: onMouseDown
        }, _react.default.createElement(_input.default, _extends({
          iconRight: iconRight
        }, props, {
          inputRef: triggerRef
        }), menu))
      );
    }
  }]);

  return TimepickerDropdownTrigger;
}(_react.default.Component);

Object.defineProperty(TimepickerDropdownTrigger, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _constants.MENU_DROPDOWN_TRIGGER
});
Object.defineProperty(TimepickerDropdownTrigger, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    /**
     * Icon for right side of trigger
     */
    iconRight: _propTypes.default.node,

    /**
     * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering input.
     */
    id: _propTypes.default.string,

    /**
     * This label appears above the input.
     */
    label: _propTypes.default.string,

    /**
     * The dropdown menu.
     */
    menu: _propTypes.default.node,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering input loses focus.
     */
    onBlur: _propTypes.default.func,

    /**
     * This prop is passed onto the triggering `Input`. Triggered when the trigger input is clicked.
     */
    onClick: _propTypes.default.func,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering input gains focus.
     */
    onFocus: _propTypes.default.func,

    /**
     * Called when a key pressed.
     */
    onKeyDown: _propTypes.default.func,

    /**
     * Called when mouse clicks down on the trigger input.
     */
    onMouseDown: _propTypes.default.func,

    /**
     * The ref of the actual triggering input.
     */
    triggerRef: _propTypes.default.func,

    /**
     * Date
     */
    value: _propTypes.default.string
  }
});
var _default = TimepickerDropdownTrigger;
exports.default = _default;