function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { RADIO } from '../../../utilities/constants';
var propTypes = {
  /**
   * The ID of an element that describes this radio input. Often used for error messages.
   */
  'aria-describedby': PropTypes.string,

  /**
   * This is a controlled component. This radio is checked according to this value.
   */
  checked: PropTypes.bool,

  /**
   * This is the initial value of an uncontrolled form element and is present only to provide compatibility
   * with hybrid framework applications that are not entirely React. It should only be used in an application
   * without centralized state (Redux, Flux). "Controlled components" with centralized state is highly recommended.
   * See [Code Overview](https://github.com/salesforce/design-system-react/blob/master/docs/codebase-overview.md#controlled-and-uncontrolled-components) for more information.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Disable this radio input.
   */
  disabled: PropTypes.bool,

  /**
   * A unique ID that is used to associating a label to the `input` element. This ID is added to the `input` element.
   */
  id: PropTypes.string,

  /**
   * The string or element that is shown as both the title and the label for this radio input.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /**
   * The name of the radio input group.
   */
  name: PropTypes.string,

  /**
   * This event fires when the radio selection changes.
   */
  onChange: PropTypes.func,

  /**
   * The value of this radio input.
   */
  value: PropTypes.string,

  /**
   * Variant of the Radio button. Base is the default and button-group makes the radio button look like a normal button (should be a child of <RadioButtonGroup>).
   */
  variant: PropTypes.oneOf(['base', 'button-group'])
};
var defaultProps = {
  variant: 'base'
};
/**
 * A radio input that can have a single input checked at any one time. Radios should be wrapped with
 * a [RadioGroup](/components/radio-group) or [RadioButtonGroup](/components/radio-button-group)
 */

var Radio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(Radio, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: classNames({
          'slds-radio': this.props.variant === 'base',
          'slds-button slds-radio_button': this.props.variant === 'button-group'
        })
      }, React.createElement("input", {
        type: "radio",
        id: this.getId(),
        name: this.props.name,
        value: this.props.value,
        checked: this.props.checked,
        defaultChecked: this.props.defaultChecked,
        onChange: this.props.onChange,
        "aria-describedby": this.props['aria-describedby'],
        disabled: this.props.disabled
      }), this.props.variant === 'button-group' ? React.createElement("label", {
        className: "slds-radio_button__label",
        htmlFor: this.getId()
      }, React.createElement("span", {
        className: "slds-radio_faux"
      }, this.props.label)) : React.createElement("label", {
        className: "slds-radio__label",
        htmlFor: this.getId()
      }, React.createElement("span", {
        className: "slds-radio_faux"
      }), React.createElement("span", {
        className: "slds-form-element__label"
      }, this.props.label)));
    }
  }]);

  return Radio;
}(React.Component);

Radio.displayName = RADIO;
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
export default Radio;
//# sourceMappingURL=index.js.map