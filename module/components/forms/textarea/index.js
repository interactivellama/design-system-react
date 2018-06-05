/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-autofocus */
// # Textarea Component
// Implements the [Textarea design pattern](https://lightningdesignsystem.com/components/textarea).
// Based on SLDS v2.4.0
//
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // ## Children
// This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import { FORMS_TEXTAREA } from '../../../utilities/constants';
/**
 * A multi-line plain-text editing control.
 */

var Textarea = createReactClass({
  displayName: FORMS_TEXTAREA,
  propTypes: {
    /**
     * The aria-activedescendant attribute contains the ID of the currently active child object that is part of a composite widget within the Document Object Model. It makes do with the overhead of having all or more than one child focusable. As the name specifies, it helps in managing the current active child of the composite widget.
     */
    'aria-activedescendant': PropTypes.string,

    /**
     * Indicates if the suggestions in a composite widget are values that complete the current textbox input.
     */
    'aria-autocomplete': PropTypes.string,

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
     * Use the `aria-expanded` state to indicate whether regions of the content are collapsible, and to expose whether a region is currently expanded or collapsed.
     */
    'aria-expanded': PropTypes.bool,

    /**
     * Indicates that the element has a popup context menu or sub-level menu.
     */
    'aria-haspopup': PropTypes.bool,

    /**
     * The aria-labelledby attribute contains the element IDs of labels in objects such as input elements, widgets, and groups. The attribute establishes relationships between objects and their labels. Assistive technology, such as screen readers, use this attribute to catalog the objects in a document so that users can navigate between them. Without an element ID, the assistive technology cannot catalog the object.
     */
    'aria-labelledby': PropTypes.string,

    /**
     * An HTML ID that is shared with ARIA-supported devices with the
     * `aria-controls` attribute in order to relate the input with
     * another region of the page. An example would be a search field
     * that shows search results.
     */
    'aria-owns': PropTypes.string,

    /**
     * The `aria-required` attribute is used to indicate that user input is required on an element before a form can be submitted.
     */
    'aria-required': PropTypes.bool,

    /**
     * Specifies is the textarea should automatically get focus when the page loads. This is typically a poor user experience.
     */
    autoFocus: PropTypes.bool,

    /**
     * If present, the label associated with this `textarea` is overwritten
     * by this text and is visually not shown.
     */
    assistiveText: PropTypes.string,

    /**
     * Elements are added after the `textarea`.
     */
    children: PropTypes.node,

    /**
     * Class names to be added to the textarea component.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /** Allows for ability to apply classNames to outer textarea div.
     */
    classNameContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Disables the textarea and prevents editing the contents.
     */
    disabled: PropTypes.bool,

    /**
     * Message to display when the textarea is in an error state. When this is present, also visually highlights the component as in error.
     */
    errorText: PropTypes.string,

    /**
     * Every textarea must have a unique ID in order to support keyboard navigation and ARIA support.
     */
    id: PropTypes.string,

    /**
     * This callback exposes the textarea reference / DOM node to parent components. `<Parent textareaRef={(textareaComponent) => this.textarea = textareaComponent} />
     */
    textareaRef: PropTypes.func,

    /**
     * This label appears above the textarea.
     */
    label: PropTypes.string,

    /**
     * Triggered when focus is removed.
     */
    onBlur: PropTypes.func,

    /**
     * This callback fires when the textarea changes. The synthetic React event will be the first parameter to the callback. You will probably want to reference `event.target.value` in your callback. No custom data object is provided.
     */
    onChange: PropTypes.func,

    /**
     * This event fires when the textarea is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Triggered when component is focused.
     */
    onFocus: PropTypes.func,

    /**
     * Similar to `onchange`. Triggered when an element gets user input.
     */
    onInput: PropTypes.func,

    /**
     * Triggered when a submittable <input> element is invalid.
     */
    onInvalid: PropTypes.func,

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
     * Triggered after some text has been selected in an element.
     */
    onSelect: PropTypes.func,

    /**
     * Fires when a form is submitted.
     */
    onSubmit: PropTypes.func,

    /**
     * Maximum number of characters allowed.
     */
    maxLength: PropTypes.string,

    /**
     * Name of the submitted form parameter.
     */
    name: PropTypes.string,

    /**
     * Text that will appear in an empty textarea.
     */
    placeholder: PropTypes.string,

    /**
     * Highlights the textarea as a required field (does not perform any validation).
     */
    required: PropTypes.bool,

    /**
     * The textarea is a controlled component, and will always display this value.
     */
    value: PropTypes.string,

    /**
     * The textarea is a uncontrolled component, and this will be the initial value.
     */
    defaultValue: PropTypes.string,

    /**
     * Specifies how the text in a text area is to be wrapped when submitted in a form.
     */
    wrap: PropTypes.oneOf(['soft', 'hard'])
  },
  componentWillMount: function componentWillMount() {
    // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
    checkProps(FORMS_TEXTAREA, this.props);
    this.generatedId = shortid.generate();

    if (this.props.errorText) {
      this.generatedErrorId = shortid.generate();
    }
  },
  getId: function getId() {
    return this.props.id || this.generatedId;
  },
  getErrorId: function getErrorId() {
    return this.props['aria-describedby'] || this.generatedErrorId;
  },
  // ### Render
  render: function render() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        assistiveText = _props.assistiveText,
        children = _props.children,
        className = _props.className,
        classNameContainer = _props.classNameContainer,
        disabled = _props.disabled,
        errorText = _props.errorText,
        textareaRef = _props.textareaRef,
        label = _props.label,
        onBlur = _props.onBlur,
        onChange = _props.onChange,
        onClick = _props.onClick,
        onFocus = _props.onFocus,
        onInput = _props.onInput,
        onInvalid = _props.onInvalid,
        onKeyDown = _props.onKeyDown,
        onKeyPress = _props.onKeyPress,
        onKeyUp = _props.onKeyUp,
        onSelect = _props.onSelect,
        onSubmit = _props.onSubmit,
        maxLength = _props.maxLength,
        name = _props.name,
        placeholder = _props.placeholder,
        required = _props.required,
        role = _props.role,
        value = _props.value,
        defaultValue = _props.defaultValue,
        wrap = _props.wrap;
    var labelText = label || assistiveText; // One of these is required to pass accessibility tests

    return React.createElement("div", {
      className: classNames('slds-form-element', {
        'slds-has-error': errorText
      }, classNameContainer)
    }, labelText && React.createElement("label", {
      className: classNames('slds-form-element__label', {
        'slds-assistive-text': assistiveText && !label
      }),
      htmlFor: this.getId()
    }, required && React.createElement("abbr", {
      className: "slds-required",
      title: "required"
    }, "*"), labelText), React.createElement("div", {
      className: classNames('slds-form-element__control')
    }, React.createElement("textarea", {
      "aria-activedescendant": this.props['aria-activedescendant'],
      "aria-controls": this.props['aria-controls'],
      "aria-labelledby": this.props['aria-labelledby'],
      "aria-describedby": this.getErrorId(),
      "aria-expanded": this.props['aria-expanded'],
      "aria-owns": this.props['aria-owns'],
      "aria-required": this.props['aria-required'],
      className: classNames('slds-textarea', className),
      autoFocus: autoFocus,
      disabled: disabled,
      id: this.getId(),
      maxLength: maxLength,
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onClick: onClick,
      onFocus: onFocus,
      onInput: onInput,
      onInvalid: onInvalid,
      onKeyDown: onKeyDown,
      onKeyPress: onKeyPress,
      onKeyUp: onKeyUp,
      onSelect: onSelect,
      onSubmit: onSubmit,
      placeholder: placeholder,
      ref: textareaRef,
      role: role,
      required: required,
      wrap: wrap,
      value: value,
      defaultValue: defaultValue
    })), errorText && React.createElement("div", {
      id: this.getErrorId(),
      className: "slds-form-element__help"
    }, errorText), children);
  }
});
export default Textarea;
//# sourceMappingURL=index.js.map