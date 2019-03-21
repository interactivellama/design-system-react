"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _constants = require("../../../utilities/constants");

var _appLauncher = _interopRequireDefault(require("../../app-launcher"));

var _tile = _interopRequireDefault(require("../../app-launcher/tile"));

var _section = _interopRequireDefault(require("../../app-launcher/section"));

var _icon = _interopRequireDefault(require("../../icon"));

var _button = _interopRequireDefault(require("../../button"));

var _search = _interopRequireDefault(require("../../input/search"));

var _globalNavigationBar = _interopRequireDefault(require("../../global-navigation-bar"));

var _region = _interopRequireDefault(require("../../global-navigation-bar/region"));

var _iconSettings = _interopRequireDefault(require("../../icon-settings"));

var _SLDSSettings = _interopRequireDefault(require("../../SLDSSettings"));

var _default = _interopRequireDefault(require("../__examples__/default"));

var _executionEnvironment = require("../../../utilities/execution-environment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// used by Modal component
if (_executionEnvironment.canUseDOM && document.querySelector('#root')) {
  _SLDSSettings.default.setAppElement('#root');
} else {
  _SLDSSettings.default.setAppElement(document.createElement('div'));
}

var standardTileDemoStyles = {
  width: '20rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem'
};
var smallTileDemoStyles = {
  width: '6rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem'
};

var DemoAppLauncherTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoAppLauncherTile, _React$Component);

  function DemoAppLauncherTile() {
    _classCallCheck(this, DemoAppLauncherTile);

    return _possibleConstructorReturn(this, (DemoAppLauncherTile.__proto__ || Object.getPrototypeOf(DemoAppLauncherTile)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTile, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_tile.default, {
        title: "Marketing Cloud",
        iconText: "MC",
        description: "Send emails, track emails, read emails! Emails!",
        href: "https://www.marketingcloud.com/",
        onClick: (0, _addonActions.action)('Tile clicked! Actual href should be ignored'),
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTile;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTile, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTile'
});
Object.defineProperty(DemoAppLauncherTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});

var DemoAppLauncherSmallTile =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DemoAppLauncherSmallTile, _React$Component2);

  function DemoAppLauncherSmallTile() {
    _classCallCheck(this, DemoAppLauncherSmallTile);

    return _possibleConstructorReturn(this, (DemoAppLauncherSmallTile.__proto__ || Object.getPrototypeOf(DemoAppLauncherSmallTile)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherSmallTile, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_tile.default, {
        title: "Journey Builder",
        iconText: "JB",
        size: "small",
        onClick: (0, _addonActions.action)('Tiny tile clicked!')
      });
    }
  }]);

  return DemoAppLauncherSmallTile;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherSmallTile, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherSmallTile'
});

