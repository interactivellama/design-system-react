"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconSettings = _interopRequireDefault(require("../../../../components/icon-settings"));

var _globalNavigationBar = _interopRequireDefault(require("../../../../components/global-navigation-bar"));

var _region = _interopRequireDefault(require("../../../../components/global-navigation-bar/region"));

var _dropdown = _interopRequireDefault(require("../../../../components/global-navigation-bar/dropdown"));

var _link = _interopRequireDefault(require("../../../../components/global-navigation-bar/link"));

var _button = _interopRequireDefault(require("../../../../components/button"));

var _icon = _interopRequireDefault(require("../../../../components/icon"));

var _appLauncher = _interopRequireDefault(require("../../../../components/app-launcher"));

var _section = _interopRequireDefault(require("../../../../components/app-launcher/section"));

var _tile = _interopRequireDefault(require("../../../../components/app-launcher/tile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var dropdownCollection = [{
        label: 'Menu Item One',
        value: '1',
        iconCategory: 'utility',
        iconName: 'table',
        href: 'http://www.google.com'
      }, {
        label: 'Menu Item Two',
        value: '2',
        iconCategory: 'utility',
        iconName: 'kanban',
        href: 'http://www.google.com'
      }, {
        label: 'Menu Item Three',
        value: '3',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com'
      }];
      return _react.default.createElement(_iconSettings.default, {
        iconPath: "/assets/icons"
      }, _react.default.createElement(_globalNavigationBar.default, null, _react.default.createElement(_region.default, {
        region: "primary"
      }, _react.default.createElement(_appLauncher.default, {
        triggerName: "App Name",
        onSearch: function onSearch() {
          console.log('Search term:', event.target.value);
        },
        modalHeaderButton: _react.default.createElement(_button.default, {
          label: "App Exchange"
        })
      }, _react.default.createElement(_section.default, {
        title: "Tile Section"
      }, _react.default.createElement(_tile.default, {
        title: "Marketing Cloud",
        iconText: "MC",
        description: "Send emails, track emails, read emails! Emails!"
      }), _react.default.createElement(_tile.default, {
        title: "Call Center",
        description: "The key to call center and contact center is not to use too many words!",
        descriptionHeading: "Call Center",
        iconText: "CC"
      })), _react.default.createElement(_section.default, {
        title: "Small Tile Section"
      }, _react.default.createElement(_tile.default, {
        title: "Journey Builder",
        iconText: "JB",
        size: "small"
      }), _react.default.createElement(_tile.default, {
        title: "Sales Cloud",
        iconNode: _react.default.createElement(_icon.default, {
          name: "campaign",
          category: "standard",
          size: "large"
        }),
        size: "small"
      })))), _react.default.createElement(_region.default, {
        region: "secondary",
        navigation: true
      }, _react.default.createElement(_link.default, {
        href: "javascript:void(0);",
        label: "Home",
        id: "home-link"
      }), _react.default.createElement(_dropdown.default, {
        id: "primaryDropdown",
        assistiveText: {
          icon: 'Context Menu Item 1'
        },
        label: "Context Menu Item",
        options: dropdownCollection
      }), _react.default.createElement(_link.default, {
        href: "javascript:void(0);",
        label: "Context Menu Item 2",
        active: true
      })), _react.default.createElement(_region.default, {
        region: "tertiary"
      }, _react.default.createElement(_link.default, {
        href: "javascript:void(0);",
        label: "Actions"
      }))));
    }
  }]);

  return Example;
}(_react.default.Component);

Object.defineProperty(Example, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'GlobalNavigationBarExample'
});
var _default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime

exports.default = _default;