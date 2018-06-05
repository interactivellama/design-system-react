function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Button design pattern](https://lightningdesignsystem.com/components/buttons/) in React.
// Based on SLDS v2.2.1
import React from 'react';
import createReactClass from 'create-react-class';
import requiredIf from 'react-required-if';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../icon/button-icon';
import checkProps from './check-props';
import PopoverTooltip from '../popover-tooltip';
import { BUTTON } from '../../utilities/constants';
/**
 * The Button component is the Lightning Design System Button component. The Button should be used for label buttons, icon buttons, or buttons that have both labels and icons.
 * Either a <code>label</code> or <code>assistiveText</code> is required; see the Prop Details table below.
 * For buttons that maintain selected/unselected states, use the <a href="#/button-stateful">ButtonStateful</a> component.
 */

var Button = createReactClass({
  displayName: BUTTON,
  propTypes: {
    /**
     * Used if the Button triggers a tooltip. The value should match the `id` of the element with `role="tooltip"`.
     */
    'aria-describedby': PropTypes.string,

    /**
     * Establishes a relationship between an interactive parent element and a child element to indicate which child element a parent element affects. Frequently used in cases where buttons or tabs are associated with exposing expandable regions.
     */
    'aria-controls': PropTypes.string,

    /**
     * Used if the Button triggers a menu or popup. Bool indicates if the menu or popup is open or closed.
     */
    'aria-expanded': PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /**
     * True if Button triggers a menu or popup to open/close.
     */
    'aria-haspopup': PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /**
     * Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means.
     * If the button has an icon and a visible label, you can omit the <code>assistiveText</code> prop and use the <code>label</code> prop.
     */
    assistiveText: PropTypes.string,

    /**
     * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    buttonRef: PropTypes.func,

    /**
     * CSS classes to be added to button.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Disables the button and adds disabled styling.
     */
    disabled: PropTypes.bool,

    /**
     * Associates an icon button with another element on the page by changes the color of the SVG. Please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#hint">Lightning Design System Buttons > Hint</a>.
     */
    hint: PropTypes.bool,

    /**
     * Name of the icon category. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon categories.
     */
    iconCategory: requiredIf(PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']), function (props) {
      return !!props.iconName;
    }),

    /**
     * CSS classes to be added to icon.
     */
    iconClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
     */
    iconName: PropTypes.string,

    /**
     * Path to the icon. This will override any global icon settings.
     */
    iconPath: PropTypes.string,

    /**
     * If omitted, icon position is centered.
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * Determines the size of the icon.
     */
    iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

    /**
     * For icon variants, please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#icon">Lightning Design System Icons</a>.
     */
    iconVariant: PropTypes.oneOf(['bare', 'container', 'border', 'border-filled', 'more', 'global-header']),

    /**
     * Id string applied to button node.
     */
    id: PropTypes.string,

    /**
     * If true, button/icon is white. Meant for buttons or utility icons on dark backgrounds.
     */
    inverse: PropTypes.bool,

    /**
     * Visible label on the button. If the button is an icon button with no label, you must use the <code>assistiveText</code> prop.
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * Triggered when focus is removed.
     */
    onBlur: PropTypes.func,

    /**
     * Triggered when the button is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Triggered when component is focused.
     */
    onFocus: PropTypes.func,

    /**
     * Triggered when a key is pressed down
     */
    onKeyDown: PropTypes.func,

    /**
     * Triggered when a key is pressed and released
     */
    onKeyPress: PropTypes.func,

    /**
     * Triggered when a key is released
     */
    onKeyUp: PropTypes.func,

    /**
     * Triggered when a mouse button is pressed down
     */
    onMouseDown: PropTypes.func,

    /**
     * Triggered when a mouse arrow hovers
     */
    onMouseEnter: PropTypes.func,

    /**
     * Triggered when a mouse arrow no longer hovers
     */
    onMouseLeave: PropTypes.func,

    /**
     * If true, button scales to 100% width on small form factors.
     */
    responsive: PropTypes.bool,

    /**
     * Write <code>"-1"</code> if you don't want the user to tab to the button.
     */
    tabIndex: PropTypes.string,

    /**
     * Button type
     */
    type: PropTypes.oneOf(['reset', 'submit', 'button']),

    /**
     * HTML title attribute
     */
    title: PropTypes.string,

    /**
     * [Deprecated] Tooltip on button. Button should be a child of `Tooltip` instead.
     */
    tooltip: PropTypes.node,

    /**
     * Different types of buttons
     */
    variant: PropTypes.oneOf(['base', 'link', 'neutral', 'brand', 'destructive', 'success', 'icon'])
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      hint: false,
      iconSize: 'medium',
      responsive: false,
      type: 'button',
      variant: 'neutral'
    };
  },
  componentWillMount: function componentWillMount() {
    // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
    checkProps(BUTTON, this.props);
  },
  getClassName: function getClassName() {
    var _classNames;

    var isIcon = this.props.variant === 'icon';
    var iconVariant = this.props.iconVariant;
    var iconMore = iconVariant === 'more';
    var iconBorder = iconVariant === 'border';
    var iconGlobalHeader = iconVariant === 'global-header';
    var showButtonVariant = this.props.variant !== 'base' && !iconVariant && !this.props.inverse && this.props.variant !== 'link' || iconVariant === 'bare';
    var plainInverseBtn = this.props.inverse && !isIcon;
    var plainInverseIcon = this.props.inverse && isIcon && !iconMore && !iconBorder;
    var moreInverseIcon = this.props.inverse && iconMore;
    var borderInverseIcon = this.props.inverse && iconBorder; // After hijacking `iconVariant` to let `Button` know it's in the header, we reset to container style for the actual button CSS.

    if (iconVariant === 'global-header') {
      iconVariant = 'container';
    }

    return classNames((_classNames = {
      'slds-button': this.props.variant !== 'link'
    }, _defineProperty(_classNames, "slds-button--".concat(this.props.variant), showButtonVariant), _defineProperty(_classNames, 'slds-button--inverse', plainInverseBtn), _defineProperty(_classNames, 'slds-button--icon-inverse', plainInverseIcon || moreInverseIcon), _defineProperty(_classNames, 'slds-button--icon-border-inverse', borderInverseIcon), _defineProperty(_classNames, "slds-button--icon-".concat(iconVariant), iconVariant && !borderInverseIcon), _defineProperty(_classNames, 'slds-global-header__button--icon', iconGlobalHeader), _defineProperty(_classNames, "slds-button--icon-".concat(this.props.iconSize), iconVariant && this.props.iconSize !== 'medium'), _defineProperty(_classNames, 'slds-button--reset', this.props.variant === 'link'), _defineProperty(_classNames, 'slds-text-link', this.props.variant === 'link'), _classNames), this.props.className);
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  },
  renderIcon: function renderIcon(name) {
    var iconSize = this.props.iconSize === '' || this.props.iconVariant ? null : this.props.iconSize;
    return React.createElement(ButtonIcon, {
      category: this.props.iconCategory || 'utility' // BREAKING CHANGE we will introduce in 1.0. For the moment, set default prop here if none specified.
      ,
      className: classNames({
        'slds-global-header__icon': this.props.iconVariant === 'global-header'
      }, this.props.iconClassName),
      hint: this.props.hint,
      inverse: this.props.inverse,
      name: name,
      path: this.props.iconPath,
      position: this.props.iconPosition,
      size: iconSize
    });
  },
  renderLabel: function renderLabel() {
    var iconOnly = this.props.iconName || this.props.iconPath;
    return iconOnly && this.props.assistiveText ? React.createElement("span", {
      className: "slds-assistive-text"
    }, this.props.assistiveText) : this.props.label;
  },
  renderButton: function renderButton() {
    var _this = this;

    return React.createElement("button", {
      "aria-controls": this.props['aria-controls'],
      "aria-describedby": this.props['aria-describedby'],
      "aria-expanded": this.props['aria-expanded'],
      "aria-haspopup": this.props['aria-haspopup'],
      className: this.getClassName(),
      disabled: this.props.disabled,
      id: this.props.id,
      onBlur: this.props.onBlur,
      onClick: this.handleClick,
      onFocus: this.props.onFocus,
      onKeyDown: this.props.onKeyDown,
      onKeyPress: this.props.onKeyPress,
      onKeyUp: this.props.onKeyUp,
      onMouseDown: this.props.onMouseDown,
      onMouseEnter: this.props.onMouseEnter,
      onMouseLeave: this.props.onMouseLeave,
      ref: function ref(component) {
        if (_this.props.buttonRef) {
          _this.props.buttonRef(component);
        }
      },
      tabIndex: this.props.tabIndex,
      title: this.props.title,
      type: this.props.type
    }, this.props.iconPosition === 'right' ? this.renderLabel() : null, this.props.iconName || this.props.iconPath ? this.renderIcon(this.props.iconName) : null, this.props.iconVariant === 'more' ? React.createElement(ButtonIcon, {
      category: "utility",
      name: "down",
      size: "x-small"
    }) : null, this.props.iconPosition === 'left' || !this.props.iconPosition ? this.renderLabel() : null, this.props.children // eslint-disable-line react/prop-types
    );
  },
  // This is present for backwards compatibility and should be removed at a future breaking change release. Please wrap a `Button` in a `PopoverTooltip` to achieve the same result. There will be an extra trigger `div` wrapping the `Button` though.
  renderTooltip: function renderTooltip() {
    return React.createElement(PopoverTooltip, {
      content: this.props.tooltip
    }, this.renderButton);
  },
  render: function render() {
    return this.props.tooltip ? this.renderTooltip() : this.renderButton();
  }
});
export default Button;
//# sourceMappingURL=index.js.map