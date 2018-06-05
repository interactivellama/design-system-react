function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # App Launcher Component
// Based on SLDS v2.1.0-rc.2
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ## Children

import Modal from '../modal'; // ## Constants

import { APP_LAUNCHER } from '../../utilities/constants';
var defaultProps = {
  assistiveText: {
    trigger: 'Open App Launcher'
  },
  title: 'App Launcher'
};
/**
 * The App Launcher allows the user to quickly access all the apps and functionality with their organization.
 * The App Launcher should generally only be used as a sub-component of the [Global Navigation Bar](/components/global-navigation-bar)
 *
 * Also note: App Launcher is not included in the standard component export. To import it, you must reference it directly via its path.
 * Example:
 * ```
 * import AppLauncher from 'design-system-react/components/app-launcher';
 * import AppLauncherTile from 'design-system-react/components/app-launcher/tile';
 * import AppLauncherSection from 'design-system-react/components/app-launcher/section';
 * ```
 *
 * USAGE EXAMPLE:
 * ```
 * <AppLauncher>
 * 	<AppLauncherSection>
 * 		<AppLauncherTile />
 * 		<AppLauncherTile />
 * 		<AppLauncherTile />
 * 	</AppLauncherSection>
 * 	<AppLauncherSection>
 * 		<AppLauncherTile />
 * 		<AppLauncherTile />
 * 	</AppLauncherSection>
 * </AppLauncher>
 * ```
 *
 * By default, `Modal`, a child component of App Launcher, will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies. To prevent this you can add the following to your application with `#mount` being the root node of your application that you would like to hide from assistive technologies when the `Modal` is open.
 * ```
 * import settings from 'design-system-react/components/settings';
 * settings.setAppElement('#mount');
 * ```
 */

var AppLauncher = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: APP_LAUNCHER,
  // ### Prop Types
  propTypes: {
    /**
     * **Assistive text for accessibility.**
     * This object is merged with the default props object on every render.
     * * `trigger`: This is a visually hidden label for the app launcher icon.
     */
    assistiveText: PropTypes.shape({
      trigger: PropTypes.string
    }),

    /**
     * One or more `<AppLauncherSection />`s each containing one or more `<AppLauncherTile />`s
     */
    children: PropTypes.node.isRequired,

    /**
     * Control the open/close state of the App Launcher
     */
    isOpen: PropTypes.bool,

    /**
     * CSS classes to be added to App Launcher Modal.
     */
    modalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Button that exists in the upper right hand corner of the App Launcher modal
     */
    modalHeaderButton: PropTypes.node,

    /**
     * Allows longer application names without truncating them.
     */
    noTruncate: PropTypes.bool,

    /**
     * Callback when the App Launcher Modal is closed
     */
    onClose: PropTypes.func,

    /**
     * Search bar for the Modal's header. Will typically be an instance of `design-system-react/forms/input/search`
     */
    search: PropTypes.node,

    /**
     * Set the App Launcher's title text (for localization)
     */
    title: PropTypes.string,

    /**
     * This is typically the name of the cloud or application
     */
    triggerName: PropTypes.node,

    /**
     * Callback when the App Launcher icon is clicked
     */
    triggerOnClick: PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  componentWillMount: function componentWillMount() {
    // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
    checkProps(APP_LAUNCHER, this.props);
  },
  openAppLauncher: function openAppLauncher(event) {
    this.setState({
      isOpen: true
    });

    if (isFunction(this.props.triggerOnClick)) {
      this.props.triggerOnClick(event);
    }
  },
  closeAppLauncher: function closeAppLauncher(event) {
    this.setState({
      isOpen: false
    });

    if (isFunction(this.props.onClose)) {
      this.props.onClose(event);
    }
  },
  renderSearch: function renderSearch() {
    var _this = this;

    var returnVal;

    if (this.props.search) {
      returnVal = React.createElement("div", {
        className: "slds-app-launcher__header-search",
        ref: function ref(component) {
          if (component) {
            if (!_this.focusedOnSearch) {
              var input = component.querySelector('input');

              if (input) {
                // push to end of stack so click event doesn't blur the focus
                setTimeout(function () {
                  input.focus();
                  _this.focusedOnSearch = true;
                }, 0);
              }
            }
          } else {
            _this.focusedOnSearch = false;
          }
        }
      }, this.props.search);
    }

    return returnVal;
  },
  render: function render() {
    var isOpen = this.props.isOpen !== undefined ? this.props.isOpen : this.state.isOpen; // Should be removed in the future by adding a reset class of some sort.

    var style = this.props.noTruncate ? {
      maxWidth: 'none'
    } : null;
    var customModalHeader = React.createElement("div", {
      className: "slds-grid slds-grid--align-spread slds-grid--vertical-align-center"
    }, React.createElement("h2", {
      className: "slds-text-heading--medium"
    }, this.props.title), this.renderSearch(), this.props.modalHeaderButton ? this.props.modalHeaderButton : React.createElement("span", {
      className: "slds-size--1-of-7"
    })); // Not present in SLDS, but is consistent with other implementations of App Launcher. This also prevents resizing/jumping around when filtering. It will start clipping the modal close button at 600px viewport height.

    var modalContentStaticHeight = '90%';

    var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

    var triggerAssistiveText = this.props.triggerAssistiveText || assistiveText.trigger;
    return React.createElement("div", {
      className: "slds-context-bar__item slds-no-hover",
      style: style
    }, React.createElement("div", {
      className: "slds-context-bar__icon-action"
    }, React.createElement("button", {
      "aria-haspopup": "true",
      className: "slds-button slds-icon-waffle_container slds-context-bar__button",
      onClick: this.openAppLauncher
    }, React.createElement("span", {
      className: "slds-icon-waffle"
    }, React.createElement("span", {
      className: "slds-r1"
    }), React.createElement("span", {
      className: "slds-r2"
    }), React.createElement("span", {
      className: "slds-r3"
    }), React.createElement("span", {
      className: "slds-r4"
    }), React.createElement("span", {
      className: "slds-r5"
    }), React.createElement("span", {
      className: "slds-r6"
    }), React.createElement("span", {
      className: "slds-r7"
    }), React.createElement("span", {
      className: "slds-r8"
    }), React.createElement("span", {
      className: "slds-r9"
    })), triggerAssistiveText && React.createElement("span", {
      className: "slds-assistive-text"
    }, triggerAssistiveText))), React.createElement(Modal, {
      contentClassName: "slds-modal__content slds-app-launcher__content slds-p-around--medium",
      contentStyle: {
        minHeight: modalContentStaticHeight
      },
      isOpen: isOpen,
      onRequestClose: this.closeAppLauncher,
      containerClassName: classNames('app-launcher', this.props.modalClassName),
      size: "large",
      header: customModalHeader,
      headerClassName: "slds-app-launcher__header"
    }, this.props.children), this.props.triggerName ? React.createElement("span", {
      className: classNames('slds-context-bar__label-action slds-context-bar__app-name', {
        'slds-truncate': !this.props.noTruncate
      })
    }, this.props.triggerName) : null);
  }
});
export default AppLauncher;
//# sourceMappingURL=index.js.map