var DemoAppLauncherTileWithIconNode =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(DemoAppLauncherTileWithIconNode, _React$Component3);

  function DemoAppLauncherTileWithIconNode() {
    _classCallCheck(this, DemoAppLauncherTileWithIconNode);

    return _possibleConstructorReturn(this, (DemoAppLauncherTileWithIconNode.__proto__ || Object.getPrototypeOf(DemoAppLauncherTileWithIconNode)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTileWithIconNode, [{
    key: "render",
    value: function render() {
      var icon = _react.default.createElement(_icon.default, {
        name: "campaign",
        category: "standard",
        size: "large"
      });

      return _react.default.createElement(_tile.default, {
        title: "Sales Cloud",
        description: "The primary internal Salesforce org.",
        href: "https://www.salesforce.com/",
        iconNode: icon,
        onClick: (0, _addonActions.action)('Tile with icon node clicked!'),
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTileWithIconNode;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTileWithIconNode, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTileWithIconNode'
});
Object.defineProperty(DemoAppLauncherTileWithIconNode, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});

var DemoAppLauncherTileWithIconText =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(DemoAppLauncherTileWithIconText, _React$Component4);

  function DemoAppLauncherTileWithIconText() {
    _classCallCheck(this, DemoAppLauncherTileWithIconText);

    return _possibleConstructorReturn(this, (DemoAppLauncherTileWithIconText.__proto__ || Object.getPrototypeOf(DemoAppLauncherTileWithIconText)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTileWithIconText, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_tile.default, {
        title: "Sales Cloud",
        description: "The primary internal Salesforce org.",
        iconText: "SC",
        onClick: (0, _addonActions.action)('Tile with icon text clicked!'),
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTileWithIconText;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTileWithIconText, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTileWithIconText'
});
Object.defineProperty(DemoAppLauncherTileWithIconText, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});

var DemoAppLauncherTileWithTruncatedText =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(DemoAppLauncherTileWithTruncatedText, _React$Component5);

  function DemoAppLauncherTileWithTruncatedText() {
    _classCallCheck(this, DemoAppLauncherTileWithTruncatedText);

    return _possibleConstructorReturn(this, (DemoAppLauncherTileWithTruncatedText.__proto__ || Object.getPrototypeOf(DemoAppLauncherTileWithTruncatedText)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTileWithTruncatedText, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_tile.default, {
        title: "Call Center",
        description: "The key to call center and contact center is not to use too many words!",
        iconText: "CC",
        onClick: (0, _addonActions.action)('Tile with icon text clicked!'),
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTileWithTruncatedText;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTileWithTruncatedText, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTileWithTruncatedText'
});
Object.defineProperty(DemoAppLauncherTileWithTruncatedText, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});

var DemoAppLauncherTileWithDescriptionHeading =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(DemoAppLauncherTileWithDescriptionHeading, _React$Component6);

  function DemoAppLauncherTileWithDescriptionHeading() {
    _classCallCheck(this, DemoAppLauncherTileWithDescriptionHeading);

    return _possibleConstructorReturn(this, (DemoAppLauncherTileWithDescriptionHeading.__proto__ || Object.getPrototypeOf(DemoAppLauncherTileWithDescriptionHeading)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTileWithDescriptionHeading, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_tile.default, {
        title: "Journey Builder",
        description: "Build 1:1 journeys blah blah blah and use way too many words",
        descriptionHeading: "Journey Builder",
        iconText: "SC",
        onClick: (0, _addonActions.action)('Tile with description heading clicked!'),
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTileWithDescriptionHeading;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTileWithDescriptionHeading, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTileWithDescriptionHeading'
});
Object.defineProperty(DemoAppLauncherTileWithDescriptionHeading, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});
Object.defineProperty(DemoAppLauncherTileWithDescriptionHeading, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: 'journey'
  }
});

var DemoAppLauncherTileWithSearchText =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(DemoAppLauncherTileWithSearchText, _React$Component7);

  function DemoAppLauncherTileWithSearchText() {
    _classCallCheck(this, DemoAppLauncherTileWithSearchText);

    return _possibleConstructorReturn(this, (DemoAppLauncherTileWithSearchText.__proto__ || Object.getPrototypeOf(DemoAppLauncherTileWithSearchText)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherTileWithSearchText, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(DemoAppLauncherTileWithTruncatedText, {
        search: this.props.search,
        size: this.props.size
      });
    }
  }]);

  return DemoAppLauncherTileWithSearchText;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherTileWithSearchText, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherTileWithSearchText'
});
Object.defineProperty(DemoAppLauncherTileWithSearchText, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: _propTypes.default.string,
    size: _propTypes.default.string
  }
});
Object.defineProperty(DemoAppLauncherTileWithSearchText, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    search: 'Call'
  }
});

