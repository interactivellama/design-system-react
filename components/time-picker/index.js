"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.isdate"));

var _checkProps = _interopRequireDefault(require("./check-props"));

var _inputIcon = _interopRequireDefault(require("../icon/input-icon"));

var _menuDropdown = _interopRequireDefault(require("../menu-dropdown"));

var _dropdownTrigger = _interopRequireDefault(require("./private/dropdown-trigger"));

var _constants = require("../../utilities/constants");

var _docs = _interopRequireDefault(require("./docs.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var getOptions = function getOptions(_ref) {
  var props = _ref.props;
  var baseDate = new Date();
  var options = [];
  baseDate.setHours(0);
  baseDate.setMinutes(0);
  baseDate.setSeconds(0);
  baseDate.setMilliseconds(0);
  var curDate = new Date(baseDate);

  while (baseDate.getDate() === curDate.getDate()) {
    var formatted = props.formatter(curDate);
    options.push({
      label: formatted,
      value: new Date(curDate)
    });
    curDate.setMinutes(curDate.getMinutes() + props.stepInMinutes);
  }

  return options;
};
/**
 *  Component description.
 */


var Timepicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Timepicker, _React$Component);

  function Timepicker() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, Timepicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: _this.props.value,
        strValue: _this.props.strValue,
        options: getOptions({
          props: _this.props
        })
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "parseDate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(strValue) {
        var newDate = _this.props.parser(strValue);

        if ((0, _lodash.default)(newDate)) {
          if (!isNaN(newDate.getTime())) {
            return newDate;
          }
        }

        return new Date();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(date, strValue) {
        _this.setState({
          value: date,
          strValue: strValue
        });

        if (_this.props.onDateChange) {
          _this.props.onDateChange(date, strValue);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(val) {
        if (val && val.value) {
          _this.handleChange(val.value, val.label);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var strValue = event.target.value;

        _this.setState({
          strValue: strValue
        });

        if (_this.props.onDateChange) {
          var parsedDate = _this.props.parser(strValue);

          _this.props.onDateChange(parsedDate, strValue);
        }
      }
    }), _temp));
  }

  _createClass(Timepicker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      (0, _checkProps.default)(_constants.TIME_PICKER, this.props, _docs.default);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value && this.props.value) {
        var currentTime = this.props.value.getTime();
        var nextTime = nextProps.value.getTime();

        if (currentTime !== nextTime) {
          this.setState({
            value: nextProps.value,
            strValue: this.props.formatter(nextProps.value)
          });
        }
      }
    }
  }, {
    key: "render",
    // ### Render
    value: function render() {
      return _react.default.createElement(_menuDropdown.default, {
        checkmark: false,
        constrainToScrollParent: this.props.constrainToScrollParent,
        disabled: this.props.disabled,
        inheritTargetWidth: this.props.inheritTargetWidth,
        label: this.props.label,
        listItemRenderer: this.props.listItemRenderer // inline style override
        ,
        menuStyle: {
          maxHeight: '20em',
          overflowX: 'hidden',
          minWidth: '100%'
        },
        menuPosition: this.props.menuPosition,
        onSelect: this.handleSelect,
        options: this.state.options
      }, _react.default.createElement(_dropdownTrigger.default, {
        iconRight: _react.default.createElement(_inputIcon.default, {
          category: "utility",
          name: "clock"
        }),
        onChange: this.handleInputChange,
        placeholder: this.props.placeholder,
        required: this.props.required,
        type: "text",
        value: this.state.strValue
      }));
    }
  }]);

  return Timepicker;
}(_react.default.Component);

Object.defineProperty(Timepicker, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _constants.TIME_PICKER
});
Object.defineProperty(Timepicker, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    /**
     * If true, constrains the menu to the scroll parent. See `Dropdown`.
     */
    constrainToScrollParent: _propTypes.default.bool,

    /**
     * Disables the input and prevents editing the contents.
     */
    disabled: _propTypes.default.bool,

    /**
     * Time formatting function
     */
    formatter: _propTypes.default.func,

    /**
     * Sets the dialog width to the width of the target. Menus attached to `input` typically follow this UX pattern.
     */
    inheritTargetWidth: _propTypes.default.bool,

    /**
     * This label appears above the input.
     */
    label: _propTypes.default.string,

    /**
     * Custom element that overrides the default Menu Item component.
     */
    listItemRenderer: _propTypes.default.func,

    /**
     * Please select one of the following:
     * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
     * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
     * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
     */
    menuPosition: _propTypes.default.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

    /**
     * Receives the props `(dateValue, stringValue)`
     */
    onDateChange: _propTypes.default.func,

    /**
     * Parsing date string into Date
     */
    parser: _propTypes.default.func,

    /**
     * Text that will appear in an empty input.
     */
    placeholder: _propTypes.default.string,

    /**
     * If true, adds asterisk next to input label to indicate it is a required field.
     */
    required: _propTypes.default.bool,

    /**
     * Frequency of options
     */
    stepInMinutes: _propTypes.default.number,

    /**
     * Value for input that is parsed to create an internal state in the `date` format.
     */
    strValue: _propTypes.default.string,

    /**
     * Instance an internal state in the `date` format.
     */
    value: _propTypes.default.instanceOf(Date)
  }
});
Object.defineProperty(Timepicker, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    formatter: function formatter(date) {
      if (date) {
        return date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit'
        });
      }

      return null;
    },
    parser: function parser(timeStr) {
      var date = new Date();
      var dateStr = date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      return new Date("".concat(dateStr, " ").concat(timeStr));
    },
    menuPosition: 'absolute',
    placeholder: 'Pick Time',
    value: null,
    stepInMinutes: 30
  }
});
var _default = Timepicker;
exports.default = _default;