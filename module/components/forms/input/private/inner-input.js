function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../../../../components/spinner';
var propTypes = {
  'aria-activedescendant': PropTypes.string,
  'aria-autocomplete': PropTypes.string,

  /**
   * An HTML ID that is shared with ARIA-supported devices with the
   * `aria-controls` attribute in order to relate the input with
   * another region of the page. An example would be a select box
   * that shows or hides a panel.
   */
  'aria-controls': PropTypes.string,
  'aria-describedby': PropTypes.string,
  'aria-expanded': PropTypes.bool,
  'aria-haspopup': PropTypes.bool,
  'aria-labelledby': PropTypes.string,

  /**
   * An HTML ID that is shared with ARIA-supported devices with the
   * `aria-controls` attribute in order to relate the input with
   * another region of the page. An example would be a search field
   * that shows search results.
   */
  'aria-owns': PropTypes.string,
  'aria-required': PropTypes.bool,

  /**
   * Disabled brower's autocomplete when "off" is used.
   */
  autoComplete: PropTypes.string,

  /**
   * Class names to be added to the `input` element.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Class names to be added to the outer container `div` of the input.
   */
  containerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Props to be added to the outer container `div` of the input (excluding `containerClassName`).
   */
  containerProps: PropTypes.object,

  /**
   * Disables the input and prevents editing the contents.
   */
  disabled: PropTypes.bool,

  /**
   * Displays text or node to the left of the input. This follows the fixed text input UX pattern.
   */
  fixedTextLeft: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * Displays text or node to the right of the input. This follows the fixed text input UX pattern.
   */
  fixedTextRight: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * If true, loading spinner appears inside input on right hand side.
   */
  hasSpinner: PropTypes.bool,

  /**
   * Left aligned icon, must be instance of `design-system-react/components/icon/input-icon`
   */
  iconLeft: PropTypes.node,

  /**
   * Right aligned icon, must be instance of `design-system-react/components/icon/input-icon`
   */
  iconRight: PropTypes.node,

  /**
   * Every input must have a unique ID in order to support keyboard navigation and ARIA support.
   */
  id: PropTypes.string.isRequired,

  /**
   * This callback exposes the input reference / DOM node to parent components. `<Parent inputRef={(inputComponent) => this.input = inputComponent} />
   */
  inputRef: PropTypes.func,

  /**
   * Displays the value of the input statically. This follows the static input UX pattern.
   */
  isStatic: PropTypes.bool,

  /**
   * This label appears above the input.
   */
  label: PropTypes.string,
  onBlur: PropTypes.func,

  /**
   * This callback fires when the input changes. The synthetic React event will be the first parameter to the callback. You will probably want to reference `event.target.value` in your callback. No custom data object is provided.
   */
  onChange: PropTypes.func,

  /**
   * This event fires when the input is clicked.
   */
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onInvalid: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onSelect: PropTypes.func,
  onSubmit: PropTypes.func,

  /**
   * Text that will appear in an empty input.
   */
  placeholder: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,

  /**
   * Name of the submitted form parameter.
   */
  name: PropTypes.string,

  /**
   * Specifies `readOnly` for `input` node.
   */
  readOnly: PropTypes.bool,

  /**
   * Highlights the input as a required field (does not perform any validation).
   */
  required: PropTypes.bool,

  /**
   * `role` to be added to `input` node
   */
  role: PropTypes.string,

  /**
   * Assistive text on the spinner
   */
  spinnerAssistiveText: PropTypes.string,

  /**
   * Style object to be added to `input` node
   */
  style: PropTypes.object,

  /**
   * Specifies `tabIndex` for `input` node
   */
  tabIndex: PropTypes.string,

  /**
   * The `<Input>` element includes support for all HTML5 types.
   */
  type: PropTypes.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),

  /**
   * The input is a controlled component, and will always display this value.
   */
  value: PropTypes.string,

  /**
   * This is the initial value of an uncontrolled form element and is present only to provide
   * compatibility with hybrid framework applications that are not entirely React. It should only
   * be used in an application without centralized state (Redux, Flux). "Controlled components"
   * with centralized state is highly recommended.
   * See [Code Overview](https://github.com/salesforce/design-system-react/blob/master/docs/codebase-overview.md#controlled-and-uncontrolled-components) for more information.
   */
  defaultValue: PropTypes.string
};
var defaultProps = {
  spinnerAssistiveText: 'Loading ...',
  type: 'text'
};
/*
 * This component was created to allow the DIV wrapped input to be used within other components such as combobox. This components API is not public.
 */