var DemoAppLauncherSection =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(DemoAppLauncherSection, _React$Component8);

  function DemoAppLauncherSection() {
    _classCallCheck(this, DemoAppLauncherSection);

    return _possibleConstructorReturn(this, (DemoAppLauncherSection.__proto__ || Object.getPrototypeOf(DemoAppLauncherSection)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherSection, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_section.default, {
        assistiveText: {
          collapseSection: 'Collapse Section'
        },
        title: "All Items",
        toggleable: true,
        onToggleClick: (0, _addonActions.action)('Section `All Items` open -->')
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconText, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null)), _react.default.createElement(_section.default, {
        title: "All Apps",
        onToggleClick: (0, _addonActions.action)('Section `All App` open -->')
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null)));
    }
  }]);

  return DemoAppLauncherSection;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherSection, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherSection'
});

var DemoAppLauncherSectionWithSmallTiles =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(DemoAppLauncherSectionWithSmallTiles, _React$Component9);

  function DemoAppLauncherSectionWithSmallTiles() {
    _classCallCheck(this, DemoAppLauncherSectionWithSmallTiles);

    return _possibleConstructorReturn(this, (DemoAppLauncherSectionWithSmallTiles.__proto__ || Object.getPrototypeOf(DemoAppLauncherSectionWithSmallTiles)).apply(this, arguments));
  }

  _createClass(DemoAppLauncherSectionWithSmallTiles, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_section.default, {
        title: "All Items",
        onToggleClick: (0, _addonActions.action)('Section `All Items` open -->')
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconText, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null)), _react.default.createElement(_section.default, {
        title: "All Apps",
        onToggleClick: (0, _addonActions.action)('Section `All App` open -->')
      }, _react.default.createElement(DemoAppLauncherTile, {
        size: "small"
      }), _react.default.createElement(DemoAppLauncherTileWithIconNode, {
        size: "small"
      })));
    }
  }]);

  return DemoAppLauncherSectionWithSmallTiles;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherSectionWithSmallTiles, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherSectionWithSmallTiles'
});

var DemoAppLauncher =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(DemoAppLauncher, _React$Component10);

  function DemoAppLauncher() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DemoAppLauncher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DemoAppLauncher.__proto__ || Object.getPrototypeOf(DemoAppLauncher)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        search: '',
        appLauncherOpen: _this.props.isOpen || false,
        // eslint-disable-line react/prop-types
        allItemsSectionIsOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClear", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          search: ''
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          search: event.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleAppLauncher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          appLauncherOpen: !_this.state.appLauncherOpen
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleSection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          allItemsSectionIsOpen: !_this.state.allItemsSectionIsOpen
        });
      }
    }), _temp));
  }

  _createClass(DemoAppLauncher, [{
    key: "render",
    value: function render() {
      var search = _react.default.createElement(_search.default, {
        clearable: this.state.search !== '',
        onChange: this.onSearch,
        onClear: this.onClear,
        placeholder: "Find an app",
        assistiveText: {
          label: 'Find an app'
        },
        value: this.state.search
      });

      var modalHeaderButton = _react.default.createElement(_button.default, {
        label: "App Exchange",
        onClick: (0, _addonActions.action)('Modal Button clicked!')
      });

      return _react.default.createElement(_globalNavigationBar.default, null, _react.default.createElement(_region.default, {
        region: "primary"
      }, _react.default.createElement(_appLauncher.default, {
        assistiveText: {
          trigger: 'Open App Launcher'
        },
        triggerName: "App Name",
        search: search,
        modalClassName: "custom-modal-class",
        modalHeaderButton: modalHeaderButton,
        isOpen: this.state.appLauncherOpen,
        triggerOnClick: this.toggleAppLauncher,
        onClose: this.toggleAppLauncher
      }, _react.default.createElement(_section.default, {
        toggleable: true,
        title: "All Items",
        isOpen: this.state.allItemsSectionIsOpen,
        onToggleClick: this.toggleSection
      }, _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconNode, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconText, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconNode, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconText, {
        search: this.state.search
      })), _react.default.createElement(_section.default, {
        title: "All Apps",
        toggleable: true
      }, _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithDescriptionHeading, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithDescriptionHeading, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithDescriptionHeading, {
        search: this.state.search
      })))));
    }
  }]);

  return DemoAppLauncher;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncher, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncher'
});

