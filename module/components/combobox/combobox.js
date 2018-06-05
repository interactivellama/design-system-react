function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import find from 'lodash.find';
import reject from 'lodash.reject';
import isEqual from 'lodash.isequal';
import findIndex from 'lodash.findindex';
import isBoolean from 'lodash.isboolean';
import isFunction from 'lodash.isfunction';
import classNames from 'classnames';
import shortid from 'shortid';
import Dialog from '../utilities/dialog';
import InnerInput from '../../components/forms/input/private/inner-input';
import InputIcon from '../icon/input-icon';
import Menu from './private/menu';
import Label from '../forms/private/label';
import SelectedListBox from './private/selected-listbox';
import KEYS from '../../utilities/key-code';
import mapKeyEventCallbacks from '../../utilities/key-callbacks';
import checkProps from './check-props';
import { COMBOBOX } from '../../utilities/constants';
var currentOpenDropdown;
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `label`: This is used as a visually hidden label if, no `labels.label` is provided.
   * * `optionSelectedInMenu`: Added before selected menu items in Read-only variants (Picklists). The default is `Current Selection:`.
   * * `removeSingleSelectedOption`: Used by inline-listbox, single-select variant to remove the selected item (pill). This is a button with focus. The default is `Remove selected option`.
   * * `removePill`: Used by multiple selection Comboboxes to remove a selected item (pill). Focus is on the pill. This is not a button. The default  is `, Press delete or backspace to remove`.
   * * `selectedListboxLabel`: This is a label for the selected listbox. The grouping of pills for multiple selection Comboboxes. The default is `Selected Options:`.
   * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string,
    optionSelectedInMenu: PropTypes.string,
    removeSingleSelectedOption: PropTypes.string,
    removePill: PropTypes.string,
    selectedListboxLabel: PropTypes.string
  }),

  /**
   * The `aria-describedby` attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them.
   * This is very similar to aria-labelledby: a label describes the essence of an object, while a description provides more information that the user might need. _Tested with snapshot testing._
   */
  'aria-describedby': PropTypes.string,

  /**
   * CSS classes to be added to tag with `.slds-combobox`. Uses `classNames` [API](https://github.com/JedWatson/classnames). _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to top level tag with `.slds-form-element` and not on `.slds-combobox_container`. Uses `classNames` [API](https://github.com/JedWatson/classnames). _Tested with snapshot testing._
   */
  classNameContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to tag with `.slds-dropdown`. Uses `classNames` [API](https://github.com/JedWatson/classnames). Autocomplete/bass variant menu height should not scroll and should be determined by number items which should be no more than 10. _Tested with snapshot testing._
   */
  classNameMenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to tag with `.slds-dropdown__header`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  classNameMenuSubHeader: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Event Callbacks
   * * `onBlur`: Called when `input` removes focus.
   * * `onChange`: Called when keyboard events occur within `input`
   * * `onClose`: Triggered when the menu has closed.
   * * `onFocus`: Called when `input` receives focus.
   * * `onOpen`: Triggered when the menu has opened.
   * * `onRequestClose`: Function called when the menu would like to hide. Please use with `isOpen`.
   * * `onRequestOpen`:  Function called when the menu would like to show. Please use with `isOpen`.
   * * `onRequestRemoveSelectedOption`: Function called when a single selection option is to be removed.
   * * `onSelect`: Function called when a menu item is selected
   * * `onSubmit`: Function called when user presses enter or submits the `input`
   * _Tested with Mocha testing._
   */
  events: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    onRequestRemoveSelectedOption: PropTypes.func,
    onSelect: PropTypes.func,
    onSubmit: PropTypes.func
  }),

  /**
   * Message to display when the input is in an error state. When this is present, also visually highlights the component as in error. _Tested with snapshot testing._
   */
  errorText: PropTypes.string,

  /**
   * By default, dialogs will flip their alignment (such as bottom to top) if they extend beyond a boundary element such as a scrolling parent or a window/viewpoint. `hasStaticAlignment` disables this behavior and allows this component to extend beyond boundary elements. _Not tested._
   */
  hasStaticAlignment: PropTypes.bool,

  /**
   * HTML id for component. _Tested with snapshot testing._
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `label`: This label appears above the input.
   * * `multipleOptionsSelected`: This label is used by the readonly variant when multiple options are selected. The default is `${props.selection.length} options selected`. This will override the entire string.
   * * `noOptionsFound`: Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
   * * `placeholder`: Input placeholder
   * * `placeholderReadOnly`: Placeholder for Picklist-like Combobox
   * * `removePillTitle`: Title on `X` icon
   * _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    multipleOptionsSelected: PropTypes.string,
    noOptionsFound: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    placeholder: PropTypes.string,
    placeholderReadOnly: PropTypes.string,
    removePillTitle: PropTypes.string
  }),

  /**
   * Forces the dropdown to be open or closed. See controlled/uncontrolled callback/prop pattern for more on suggested use view [Concepts and Best Practices](https://github.com/salesforce-ux/design-system-react/blob/master/CONTRIBUTING.md#concepts-and-best-practices) _Tested with snapshot testing._
   */
  isOpen: PropTypes.bool,

  /**
   * Sets the dialog width to the width of one of the following:
   * * `target`: Sets the dialog width to the width of the target. (Menus attached to `input` typically follow this UX pattern),
   * * `menu`: Consider setting a `menuMaxWidth` if using this value. If not, width will be set to width of largest menu item.
   * * `none`: Does not set a width on the dialog. _Tested with snapshot testing._
   */
  inheritWidthOf: PropTypes.oneOf(['target', 'menu', 'none']),

  /**
   * Accepts a custom menu item rendering function that becomes a custom component. The checkmark is still rendered in readonly variants. This function is passed the following props:
   * * `assistiveText`: Object, `assistiveText` prop that is passed into Combobox
   * * `option`: Object, option data for item being rendered that is passed into Combobox
   * * `selected`: Boolean, allows rendering of `assistiveText.optionSelectedInMenu` in Readonly Combobox
   *
   * _Tested with snapshot testing._
   */
  menuItem: PropTypes.func,

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  menuPosition: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

  /**
   * Sets a maximum width that the menu will be used if `inheritWidthOf` is set to `menu`. (Example: 500px) _Tested with snapshot testing._
   *
   */
  menuMaxWidth: PropTypes.string,

  /**
   * Allows multiple selections _Tested with mocha testing._
   */
  multiple: PropTypes.bool,

  /**
   * Item added to the dropdown menu.
   * To add an item as a separator, set item `type` as `separator`. Note: At the moment, we don't support two consecutive separators. _Tested with snapshot testing._
   */
  options: PropTypes.array.isRequired,

  /**
   * Determines the height of the menu based on SLDS CSS classes. This only applies to the readonly variant. This is a `number`.
   */
  readOnlyMenuItemVisibleLength: PropTypes.oneOf([5, 7, 10]),

  /**
   * Limits auto-complete input submission to one of the provided options. _Tested with mocha testing._
   */
  predefinedOptionsOnly: PropTypes.bool,

  /**
   * Applies label styling for a required form element. _Tested with snapshot testing._
   */
  required: PropTypes.bool,

  /**
   * Accepts an array of item objects. For single selection, pass in an array of one object. _Tested with snapshot testing._
   */
  selection: PropTypes.array,

  /**
   * Value of input. This is a controlled component, so you will need to control the input value. _Tested with snapshot testing._
   */
  value: PropTypes.string,

  /**
   * Changes styles of the input. Currently `entity` is not supported. _Tested with snapshot testing._
   */
  variant: PropTypes.oneOf(['base', 'inline-listbox', 'readonly'])
};
var defaultProps = {
  assistiveText: {
    optionSelectedInMenu: 'Current Selection:',
    removeSingleSelectedOption: 'Remove selected option',
    removePill: ', Press delete or backspace to remove',
    selectedListboxLabel: 'Selected Options:'
  },
  events: {},
  labels: {
    noOptionsFound: 'No matches found.',
    placeholderReadOnly: 'Select an Option',
    removePillTitle: 'Remove'
  },
  inheritWidthOf: 'target',
  menuPosition: 'absolute',
  readOnlyMenuItemVisibleLength: 5,
  required: false,
  selection: [],
  variant: 'base'
};
/**
 * A widget that provides a user with an input field that is either an autocomplete or readonly, accompanied with a listbox of pre-definfined options.
 */

