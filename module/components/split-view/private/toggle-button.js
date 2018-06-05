/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../button';
export var DISPLAY_NAME = 'SLDSSplitViewToggleButton';
export var TOGGLE_BUTTON_WIDTH = '0.75rem';
var propsTypes = {
  /**
   * **Assistive text for accessibility**
   * * `toggleButtonOpen`: The button used to open the split view.
   * * `toggleButtonClose`: The button used to close the split view.
   */
  assistiveText: PropTypes.shape({
    toggleButtonOpen: PropTypes.string.isRequired,
    toggleButtonClose: PropTypes.string.isRequired
  }),

  /**
   * Unique html id placed on the button for aria-controls
   */
  ariaControls: PropTypes.string.isRequired,

  /**
   * Determines if the panel is open
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * **Event Callbacks**
   * * `onClick`: Called when the button is clicked.
   */
  events: PropTypes.shape({
    onClick: PropTypes.func.isRequired
  })
};
var defaultProps = {};

var SplitViewToggleButton = function SplitViewToggleButton(_ref) {
  var isOpen = _ref.isOpen,
      assistiveText = _ref.assistiveText,
      ariaControls = _ref.ariaControls,
      events = _ref.events;
  var toggleAssistiveText = isOpen ? assistiveText.toggleButtonOpen : assistiveText.toggleButtonClose;
  return React.createElement(Button, {
    className: classNames('slds-button slds-button_icon slds-split-view__toggle-button', {
      'slds-is-open': isOpen
    }),
    "aria-expanded": isOpen,
    "aria-controls": ariaControls,
    title: toggleAssistiveText,
    variant: "base",
    iconName: "left",
    iconCategory: "utility",
    iconSize: "x-small",
    onClick: events.onClick,
    assistiveText: toggleAssistiveText
  });
};

SplitViewToggleButton.displayName = DISPLAY_NAME;
SplitViewToggleButton.propTypes = propsTypes;
SplitViewToggleButton.defaultProps = defaultProps;
export default SplitViewToggleButton;
//# sourceMappingURL=toggle-button.js.map