var InnerInput = function InnerInput(props) {
  var _props$containerProps = props.containerProps,
      containerClassName = _props$containerProps.className,
      containerProps = _objectWithoutProperties(_props$containerProps, ["className"]);

  return React.createElement("div", _extends({
    className: classNames(containerClassName, {
      'slds-input-has-icon': props.iconLeft || props.iconRight,
      'slds-input-has-icon_left': props.iconLeft && !props.iconRight,
      'slds-input-has-icon_right': !props.iconLeft && props.iconRight,
      'slds-input-has-icon_left-right': props.iconLeft && props.iconRight,
      'slds-input-has-fixed-addon': props.fixedTextLeft || props.fixedTextRight,
      'slds-has-divider--bottom': props.isStatic
    })
  }, containerProps), props.iconLeft && props.iconLeft, props.fixedTextLeft && React.createElement("span", {
    className: "slds-form-element__addon"
  }, props.fixedTextLeft), !props.isStatic && React.createElement("input", {
    "aria-activedescendant": props['aria-activedescendant'],
    "aria-autocomplete": props['aria-autocomplete'],
    "aria-controls": props['aria-controls'],
    "aria-labelledby": props['aria-labelledby'],
    "aria-describedby": props.hasSpinner ? "loading-status-icon ".concat(props['aria-describedby']) : props['aria-describedby'],
    "aria-expanded": props['aria-expanded'],
    "aria-owns": props['aria-owns'],
    "aria-required": props['aria-required'],
    autoComplete: props.autoComplete,
    className: classNames('slds-input', props.className),
    disabled: props.disabled,
    id: props.id,
    minLength: props.minLength,
    maxLength: props.maxLength,
    name: props.name,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onClick: props.onClick,
    onFocus: props.onFocus,
    onInput: props.onInput,
    onInvalid: props.onInvalid,
    onKeyDown: props.onKeyDown,
    onKeyPress: props.onKeyPress,
    onKeyUp: props.onKeyUp,
    onSelect: props.onSelect,
    onSubmit: props.onSubmit,
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    ref: props.inputRef,
    required: props.required,
    role: props.role,
    style: props.style,
    tabIndex: props.tabIndex,
    type: props.type,
    value: props.value,
    defaultValue: props.defaultValue
  }), props.hasSpinner ? React.createElement("div", {
    className: "slds-input__icon-group slds-input__icon-group_right"
  }, props.hasSpinner && React.createElement(Spinner, {
    assistiveText: props.spinnerAssistiveText,
    id: "loading-status-icon",
    isInput: true,
    size: "x-small",
    variant: "brand"
  }), props.iconRight && props.iconRight) : props.iconRight && props.iconRight, props.fixedTextRight && React.createElement("span", {
    className: "slds-form-element__addon"
  }, props.fixedTextRight), props.isStatic && React.createElement("span", {
    className: "slds-form-element__static slds-grid slds-grid_align-spread",
    onClick: props.onClick
  }, props.value, props.inlineEditTrigger));
};

InnerInput.displayName = 'SLDSInnerInput';
InnerInput.propTypes = propTypes;
InnerInput.defaultProps = defaultProps;
export default InnerInput;
//# sourceMappingURL=inner-input.js.map