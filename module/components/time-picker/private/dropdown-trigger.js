function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Timepicker Dropdown Trigger
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### Children

import Input from '../../forms/input'; // ### Event Helpers

import KEYS from '../../../utilities/key-code'; // ## Constants

import { MENU_DROPDOWN_TRIGGER } from '../../../utilities/constants';
/**
 *  Component description.
 */

var TimepickerDropdownTrigger = createReactClass({
  // ### Display Name
  // Always use the canonical component name (set in the core) as the React
  // display name.
  displayName: MENU_DROPDOWN_TRIGGER,
  // ### Prop Types
  propTypes: {
    /**
     * Icon for right side of trigger
     */
    iconRight: PropTypes.node,

    /**
     * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering input.
     */
    id: PropTypes.string,

    /**
     * This label appears above the input.
     */
    label: PropTypes.string,

    /**
     * The dropdown menu.
     */
    menu: PropTypes.node,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering input loses focus.
     */
    onBlur: PropTypes.func,

    /**
     * This prop is passed onto the triggering `Input`. Triggered when the trigger input is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Is only called when `openOn` is set to `hover` and when the triggering input gains focus.
     */
    onFocus: PropTypes.func,

    /**
     * Called when a key pressed.
     */
    onKeyDown: PropTypes.func,

    /**
     * Called when mouse clicks down on the trigger input.
     */
    onMouseDown: PropTypes.func,

    /**
     * The ref of the actual triggering input.
     */
    triggerRef: PropTypes.func,

    /**
     * Date
     */
    value: PropTypes.string
  },
  handleKeyDown: function handleKeyDown(event) {
    if (this.props.onKeyDown && event.keyCode) {
      if (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.DOWN || event.keyCode === KEYS.UP || event.keyCode === KEYS.ESCAPE) {
        this.props.onKeyDown(event);
      }
    }
  },
  // ### Render
  render: function render() {
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
      React.createElement("div", {
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyDown: this.handleKeyDown,
        onMouseDown: onMouseDown
      }, React.createElement(Input, _extends({
        iconRight: iconRight
      }, props, {
        inputRef: triggerRef
      }), menu))
    );
  }
});
export default TimepickerDropdownTrigger;
//# sourceMappingURL=dropdown-trigger.js.map