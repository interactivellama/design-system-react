/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Checkbox Component
// Implements the [Checkbox design pattern](https://www.lightningdesignsystem.com/components/forms/#checkbox) in React.
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### classNames

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // ### Event Helpers

import KEYS from '../../../utilities/key-code';
import EventUtil from '../../../utilities/event'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import { FORMS_CHECKBOX } from '../../../utilities/constants';
/**
 * The ability to style checkboxes with CSS varies across browsers. Using this component ensures checkboxes look the same everywhere.
 */

var Checkbox = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: FORMS_CHECKBOX,
  // ### Prop Types
  propTypes: {
    /**
     * An HTML ID that is shared with ARIA-supported devices with the
     * `aria-controls` attribute in order to relate the input with
     * another region of the page. An example would be a select box
     * that shows or hides a panel.
     */
    'aria-controls': PropTypes.string,

    /**
     * The `aria-describedby` attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them. This is very similar to aria-labelledby: a label describes the essence of an object, while a description provides more information that the user might need.
     */
    'aria-describedby': PropTypes.string,

    /**
     * `aria-owns` indicate that an element depends on the current one when the relation can't be determined by the hierarchy structure.
     */
    'aria-owns': PropTypes.string,

    /**
     * The `aria-required` attribute is used to indicate that user input is required on an element before a form can be submitted.
     */
    'aria-required': PropTypes.bool,

    /**
     * Text that is visually hidden but read aloud by screenreaders to tell the user what the Checkbox is for.
     * If the Checkbox has a visible label, you can omit the <code>assistiveText</code> prop and use the <code>label</code> prop.
     */
    assistiveText: PropTypes.string,

    /**
     * The Checkbox is a controlled component, and will always be in this state. If checked is not defined, the state of the uncontrolled native `input` component will be used.
     */
    checked: PropTypes.bool,

    /**
     * This is the initial value of an uncontrolled form element and is present only to provide compatibility with
     * hybrid framework applications that are not entirely React. It should only be used in an application without
     * centralized state (Redux, Flux). "Controlled components" with centralized state is highly recommended.
     * See [Code Overview](https://github.com/salesforce/design-system-react/blob/master/docs/codebase-overview.md#controlled-and-uncontrolled-components) for more information.
     */
    defaultChecked: PropTypes.bool,

    /**
     * Class names to be added to the outer container of the Checkbox.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Disables the Checkbox and prevents clicking it.
     */
    disabled: PropTypes.bool,

    /**
     * Message to display when the Checkbox is in an error state. When this is present, also visually highlights the component as in error.
     */
    errorText: PropTypes.string,

    /**
     * A unique ID is needed in order to support keyboard navigation and ARIA support. This ID is added to the `input` element
     */
    id: PropTypes.string,

    /**
     * The Checkbox will be indeterminate if its state can not be figured out or is partially checked. Once a checkbox is indeterminate, a click should cause it to be checked. Since a user cannot put a checkbox into an indeterminate state, it is assumed you are controlling the value of `checked` with the parent, also, and that this is a controlled component. **Note:** `indeterminate` proptype does nothing in the `toggle` variant, as [SLDS does not support it](https://lightningdesignsystem.com/components/forms/#flavor-checkbox-toggle-checkbox-toggle).
     */
    indeterminate: PropTypes.bool,

    /**
     * An optional label for the Checkbox.
     */
    label: PropTypes.string,

    /**
     * Label for the _enabled_ state of the Toggle variant. Defaults to "Enabled".
     */
    labelToggleEnabled: PropTypes.string,

    /**
     * Label for the _disabled_ state of the Toggle variant. Defaults to "Disabled". Note that this uses SLDS language, and meaning, of "Enabled" and "Disabled"; referring to the state of whatever the checkbox is _toggling_, not whether the checkbox itself is enabled or disabled.
     */
    labelToggleDisabled: PropTypes.string,

    /**
     * Name of the submitted form parameter.
     */
    name: PropTypes.string,

    /**
     * This event fires when the Checkbox focused is blurred.
     */
    onBlur: PropTypes.func,

    /**
     * This event fires when the Checkbox changes.
     */
    onChange: PropTypes.func,

    /**
     * This event fires when the Checkbox is focused.
     */
    onFocus: PropTypes.func,

    /**
     * This event fires when a key is pressed down.
     */
    onKeyDown: PropTypes.func,

    /**
     * This event fires when a character is typed. Probably. 👀 See [this article](http://www.bloggingdeveloper.com/post/KeyPress-KeyDown-KeyUp-The-Difference-Between-Javascript-Key-Events.aspx) for more information.
     */
    onKeyPress: PropTypes.func,

    /**
     * This event fires when a pressed key is released.
     */
    onKeyUp: PropTypes.func,

    /**
     * Displays the value of the input, but does not allow changes.
     */
    readOnly: PropTypes.bool,

    /**
     * Highlights the Checkbox as a required field (does not perform any validation).
     */
    required: PropTypes.bool,

    /**
     * The aria-role of the checkbox.
     */
    role: PropTypes.string,

    /**
     * Which flavor of checkbox? Default is `base` while other option is `toggle`. (**Note:** `toggle` variant does not support the `indeterminate` feature, because [SLDS does not support it](https://lightningdesignsystem.com/components/forms/#flavor-checkbox-toggle-checkbox-toggle).)
     */
    variant: PropTypes.oneOf(['base', 'toggle', 'button-group'])
  },
  getDefaultProps: function getDefaultProps() {
    return {
      variant: 'base',
      labelToggleEnabled: 'Enabled',
      labelToggleDisabled: 'Disabled'
    };
  },
  componentWillMount: function componentWillMount() {
    checkProps(FORMS_CHECKBOX, this.props);
    this.generatedId = shortid.generate();
  },
  getId: function getId() {
    return this.props.id || this.generatedId;
  },
  handleChange: function handleChange(event) {
    var value = event.target.checked;
    var _props = this.props,
        checked = _props.checked,
        indeterminate = _props.indeterminate,
        onChange = _props.onChange;

    if (isFunction(onChange)) {
      // `checked` is present twice to maintain backwards compatibility. Please remove first parameter `value` on the next breaking change.
      onChange(value, event, {
        checked: indeterminate ? true : !checked,
        indeterminate: false
      });
    }
  },
  handleKeyDown: function handleKeyDown(event) {
    if (event.keyCode) {
      if (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.SPACE) {
        EventUtil.trapImmediate(event);
        this.handleChange(event);
      }
    }
  },
  renderButtonGroupVariant: function renderButtonGroupVariant(props) {
    var _this = this;

    return React.createElement("span", {
      className: "slds-button slds-checkbox--button"
    }, React.createElement("input", {
      "aria-controls": this.props['aria-controls'],
      "aria-describedby": this.props['aria-describedby'],
      "aria-owns": this.props['aria-owns'],
      "aria-required": this.props['aria-required'],
      disabled: props.disabled,
      checked: props.checked,
      defaultChecked: props.defaultChecked,
      id: this.getId(),
      name: props.name,
      onBlur: props.onBlur,
      onChange: this.handleChange,
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onKeyPress: props.onKeyPress,
      onKeyUp: props.onKeyUp,
      ref: function ref(component) {
        _this.input = component;
      },
      role: props.role,
      required: props.required,
      type: "checkbox"
    }), React.createElement("label", {
      className: "slds-checkbox--button__label",
      htmlFor: this.getId()
    }, React.createElement("span", {
      className: "slds-checkbox--faux"
    }, props.label), props.assistiveText ? React.createElement("span", {
      className: "slds-assistive-text"
    }, props.assistiveText) : null));
  },
  renderBaseVariant: function renderBaseVariant(props) {
    var _this2 = this;

    return React.createElement("div", {
      className: classNames('slds-form-element', {
        'is-required': props.required,
        'slds-has-error': props.errorText
      }, props.className)
    }, React.createElement("div", {
      className: "slds-form-element__control"
    }, React.createElement("span", {
      className: "slds-checkbox"
    }, props.required ? React.createElement("abbr", {
      className: "slds-required",
      title: "required"
    }, "*") : null, React.createElement("input", {
      "aria-controls": this.props['aria-controls'],
      "aria-describedby": this.props['aria-describedby'],
      "aria-owns": this.props['aria-owns'],
      "aria-required": this.props['aria-required'],
      disabled: props.disabled,
      checked: props.checked,
      defaultChecked: props.defaultChecked,
      id: this.getId(),
      name: props.name,
      onBlur: props.onBlur,
      onChange: this.handleChange,
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onKeyPress: props.onKeyPress,
      onKeyUp: props.onKeyUp,
      ref: function ref(component) {
        if (component) {
          component.indeterminate = props.indeterminate;
        }

        _this2.input = component;
      },
      role: props.role,
      required: props.required,
      type: "checkbox"
    }), React.createElement("label", {
      className: "slds-checkbox__label",
      htmlFor: this.getId()
    }, React.createElement("span", {
      className: "slds-checkbox--faux"
    }), props.label ? React.createElement("span", {
      className: "slds-form-element__label"
    }, props.label) : null, props.assistiveText ? React.createElement("span", {
      className: "slds-assistive-text"
    }, props.assistiveText) : null))), props.errorText ? React.createElement("div", {
      className: "slds-form-element__help"
    }, props.errorText) : null);
  },
  renderToggleVariant: function renderToggleVariant(props) {
    var _this3 = this;

    return React.createElement("div", {
      className: classNames('slds-form-element', {
        'is-required': props.required,
        'slds-has-error': props.errorText
      }, props.className)
    }, React.createElement("label", {
      className: "slds-checkbox--toggle slds-grid",
      htmlFor: this.getId()
    }, props.required ? React.createElement("abbr", {
      className: "slds-required",
      title: "required"
    }, "*") : null, props.label ? React.createElement("span", {
      className: "slds-form-element__label slds-m-bottom--none"
    }, props.label) : null, props.assistiveText ? React.createElement("span", {
      className: "slds-assistive-text"
    }, props.assistiveText) : null, React.createElement("input", {
      "aria-controls": this.props['aria-controls'],
      "aria-describedby": "".concat(this.getId(), "-desc"),
      "aria-owns": this.props['aria-owns'],
      "aria-required": this.props['aria-required'],
      disabled: props.disabled,
      id: this.getId(),
      checked: props.checked,
      defaultChecked: props.defaultChecked,
      name: props.name,
      onBlur: props.onBlur,
      onChange: this.handleChange,
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onKeyPress: props.onKeyPress,
      onKeyUp: props.onKeyUp,
      ref: function ref(component) {
        _this3.input = component;
      },
      role: props.role,
      required: props.required,
      type: "checkbox"
    }), React.createElement("span", {
      id: "".concat(this.getId(), "-desc"),
      className: "slds-checkbox--faux_container",
      "aria-live": "assertive"
    }, React.createElement("span", {
      className: "slds-checkbox--faux"
    }), React.createElement("span", {
      className: "slds-checkbox--on"
    }, props.labelToggleEnabled), React.createElement("span", {
      className: "slds-checkbox--off"
    }, props.labelToggleDisabled))), props.errorText ? React.createElement("div", {
      className: "slds-form-element__help"
    }, props.errorText) : null);
  },
  // ### Render
  render: function render() {
    var renderer;

    switch (this.props.variant) {
      case 'toggle':
        renderer = this.renderToggleVariant(this.props);
        break;

      case 'button-group':
        renderer = this.renderButtonGroupVariant(this.props);
        break;

      default:
        renderer = this.renderBaseVariant(this.props);
    }

    return renderer;
  }
});
export default Checkbox;
//# sourceMappingURL=index.js.map