var DemoAppLauncherNoHeaderButton =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(DemoAppLauncherNoHeaderButton, _React$Component11);

  function DemoAppLauncherNoHeaderButton() {
    var _ref2;

    var _temp2, _this2;

    _classCallCheck(this, DemoAppLauncherNoHeaderButton);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_ref2 = DemoAppLauncherNoHeaderButton.__proto__ || Object.getPrototypeOf(DemoAppLauncherNoHeaderButton)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this2), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        search: '',
        appLauncherOpen: false,
        allItemsSectionIsOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this2), "onSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this2.setState({
          search: event.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this2), "toggleAppLauncher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this2.setState({
          appLauncherOpen: !_this2.state.appLauncherOpen
        });
      }
    }), _temp2));
  }

  _createClass(DemoAppLauncherNoHeaderButton, [{
    key: "render",
    value: function render() {
      var search = _react.default.createElement(_search.default, {
        onChange: this.onSearch,
        placeholder: "Find an app",
        assistiveText: {
          label: 'Find an app'
        }
      });

      return _react.default.createElement(_globalNavigationBar.default, null, _react.default.createElement(_region.default, {
        region: "primary"
      }, _react.default.createElement(_appLauncher.default, {
        triggerName: "App Name",
        search: search,
        isOpen: this.state.appLauncherOpen,
        triggerOnClick: this.toggleAppLauncher,
        onClose: this.toggleAppLauncher
      }, _react.default.createElement(_section.default, {
        toggleable: true,
        title: "All Items"
      }, _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconNode, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithIconText, {
        search: this.state.search
      })), _react.default.createElement(_section.default, {
        title: "All Apps",
        toggleable: true
      }, _react.default.createElement(DemoAppLauncherTile, {
        search: this.state.search
      }), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, {
        search: this.state.search
      })))));
    }
  }]);

  return DemoAppLauncherNoHeaderButton;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherNoHeaderButton, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherNoHeaderButton'
});

var DemoAppLauncherNoSearch =
/*#__PURE__*/
function (_React$Component12) {
  _inherits(DemoAppLauncherNoSearch, _React$Component12);

  function DemoAppLauncherNoSearch() {
    var _ref3;

    var _temp3, _this3;

    _classCallCheck(this, DemoAppLauncherNoSearch);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this3, (_temp3 = _this3 = _possibleConstructorReturn(this, (_ref3 = DemoAppLauncherNoSearch.__proto__ || Object.getPrototypeOf(DemoAppLauncherNoSearch)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this3), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        appLauncherOpen: false,
        allItemsSectionIsOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this3), "toggleAppLauncher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this3.setState({
          appLauncherOpen: !_this3.state.appLauncherOpen
        });
      }
    }), _temp3));
  }

  _createClass(DemoAppLauncherNoSearch, [{
    key: "render",
    value: function render() {
      var modalHeaderButton = _react.default.createElement(_button.default, {
        label: "App Exchange",
        onclick: (0, _addonActions.action)('Modal Button clicked!')
      });

      return _react.default.createElement(_globalNavigationBar.default, null, _react.default.createElement(_region.default, {
        region: "primary"
      }, _react.default.createElement(_appLauncher.default, {
        triggerName: "App Name",
        modalHeaderButton: modalHeaderButton,
        isOpen: this.state.appLauncherOpen,
        triggerOnClick: this.toggleAppLauncher,
        onClose: this.toggleAppLauncher
      }, _react.default.createElement(_section.default, {
        toggleable: true,
        title: "All Items"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithIconText, null)), _react.default.createElement(_section.default, {
        title: "All Apps",
        toggleable: true
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)))));
    }
  }]);

  return DemoAppLauncherNoSearch;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherNoSearch, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherNoSearch'
});

