"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var displayName = 'PageHeaderTitle';
var propTypes = {
  /**
   * Sets whether the title will truncate its content responsively.
   */
  truncate: _propTypes.default.bool,

  /**
   * Sets the vertical alignment on the title
   */
  align: _propTypes.default.oneOf(['top', 'middle', 'bottom']),

  /**
   * The title string (required)
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Optional class name
   */
  className: _propTypes.default.string
};
var defaultProps = {
  truncate: true,
  align: 'middle',
  title: 'Page Header Title',
  className: ''
};

var Title =
/*#__PURE__*/
function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "_getClassNames",
    // eslint-disable-next-line class-methods-use-this
    value: function _getClassNames(truncate, align, className) {
      return (0, _classnames2.default)('slds-page-header__title slds-m-right_small', className, _defineProperty({
        'slds-truncate': truncate
      }, "slds-align-".concat(align), align));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          truncate = _props.truncate,
          align = _props.align,
          className = _props.className;

      var classes = this._getClassNames(truncate, align, className);

      return _react.default.createElement("h1", {
        className: classes,
        title: title
      }, title, children);
    }
  }]);

  return Title;
}(_react.Component);

Title.displayName = displayName;
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
var _default = Title;
exports.default = _default;