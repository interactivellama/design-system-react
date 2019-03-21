"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../../icon"));

var _event = _interopRequireDefault(require("../../../utilities/event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var displayName = 'Lookup-Menu-Item';
var propTypes = {
  data: _propTypes.default.object,
  handleItemFocus: _propTypes.default.func,
  href: _propTypes.default.string,
  iconCategory: _propTypes.default.string,
  id: _propTypes.default.string,
  index: _propTypes.default.number,
  isActive: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  listItemLabelRenderer: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  searchTerm: _propTypes.default.string,
  setFocus: _propTypes.default.func
};

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.onSelect(_this.props.id, _this.props.data);
      }
    }), _temp));
  }

  _createClass(Item, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isActive !== this.props.isActive && nextProps.isActive === true) {
        this.scrollFocus();
        this.props.setFocus(this.props.id);
      }
    }
  }, {
    key: "getCustomLabel",
    value: function getCustomLabel() {
      var ListItemLabel = this.props.listItemLabelRenderer;
      return _react.default.createElement(ListItemLabel, this.props);
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      if (this.props.iconName && !this.props.listItemLabelRenderer) {
        return _react.default.createElement("span", {
          className: "slds-media__figure"
        }, _react.default.createElement(_icon.default, {
          category: this.props.iconCategory,
          inverse: this.props.iconInverse,
          key: this.props.iconName,
          name: this.props.iconName,
          size: "small"
        }));
      }

      return null;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      var label;

      if (this.props.children.data.subTitle) {
        label = _react.default.createElement("div", {
          className: "slds-media__body"
        }, _react.default.createElement("div", {
          className: "slds-lookup__result-text"
        }, this.props.children.label), _react.default.createElement("span", {
          className: "slds-lookup__result-meta slds-text-body_small"
        }, this.props.children.data.subTitle));
      } else {
        var labelClassName = (0, _classnames.default)('slds-lookup__result-text', {
          'slds-m-left_x-small': !this.props.iconName
        });
        label = _react.default.createElement("div", {
          className: "slds-media__body"
        }, _react.default.createElement("div", {
          className: labelClassName
        }, this.props.children.label));
      }

      return label;
    }
  }, {
    key: "scrollFocus",
    // Scroll menu item based on up/down mouse keys (assumes all items are the same height)
    value: function scrollFocus() {
      var height = this.itemRef.offsetHeight;

      if (height && this.props.handleItemFocus) {
        this.props.handleItemFocus(this.props.index, height);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var itemClassName = 'js-slds-lookup__item';
      var id = this.props.id;
      if (this.props.isActive) itemClassName += ' slds-theme_shade';
      return (// IMPORTANT: anchor id is used to set lookup's input's aria-activedescendant
        _react.default.createElement("li", {
          className: itemClassName,
          ref: function ref(li) {
            _this2.itemRef = li;
          }
        }, _react.default.createElement("a", {
          "aria-disabled": this.props.isDisabled,
          className: "slds-lookup__item-action slds-media slds-media_center",
          href: this.props.href,
          id: id,
          onClick: this.handleClick,
          onMouseDown: _event.default.trapImmediate,
          ref: id,
          role: "option",
          tabIndex: "-1"
        }, this.getIcon(), this.props.listItemLabelRenderer ? this.getCustomLabel() : this.getLabel()))
      );
    }
  }]);

  return Item;
}(_react.default.Component);

Item.displayName = displayName;
Item.propTypes = propTypes;
var _default = Item;
exports.default = _default;