var DemoAppLauncherWithSeveralSections =
/*#__PURE__*/
function (_React$Component13) {
  _inherits(DemoAppLauncherWithSeveralSections, _React$Component13);

  function DemoAppLauncherWithSeveralSections() {
    var _ref4;

    var _temp4, _this4;

    _classCallCheck(this, DemoAppLauncherWithSeveralSections);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _possibleConstructorReturn(_this4, (_temp4 = _this4 = _possibleConstructorReturn(this, (_ref4 = DemoAppLauncherWithSeveralSections.__proto__ || Object.getPrototypeOf(DemoAppLauncherWithSeveralSections)).call.apply(_ref4, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this4), "onSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {// stub
      }
    }), _temp4));
  }

  _createClass(DemoAppLauncherWithSeveralSections, [{
    key: "render",
    value: function render() {
      var search = _react.default.createElement(_search.default, {
        onChange: this.onSearch,
        placeholder: "Find an app",
        assistiveText: {
          label: 'Find an app'
        }
      });

      var modalHeaderButton = _react.default.createElement(_button.default, {
        label: "App Exchange",
        onclick: (0, _addonActions.action)('Modal Button clicked!')
      });

      return _react.default.createElement(_globalNavigationBar.default, null, _react.default.createElement(_region.default, {
        region: "primary"
      }, _react.default.createElement(_appLauncher.default, {
        triggerName: "App Name",
        search: search,
        modalHeaderButton: modalHeaderButton
      }, _react.default.createElement(_section.default, {
        title: "First Section"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)), _react.default.createElement(_section.default, {
        title: "Second Section"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)), _react.default.createElement(_section.default, {
        title: "Third Section"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)), _react.default.createElement(_section.default, {
        title: "Fourth Section"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)), _react.default.createElement(_section.default, {
        title: "Fifth Section"
      }, _react.default.createElement(DemoAppLauncherTile, null), _react.default.createElement(DemoAppLauncherTileWithIconNode, null), _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null)))));
    }
  }]);

  return DemoAppLauncherWithSeveralSections;
}(_react.default.Component);

Object.defineProperty(DemoAppLauncherWithSeveralSections, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DemoAppLauncherWithSeveralSections'
});
(0, _react2.storiesOf)(_constants.APP_LAUNCHER, module).addDecorator(function (getStory) {
  return _react.default.createElement("div", {
    className: "slds-p-around_medium"
  }, _react.default.createElement(_iconSettings.default, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('App Launcher (open)', function () {
  return _react.default.createElement(DemoAppLauncher, {
    isOpen: true
  });
}).add('App Launcher', function () {
  return _react.default.createElement(DemoAppLauncher, null);
}).add('App Launcher no header button', function () {
  return _react.default.createElement(DemoAppLauncherNoHeaderButton, null);
}).add('App Launcher no search', function () {
  return _react.default.createElement(DemoAppLauncherNoSearch, null);
}).add('App Launcher with several sections (no toggle)', function () {
  return _react.default.createElement(DemoAppLauncherWithSeveralSections, null);
}).add('Tile', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTile, null));
}).add('Small Tile', function () {
  return _react.default.createElement("div", {
    style: smallTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherSmallTile, null));
}).add('Tile with Icon node', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTileWithIconNode, null));
}).add('Tile with icon text', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTileWithIconText, null));
}).add('Tile with search text', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTileWithSearchText, null));
}).add('Tile with truncated text', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTileWithTruncatedText, null));
}).add('Tile with description heading', function () {
  return _react.default.createElement("div", {
    style: standardTileDemoStyles
  }, _react.default.createElement(DemoAppLauncherTileWithDescriptionHeading, null));
}).add('Section', function () {
  return _react.default.createElement(DemoAppLauncherSection, null);
}).add('Section with small tiles', function () {
  return _react.default.createElement(DemoAppLauncherSectionWithSmallTiles, null);
}).add('Doc site example', function () {
  return _react.default.createElement(_default.default, null);
});