var Combobox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Combobox, _React$Component);

  function Combobox(props) {
    var _this;

    _classCallCheck(this, Combobox);

    _this = _possibleConstructorReturn(this, (Combobox.__proto__ || Object.getPrototypeOf(Combobox)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      isOpen: false,
      activeOption: undefined,
      activeOptionIndex: -1,
      // seeding initial state with this.props.selection[0]
      activeSelectedOption: _this.props.selection && _this.props.selection[0] || undefined,
      activeSelectedOptionIndex: 0
    };
    return _this;
  }
  /**
   * Lifecycle methods
   */


  _createClass(Combobox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      checkProps(COMBOBOX, this.props);
      this.generatedId = shortid.generate();

      if (this.props.errorText) {
        this.generatedErrorId = shortid.generate();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      // This logic will maintain the active highlight even when the
      // option order changes. One example would be the server pushes
      // data out as the user has the menu open. This logic clears
      // `activeOption` if the active option is no longer in the options
      // list. If it's in the options list, then find the new index and
      // set `activeOptionIndex`
      if (!isEqual(this.props.options, nextProps.options)) {
        var index = findIndex(nextProps.options, function (item) {
          return isEqual(item, _this2.state.activeOption);
        });

        if (index !== -1) {
          this.setState({
            activeOptionIndex: index
          });
        } else {
          this.setState({
            activeOption: undefined,
            activeOptionIndex: -1
          });
        }
      } else if (this.props.isOpen !== nextProps.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      } // there may be issues with tabindex/focus if the app removes an item
      // from selection while the user is using the listbox


      var selectedOptionsRenderIsInitialRender = this.props.selection && this.props.selection.length === 0 && nextProps.selection.length > 0;

      if (selectedOptionsRenderIsInitialRender) {
        this.setState({
          activeSelectedOption: nextProps.selection[0],
          activeSelectedOptionIndex: 0
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (currentOpenDropdown === this) {
        currentOpenDropdown = undefined;
      }
    }
  }, {
    key: "getDialog",
    value: function getDialog(_ref) {
      var menuRenderer = _ref.menuRenderer;
      // FOR BACKWARDS COMPATIBILITY
      var menuPosition = this.props.isInline ? 'relative' : this.props.menuPosition; // eslint-disable-line react/prop-types

      return !this.props.disabled && this.getIsOpen() ? React.createElement(Dialog, {
        align: "bottom left",
        context: this.context,
        hasStaticAlignment: this.props.hasStaticAlignment,
        inheritWidthOf: this.props.inheritWidthOf,
        onClose: this.handleClose,
        onOpen: this.handleOpen,
        onRequestTargetElement: this.getTargetElement,
        position: menuPosition,
        containerProps: {
          id: "".concat(this.getId(), "-listbox"),
          role: 'listbox'
        }
      }, menuRenderer) : null;
    }
  }, {
    key: "getErrorId",
    value: function getErrorId() {
      return this.props['aria-describedby'] || this.generatedErrorId;
    }
    /**
     * Shared class property getter methods
     */

  }, {
    key: "render",
    value: function render() {
      var props = this.props; // Merge objects of strings with their default object

      var assistiveText = assign({}, defaultProps.assistiveText, props.assistiveText);
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var subRenderParameters = {
        assistiveText: assistiveText,
        labels: labels,
        props: this.props
      };
      var multipleOrSingle = this.props.multiple ? 'multiple' : 'single';
      var subRenders = {
        base: {
          multiple: this.renderBase,
          // same
          single: this.renderBase
        },
        'inline-listbox': {
          multiple: this.renderInlineMultiple,
          single: this.renderInlineSingle
        },
        readonly: {
          multiple: this.renderReadOnlyMultiple,
          single: this.renderReadOnlySingle
        }
      };
      var variantExists = subRenders[this.props.variant][multipleOrSingle];
      return React.createElement("div", {
        className: classNames('slds-form-element', props.classNameContainer)
      }, React.createElement(Label, {
        assistiveText: this.props.assistiveText,
        htmlFor: this.getId(),
        label: labels.label,
        required: props.required
      }), variantExists ? subRenders[this.props.variant][multipleOrSingle](subRenderParameters) : subRenders.base.multiple(subRenderParameters));
    }
  }]);

  return Combobox;
}(React.Component);
/* eslint-enable jsx-a11y/role-supports-aria-props */


var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "getId", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return _this3.props.id || _this3.generatedId;
    }
  });
  Object.defineProperty(this, "getIsActiveOption", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return _this3.state.activeOption && _this3.state.activeOptionIndex !== -1;
    }
  });
  Object.defineProperty(this, "getIsOpen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return !!(isBoolean(_this3.props.isOpen) ? _this3.props.isOpen : _this3.state.isOpen);
    }
  });
  Object.defineProperty(this, "getNewActiveOptionIndex", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref2) {
      var activeOptionIndex = _ref2.activeOptionIndex,
          offset = _ref2.offset,
          options = _ref2.options;
      // used by menu listbox and selected options listbox
      var nextIndex = activeOptionIndex + offset;
      var skipIndex = options.length > nextIndex && nextIndex >= 0 && options[nextIndex].type === 'separator';
      var newIndex = skipIndex ? nextIndex + offset : nextIndex;
      var hasNewIndex = options.length > newIndex && newIndex >= 0;
      return hasNewIndex ? newIndex : activeOptionIndex;
    }
  });
  Object.defineProperty(this, "getTargetElement", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return _this3.inputRef;
    }
  });
  Object.defineProperty(this, "setInputRef", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(component) {
      _this3.inputRef = component; // yes, this is a render triggered by a render.
      // Dialog/Popper.js cannot place the menu until
      // the trigger/target DOM node is mounted. This
      // way `findDOMNode` is not called and parent
      // DOM nodes are not queried.

      if (!_this3.state.inputRendered) {
        _this3.setState({
          inputRendered: true
        });
      }
    }
  });
  Object.defineProperty(this, "handleBlurPill", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        listboxHasFocus: false
      });
    }
  });
  Object.defineProperty(this, "handleClickOutside", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.handleRequestClose();
    }
  });
  Object.defineProperty(this, "handleClose", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var isOpen = _this3.getIsOpen();

      if (isOpen) {
        if (currentOpenDropdown === _this3) {
          currentOpenDropdown = undefined;
        }

        _this3.setState({
          activeOption: undefined,
          activeOptionIndex: -1,
          isOpen: false
        });

        if (_this3.props.events.onClose) {
          _this3.props.events.onClose();
        }
      }
    }
  });
  Object.defineProperty(this, "handleInputBlur", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      // If menu is open when the input's onBlur event fires, it will close before the onClick of the menu item can fire.
      setTimeout(function () {
        _this3.handleClose();
      }, 200);

      if (_this3.props.events.onBlur) {
        _this3.props.events.onBlur(event);
      }
    }
  });
  Object.defineProperty(this, "handleInputChange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      _this3.requestOpenMenu();

      _this3.props.events.onChange(event, {
        value: event.target.value
      });
    }
  });
  Object.defineProperty(this, "handleInputFocus", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      if (_this3.props.events.onFocus) {
        _this3.props.events.onFocus(event);
      }
    }
  });
  Object.defineProperty(this, "handleInputSubmit", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      // use menu options
      if (_this3.getIsActiveOption()) {
        _this3.handleSelect(event, {
          option: _this3.state.activeOption,
          selection: _this3.props.selection
        }); // use input value, if not limited to predefined options (in the menu)

      } else if (!_this3.props.predefinedOptionsOnly && event.target.value !== '' && _this3.props.events.onSubmit) {
        _this3.props.events.onSubmit(event, {
          value: event.target.value
        });
      }
    }
  });
  Object.defineProperty(this, "handleKeyDown", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      var _callbacks;

      // Helper function that takes an object literal of callbacks that are triggered with a key event
      mapKeyEventCallbacks(event, {
        callbacks: (_callbacks = {}, _defineProperty(_callbacks, KEYS.DOWN, {
          callback: _this3.handleKeyDownDown
        }), _defineProperty(_callbacks, KEYS.ENTER, {
          callback: _this3.handleInputSubmit
        }), _defineProperty(_callbacks, KEYS.ESCAPE, {
          callback: _this3.handleClose
        }), _defineProperty(_callbacks, KEYS.UP, {
          callback: _this3.handleKeyDownUp
        }), _callbacks)
      });
    }
  });
  Object.defineProperty(this, "handleKeyDownDown", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      // Don't open if user is selecting text
      if (!event.shiftKey) {
        _this3.openDialog();
      }

      _this3.handleNavigateListboxMenu(event, {
        direction: 'next'
      });
    }
  });
  Object.defineProperty(this, "handleKeyDownUp", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      // Don't open if user is selecting text
      if (!event.shiftKey && _this3.state.isOpen) {
        _this3.handleNavigateListboxMenu(event, {
          direction: 'previous'
        });
      }
    }
  });
  Object.defineProperty(this, "handleNavigateListboxMenu", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref3) {
      var direction = _ref3.direction;
      var offsets = {
        next: 1,
        previous: -1
      }; // takes current/previous state and returns an object with the new state

      _this3.setState(function (prevState) {
        var newIndex = _this3.getNewActiveOptionIndex({
          activeOptionIndex: prevState.activeOptionIndex,
          offset: offsets[direction],
          options: _this3.props.options
        });

        return {
          activeOption: _this3.props.options[newIndex],
          activeOptionIndex: newIndex
        };
      });
    }
  });
  Object.defineProperty(this, "handleNavigateListboxOfPills", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref4) {
      var direction = _ref4.direction;
      var offsets = {
        next: 1,
        previous: -1
      };

      _this3.setState(function (prevState) {
        var isLastOptionAndRightIsPressed = prevState.activeSelectedOptionIndex + 1 === _this3.props.selection.length && direction === 'next';
        var isFirstOptionAndLeftIsPressed = prevState.activeSelectedOptionIndex === 0 && direction === 'previous';
        var newState;

        if (isLastOptionAndRightIsPressed) {
          newState = {
            activeSelectedOption: _this3.props.selection[0],
            activeSelectedOptionIndex: 0,
            listboxHasFocus: true
          };
        } else if (isFirstOptionAndLeftIsPressed) {
          newState = {
            activeSelectedOption: _this3.props.selection[_this3.props.selection.length - 1],
            activeSelectedOptionIndex: _this3.props.selection.length - 1,
            listboxHasFocus: true
          };
        } else {
          var newIndex = _this3.getNewActiveOptionIndex({
            activeOptionIndex: prevState.activeSelectedOptionIndex,
            offset: offsets[direction],
            options: _this3.props.selection
          });

          newState = {
            activeSelectedOption: _this3.props.selection[newIndex],
            activeSelectedOptionIndex: newIndex,
            listboxHasFocus: true
          };
        }

        return newState;
      });
    }
  });
  Object.defineProperty(this, "handleOpen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var isOpen = _this3.getIsOpen();

      if (!isOpen) {
        if (currentOpenDropdown && isFunction(currentOpenDropdown.handleClose)) {
          currentOpenDropdown.handleClose();
        }
      } else {
        currentOpenDropdown = _this3;

        _this3.setState({
          isOpen: true
        });

        if (_this3.props.events.onOpen) {
          _this3.props.events.onOpen();
        }
      }
    }
  });
  Object.defineProperty(this, "handlePillClickListboxOfPills", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref5) {
      var option = _ref5.option,
          index = _ref5.index;

      // this is clicking the span, not the remove button
      _this3.setState({
        activeSelectedOption: option,
        activeSelectedOptionIndex: index,
        listboxHasFocus: true
      });
    }
  });
  Object.defineProperty(this, "handleRemoveSelectedOption", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref6) {
      var option = _ref6.option,
          index = _ref6.index;
      event.preventDefault();
      var onlyOnePillAndInputExists = _this3.props.selection.length === 1;
      var isReadOnlyAndTwoPillsExists = _this3.props.selection.length === 2 && _this3.props.variant === 'readonly' && _this3.props.multiple;
      var lastPillWasRemoved = index + 1 === _this3.props.selection.length;

      if ((onlyOnePillAndInputExists || isReadOnlyAndTwoPillsExists) && _this3.inputRef) {
        _this3.inputRef.focus();
      } else if (lastPillWasRemoved) {
        // set focus to previous option and index
        _this3.setState({
          activeSelectedOption: _this3.props.selection[index - 1],
          activeSelectedOptionIndex: index - 1,
          listboxHasFocus: true
        });
      } else {
        // set focus to next option, but same index
        _this3.setState({
          activeSelectedOption: _this3.props.selection[index + 1],
          activeSelectedOptionIndex: index,
          listboxHasFocus: true
        });
      }

      if (_this3.props.events.onRequestRemoveSelectedOption) {
        _this3.props.events.onRequestRemoveSelectedOption(event, {
          selection: reject(_this3.props.selection, option)
        });
      }
    }
  });
  Object.defineProperty(this, "handleRequestClose", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      if (_this3.props.events.onRequestClose) {
        _this3.props.events.onRequestClose();
      }

      if (_this3.getIsOpen()) {
        _this3.setState({
          isOpen: false
        });
      }
    }
  });
  Object.defineProperty(this, "handleRequestFocusListboxOfPills", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref7) {
      var ref = _ref7.ref;

      if (ref) {
        _this3.activeSelectedOptionRef = ref;

        _this3.activeSelectedOptionRef.focus();
      }
    }
  });
  Object.defineProperty(this, "handleSelect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, _ref8) {
      var selection = _ref8.selection,
          option = _ref8.option;
      var newSelection;

      var isSelected = _this3.isSelected({
        selection: selection,
        option: option
      });

      var singleSelectAndSelectedWasNotClicked = !_this3.props.multiple && !isSelected;
      var multiSelectAndSelectedWasNotClicked = _this3.props.multiple && !isSelected;

      if (singleSelectAndSelectedWasNotClicked) {
        newSelection = [option];
      } else if (multiSelectAndSelectedWasNotClicked) {
        newSelection = _toConsumableArray(_this3.props.selection).concat([option]);
      } else {
        newSelection = reject(_this3.props.selection, option);
      }

      if (_this3.props.events.onSelect) {
        _this3.props.events.onSelect(event, {
          selection: newSelection
        });
      }

      _this3.handleClose();

      if (_this3.inputRef) {
        _this3.inputRef.focus();
      }
    }
  });
  Object.defineProperty(this, "isSelected", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref9) {
      var selection = _ref9.selection,
          option = _ref9.option;
      return !!find(selection, option);
    }
  });
  Object.defineProperty(this, "openDialog", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      if (_this3.props.events.onRequestOpen) {
        _this3.props.events.onRequestOpen();
      } else {
        _this3.setState({
          isOpen: true
        });
      }
    }
  });
  Object.defineProperty(this, "requestOpenMenu", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var isInlineSingleSelectionAndIsNotSelected = !_this3.props.multiple && _this3.props.selection.length === 0 && _this3.props.variant === 'inline-listbox';

      if (isInlineSingleSelectionAndIsNotSelected || _this3.props.multiple || _this3.props.variant === 'readonly') {
        _this3.openDialog();
      }
    }
  });
  Object.defineProperty(this, "renderBase", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref10) {
      var assistiveText = _ref10.assistiveText,
          labels = _ref10.labels,
          props = _ref10.props;
      return React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: "slds-combobox_container"
      }, React.createElement("div", {
        className: classNames('slds-combobox', 'slds-dropdown-trigger', 'slds-dropdown-trigger_click', 'ignore-react-onclickoutside', {
          'slds-is-open': _this3.getIsOpen()
        }, {
          'slds-has-error': props.errorText
        }, props.className),
        "aria-expanded": _this3.getIsOpen(),
        "aria-haspopup": "listbox" // eslint-disable-line jsx-a11y/aria-proptypes
        // used on menu's listbox
        ,
        "aria-owns": "".concat(_this3.getId(), "-listbox") // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        role: "combobox"
      }, React.createElement(InnerInput, {
        "aria-autocomplete": "list",
        "aria-controls": "".concat(_this3.getId(), "-listbox"),
        "aria-activedescendant": _this3.state.activeOption ? "".concat(_this3.getId(), "-listbox-option-").concat(_this3.state.activeOption.id) : null,
        "aria-describedby": _this3.getErrorId(),
        autoComplete: "off",
        className: "slds-combobox__input",
        containerProps: {
          className: 'slds-combobox__form-element',
          role: 'none'
        },
        iconRight: React.createElement(InputIcon, {
          category: "utility",
          name: "search",
          title: labels.inputIconTitle
        }),
        id: _this3.getId(),
        onFocus: _this3.handleInputFocus,
        onBlur: _this3.handleInputBlur,
        onKeyDown: _this3.handleKeyDown,
        inputRef: _this3.setInputRef,
        onClick: function onClick() {
          _this3.openDialog();
        },
        onChange: _this3.handleInputChange,
        placeholder: labels.placeholder,
        readOnly: !!(props.predefinedOptionsOnly && _this3.state.activeOption),
        required: props.required,
        role: "textbox",
        value: props.predefinedOptionsOnly ? _this3.state.activeOption && _this3.state.activeOption.label || props.value : props.value
      }), _this3.getDialog({
        menuRenderer: _this3.renderMenu({
          assistiveText: assistiveText,
          labels: labels
        })
      }))), React.createElement(SelectedListBox, {
        activeOption: _this3.state.activeSelectedOption,
        activeOptionIndex: _this3.state.activeSelectedOptionIndex,
        assistiveText: assistiveText,
        events: {
          onBlurPill: _this3.handleBlurPill,
          onClickPill: _this3.handlePillClickListboxOfPills,
          onRequestFocus: _this3.handleRequestFocusListboxOfPills,
          onRequestFocusOnNextPill: _this3.handleNavigateListboxOfPills,
          onRequestFocusOnPreviousPill: _this3.handleNavigateListboxOfPills,
          onRequestRemove: _this3.handleRemoveSelectedOption
        },
        id: _this3.getId(),
        labels: labels,
        selection: props.selection,
        listboxHasFocus: _this3.state.listboxHasFocus
      }), props.errorText && React.createElement("div", {
        className: "slds-has-error"
      }, React.createElement("div", {
        id: _this3.getErrorId(),
        className: "slds-form-element__help slds-has-error"
      }, props.errorText)));
    }
  });
  Object.defineProperty(this, "renderInlineMultiple", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref11) {
      var assistiveText = _ref11.assistiveText,
          labels = _ref11.labels,
          props = _ref11.props;
      return React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: classNames('slds-combobox_container', {
          'slds-has-inline-listbox': props.selection.length
        })
      }, props.selection.length ? React.createElement(SelectedListBox, {
        activeOption: _this3.state.activeSelectedOption,
        activeOptionIndex: _this3.state.activeSelectedOptionIndex,
        assistiveText: assistiveText,
        events: {
          onBlurPill: _this3.handleBlurPill,
          onClickPill: _this3.handlePillClickListboxOfPills,
          onRequestFocus: _this3.handleRequestFocusListboxOfPills,
          onRequestFocusOnNextPill: _this3.handleNavigateListboxOfPills,
          onRequestFocusOnPreviousPill: _this3.handleNavigateListboxOfPills,
          onRequestRemove: _this3.handleRemoveSelectedOption
        },
        id: _this3.getId(),
        labels: labels,
        selection: props.selection,
        listboxHasFocus: _this3.state.listboxHasFocus
      }) : null, React.createElement("div", {
        className: classNames('slds-combobox', 'slds-dropdown-trigger', 'slds-dropdown-trigger_click', 'ignore-react-onclickoutside', {
          'slds-is-open': _this3.getIsOpen()
        }, {
          'slds-has-error': props.errorText
        }, props.className),
        "aria-expanded": _this3.getIsOpen(),
        "aria-haspopup": "listbox" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        role: "combobox"
      }, React.createElement(InnerInput, {
        "aria-autocomplete": "list",
        "aria-controls": "".concat(_this3.getId(), "-listbox"),
        "aria-activedescendant": _this3.state.activeOption ? "".concat(_this3.getId(), "-listbox-option-").concat(_this3.state.activeOption.id) : null,
        "aria-describedby": _this3.getErrorId(),
        autoComplete: "off",
        className: "slds-combobox__input",
        containerProps: {
          'aria-expanded': _this3.getIsOpen(),
          'aria-haspopup': 'listbox',
          className: 'slds-combobox__form-element',
          role: 'none'
        },
        iconRight: React.createElement(InputIcon, {
          category: "utility",
          name: "search",
          title: labels.inputIconTitle
        }),
        id: _this3.getId(),
        onFocus: _this3.handleInputFocus,
        onBlur: _this3.handleInputBlur,
        onKeyDown: _this3.handleKeyDown,
        inputRef: _this3.setInputRef,
        onClick: function onClick() {
          _this3.openDialog();
        },
        onChange: _this3.handleInputChange,
        placeholder: labels.placeholder,
        readOnly: !!(props.predefinedOptionsOnly && _this3.state.activeOption),
        required: props.required,
        role: "textbox",
        value: props.predefinedOptionsOnly ? _this3.state.activeOption && _this3.state.activeOption.label || props.value : props.value
      }), _this3.getDialog({
        menuRenderer: _this3.renderMenu({
          assistiveText: assistiveText,
          labels: labels
        })
      }), props.errorText && React.createElement("div", {
        id: _this3.getErrorId(),
        className: "slds-form-element__help"
      }, props.errorText))));
    }
  });
  Object.defineProperty(this, "renderInlineSingle", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref12) {
      var assistiveText = _ref12.assistiveText,
          labels = _ref12.labels,
          props = _ref12.props;
      var iconLeft = props.selection[0] && props.selection[0].icon ? React.cloneElement(props.selection[0].icon, {
        containerClassName: 'slds-combobox__input-entity-icon'
      }) : null;
      var value = props.selection[0] && props.selection[0].label ? props.selection[0].label : props.value;
      /* eslint-disable jsx-a11y/role-supports-aria-props */

      return React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: classNames('slds-combobox_container', {
          'slds-has-inline-listbox': props.selection.length
        })
      }, React.createElement("div", {
        className: classNames('slds-combobox', 'slds-dropdown-trigger', 'slds-dropdown-trigger_click', 'ignore-react-onclickoutside', {
          'slds-is-open': _this3.getIsOpen()
        }, {
          'slds-has-error': props.errorText
        }, props.className),
        "aria-expanded": _this3.getIsOpen(),
        "aria-haspopup": "listbox" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        role: "combobox"
      }, React.createElement(InnerInput, {
        "aria-autocomplete": "list",
        "aria-controls": "".concat(_this3.getId(), "-listbox"),
        "aria-activedescendant": _this3.state.activeOption ? "".concat(_this3.getId(), "-listbox-option-").concat(_this3.state.activeOption.id) : null,
        "aria-describedby": _this3.getErrorId(),
        autoComplete: "off",
        className: "slds-combobox__input",
        containerProps: {
          className: 'slds-combobox__form-element',
          role: 'none'
        },
        iconRight: props.selection.length ? React.createElement(InputIcon, {
          assistiveText: assistiveText.removeSingleSelectedOption,
          buttonRef: function buttonRef(component) {
            _this3.buttonRef = component;
          },
          category: "utility",
          iconPosition: "right",
          name: "close",
          onClick: function onClick(event) {
            _this3.handleRemoveSelectedOption(event, {
              option: props.selection[0]
            });
          }
        }) : React.createElement(InputIcon, {
          category: "utility",
          name: "search"
        }),
        iconLeft: iconLeft,
        id: _this3.getId(),
        onFocus: _this3.handleInputFocus,
        onBlur: _this3.handleInputBlur,
        onKeyDown: _this3.handleKeyDown,
        inputRef: _this3.setInputRef,
        onClick: function onClick() {
          _this3.requestOpenMenu();
        },
        onChange: function onChange(event) {
          if (!props.selection.length) {
            _this3.handleInputChange(event);
          }
        },
        placeholder: labels.placeholder,
        readOnly: !!(props.predefinedOptionsOnly && _this3.state.activeOption) || !!props.selection.length,
        required: props.required,
        role: "textbox",
        value: props.predefinedOptionsOnly ? _this3.state.activeOption && _this3.state.activeOption.label || props.value : value
      }), _this3.getDialog({
        menuRenderer: _this3.renderMenu({
          assistiveText: assistiveText,
          labels: labels
        })
      }), props.errorText && React.createElement("div", {
        id: _this3.getErrorId(),
        className: "slds-form-element__help"
      }, props.errorText))));
    }
  });
  Object.defineProperty(this, "renderMenu", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref13) {
      var assistiveText = _ref13.assistiveText,
          labels = _ref13.labels;
      var menuVariant = {
        base: 'icon-title-subtitle',
        'inline-listbox': 'icon-title-subtitle',
        readonly: 'checkbox'
      };
      return React.createElement(Menu, {
        assistiveText: assistiveText,
        activeOption: _this3.state.activeOption,
        activeOptionIndex: _this3.state.activeOptionIndex,
        classNameMenu: _this3.props.classNameMenu,
        classNameMenuSubHeader: _this3.props.classNameMenuSubHeader,
        inheritWidthOf: _this3.props.inheritWidthOf,
        inputId: _this3.getId(),
        inputValue: _this3.props.value,
        isSelected: _this3.isSelected,
        itemVisibleLength: _this3.props.variant === 'readonly' ? _this3.props.readOnlyMenuItemVisibleLength : null,
        labels: labels,
        menuItem: _this3.props.menuItem,
        maxWidth: _this3.props.menuMaxWidth,
        options: _this3.props.options,
        onSelect: _this3.handleSelect,
        clearActiveOption: _this3.clearActiveOption,
        selection: _this3.props.selection,
        variant: menuVariant[_this3.props.variant]
      });
    }
  });
  Object.defineProperty(this, "renderReadOnlyMultiple", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref14) {
      var assistiveText = _ref14.assistiveText,
          labels = _ref14.labels,
          props = _ref14.props;
      var value = props.selection.length > 1 ? labels.multipleOptionsSelected || "".concat(props.selection.length, " options selected") : props.selection[0] && props.selection[0].label || '';
      /* eslint-disable jsx-a11y/role-supports-aria-props */

      return React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: "slds-combobox_container"
      }, React.createElement("div", {
        className: classNames('slds-combobox', 'slds-dropdown-trigger', 'slds-dropdown-trigger_click', 'ignore-react-onclickoutside', {
          'slds-is-open': _this3.getIsOpen()
        }, {
          'slds-has-error': props.errorText
        }, props.className),
        "aria-expanded": _this3.getIsOpen(),
        "aria-haspopup": "listbox" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        role: "combobox"
      }, React.createElement(InnerInput, {
        "aria-autocomplete": "list",
        "aria-controls": "".concat(_this3.getId(), "-listbox"),
        "aria-activedescendant": _this3.state.activeOption ? "".concat(_this3.getId(), "-listbox-option-").concat(_this3.state.activeOption.id) : null,
        "aria-describedby": _this3.getErrorId(),
        autoComplete: "off",
        className: "slds-combobox__input",
        containerProps: {
          'aria-expanded': _this3.getIsOpen(),
          'aria-haspopup': 'listbox',
          className: 'slds-combobox__form-element',
          role: 'none'
        },
        iconRight: React.createElement(InputIcon, {
          category: "utility",
          name: "down",
          variant: "combobox"
        }),
        id: _this3.getId(),
        onFocus: _this3.handleInputFocus,
        onBlur: _this3.handleInputBlur,
        onKeyDown: _this3.handleKeyDown,
        inputRef: _this3.setInputRef,
        onClick: function onClick() {
          _this3.requestOpenMenu();
        },
        onChange: function onChange(event) {
          if (!props.selection.length) {
            _this3.handleInputChange(event);
          }
        },
        placeholder: labels.placeholderReadOnly,
        readOnly: true,
        required: props.required,
        role: "textbox",
        value: value
      }), _this3.getDialog({
        menuRenderer: _this3.renderMenu({
          assistiveText: assistiveText,
          labels: labels
        })
      }))), React.createElement(SelectedListBox, {
        activeOption: _this3.state.activeSelectedOption,
        activeOptionIndex: _this3.state.activeSelectedOptionIndex,
        assistiveText: assistiveText,
        events: {
          onBlurPill: _this3.handleBlurPill,
          onClickPill: _this3.handlePillClickListboxOfPills,
          onRequestFocus: _this3.handleRequestFocusListboxOfPills,
          onRequestFocusOnNextPill: _this3.handleNavigateListboxOfPills,
          onRequestFocusOnPreviousPill: _this3.handleNavigateListboxOfPills,
          onRequestRemove: _this3.handleRemoveSelectedOption
        },
        id: _this3.getId(),
        labels: labels,
        selection: props.selection,
        listboxHasFocus: _this3.state.listboxHasFocus,
        variant: _this3.props.variant,
        renderAtSelectionLength: 2
      }), props.errorText && React.createElement("div", {
        className: "slds-has-error"
      }, React.createElement("div", {
        id: _this3.getErrorId(),
        className: "slds-form-element__help slds-has-error"
      }, props.errorText)));
    }
  });
  Object.defineProperty(this, "renderReadOnlySingle", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref15) {
      var assistiveText = _ref15.assistiveText,
          labels = _ref15.labels,
          props = _ref15.props;
      var value = props.selection[0] && props.selection[0].label || '';
      /* eslint-disable jsx-a11y/role-supports-aria-props */

      return React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: "slds-combobox_container"
      }, React.createElement("div", {
        // aria attributes have been moved to the `div` wrapping `input` to comply with ARIA 1.1.
        className: classNames('slds-combobox', 'slds-dropdown-trigger', 'slds-dropdown-trigger_click', 'ignore-react-onclickoutside', {
          'slds-is-open': _this3.getIsOpen()
        }, {
          'slds-has-error': props.errorText
        }, props.className),
        "aria-expanded": _this3.getIsOpen(),
        "aria-haspopup": "listbox" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        role: "combobox"
      }, React.createElement(InnerInput, {
        "aria-autocomplete": "list",
        "aria-controls": "".concat(_this3.getId(), "-listbox"),
        "aria-activedescendant": _this3.state.activeOption ? "".concat(_this3.getId(), "-listbox-option-").concat(_this3.state.activeOption.id) : null,
        "aria-describedby": _this3.getErrorId(),
        autoComplete: "off",
        className: "slds-combobox__input",
        containerProps: {
          'aria-expanded': _this3.getIsOpen(),
          'aria-haspopup': 'listbox',
          className: 'slds-combobox__form-element',
          role: 'none'
        },
        iconRight: React.createElement(InputIcon, {
          category: "utility",
          name: "down",
          variant: "combobox"
        }),
        id: _this3.getId(),
        onFocus: _this3.handleInputFocus,
        onBlur: _this3.handleInputBlur,
        onKeyDown: _this3.handleKeyDown,
        inputRef: _this3.setInputRef,
        onClick: function onClick() {
          _this3.requestOpenMenu();
        },
        onChange: function onChange(event) {
          if (!props.selection.length) {
            _this3.handleInputChange(event);
          }
        },
        placeholder: labels.placeholderReadOnly,
        readOnly: true,
        required: props.required,
        role: "textbox",
        value: _this3.state.activeOption && _this3.state.activeOption.label || value
      }), _this3.getDialog({
        menuRenderer: _this3.renderMenu({
          assistiveText: assistiveText,
          labels: labels
        })
      }), props.errorText && React.createElement("div", {
        id: _this3.getErrorId(),
        className: "slds-form-element__help"
      }, props.errorText))));
    }
  });
};

Combobox.contextTypes = {
  iconPath: PropTypes.string
};
Combobox.displayName = COMBOBOX;
Combobox.propTypes = propTypes;
Combobox.defaultProps = defaultProps;
export default Combobox;
//# sourceMappingURL=combobox.js.map