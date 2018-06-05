function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import Combobox from "../../../../../components/combobox";
import Icon from "../../../../../components/icon";
import escapeRegExp from 'lodash.escaperegexp';
import IconSettings from "../../../../../components/icon-settings";
var accounts = [{
  id: '1',
  label: 'Acme',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '2',
  label: 'Salesforce.com, Inc.',
  subTitle: 'Account • San Francisco',
  type: 'account'
}];
var accountsWithIcon = accounts.map(function (elem) {
  return Object.assign(elem, {
    icon: React.createElement(Icon, {
      assistiveText: "Account",
      category: "standard",
      name: elem.type
    })
  });
});

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.state = {
      inputValue: '',
      selection: []
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Combobox, {
        id: "combobox-unique-id",
        isOpen: true,
        labels: {
          placeholder: 'Search Salesforce'
        },
        menuPosition: "relative",
        onChange: function onChange(event, _ref) {
          var value = _ref.value;
          console.log('onChange', value);

          _this2.setState({
            inputValue: value
          });
        },
        onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
          _this2.setState({
            inputValue: '',
            selection: []
          });
        },
        onSubmit: function onSubmit(event, _ref2) {
          var value = _ref2.value;
          console.log('onSubmit', value);

          _this2.setState({
            selection: [{
              label: value,
              icon: React.createElement(Icon, {
                assistiveText: "Account",
                category: "standard",
                name: "account"
              })
            }]
          });
        },
        onSelect: function onSelect(event, data) {
          console.log('onSelect', data);

          _this2.setState({
            selection: data.selection
          });
        },
        options: accountsWithIcon,
        selection: this.state.selection,
        value: this.state.selectedOption ? this.state.selectedOption.label : this.state.inputValue
      }));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ComboboxExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base-open.js.map