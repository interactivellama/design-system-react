function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/role-has-required-aria-props */
// # Lookup Component
// Implements the [Lookup design pattern](https://latest-204.lightningdesignsystem.com/components/lookups) in React.
// Based on SLDS v2.1.0-dev
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import escapeRegExp from 'lodash.escaperegexp';
import isBoolean from 'lodash.isboolean';
import isEqual from 'lodash.isequal';
import classNames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // Children

import Dialog from '../utilities/dialog';
import Button from '../button';
import Icon from '../icon';
import InputIcon from '../icon/input-icon';
import Input from '../forms/input'; // ### Event Helpers

import EventUtil from '../../utilities/event';
import KEYS from '../../utilities/key-code';
import Menu from './menu';
import { LOOKUP } from '../../utilities/constants';
/**
 * A function that takes a term string and an item and returns a truthy value if the item should be kept.
 */

var defaultFilter = function defaultFilter(term, item) {
  if (!term) return true;
  return item.data && item.data.type === 'section' || item.label.match(new RegExp(escapeRegExp(term), 'ig'));
};
/**
 * ** Lookup is deprecated. Please use an auto-complete Combobox instead.**
 *
 * Lookup is an advanced inline search form. The lookup can parse through single or multi scoped datasets. The parsed dataset can be filtered by single or multi option selects.
 *
 * This component is wrapped in a [higher order component to listen for clicks outside itself](https://github.com/kentor/react-click-outside) and thus requires use of `ReactDOM`.
 */


var Lookup = createReactClass({
  displayName: LOOKUP,
  propTypes: {
    /**
     * If present, the label associated with this `input` is overwritten
     * by this text and is visually not shown.
     */
    assistiveText: PropTypes.string,

    /**
     * Class names to be added to the tag classed with `slds-lookup`.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * If true, constrains the menu to the scroll parent. Has no effect if `isInline` is `true`.
     */
    constrainToScrollParent: PropTypes.bool,

    /**
     * ID for aria-describedby (e.g. for an error message or a description)
     */
    describedById: PropTypes.string,

    /**
     * Please select one of the following:
     * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
     * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
     * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
     */
    menuPosition: PropTypes.string,

    /**
     * This prop is passed onto the `input`. Prevents dropdown menu from opening. Also applies disabled styling to input.
     */
    disabled: PropTypes.bool,

    /**
     * Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
     */
    emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    /**
     * Custom function to filter the Lookup items when typing into input field. The default function is case-insensitive and uses the searchTerm to filter Lookup items on their labels.
     */
    filterWith: PropTypes.func,

    /**
     * If true, the menu is constrained to the window and may be flipped up. Has no effect if `isInline` is `true`. In other components, its opposite is used `hasStaticAlignment`.
     */
    flippable: PropTypes.bool,

    /**
     * Custom component for Lookup footer. The default footer allows user to add new item - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default footer, pass in <code>Lookup.DefaultFooter</code>.
     */
    footerRenderer: PropTypes.func,

    /**
     * Custom component for Lookup header. The default header has a search icon and shows the search term - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default header, pass in <code>Lookup.DefaultHeader</code>.
     */
    headerRenderer: PropTypes.func,

    /**
     * Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view categories.
     */
    iconCategory: PropTypes.string,

    /**
     * If true, icon color is white. If false, icon color is the default text color.
     */
    iconInverse: PropTypes.bool,

    /**
     * Name of icon. Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view icon names.
     */
    iconName: PropTypes.string,

    /**
     * Determines whether the input's icon will display that icon on the left or the right.
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * Renders menu within the wrapping trigger as a sibling of the button. By default, you will have an absolutely positioned container at an elevated z-index.
     */
    isInline: PropTypes.bool,

    /**
     * Whether or not the dropdown menu is open. This overrides the default behavior.
     */
    isOpen: PropTypes.bool,

    /**
     * Form label for input.
     */
    label: PropTypes.string,

    /**
     * Custom component that overrides the default Lookup Item component.
     */
    listItemLabelRenderer: PropTypes.func,

    /**
     * Triggered when input focus is removed.
     */
    onBlur: PropTypes.func,

    /**
     * Triggered when the contents of the input changes.
     */
    onChange: PropTypes.func,

    /**
     * Triggered when input is focused.
     */
    onFocus: PropTypes.func,

    /**
     * Function called when the lookup dropdown would like hide. This will turn the Lookup into into a controlled component. Please use with `isOpen`.
     */
    onRequestClose: PropTypes.func,

    /**
     * Function called when the lookup dropdown would like show. This will turn the Lookup into into a controlled component. Please use with `isOpen`.
     */
    onRequestOpen: PropTypes.func,

    /**
     * Triggered when the user scrolls in the dropdown menu.
     */
    onScroll: PropTypes.func,

    /**
     * Triggered when an item is selected from the dropdown menu.
     */
    onSelect: PropTypes.func,

    /**
     * Triggered when an item is an item is removed from the input.
     */
    onUnselect: PropTypes.func,

    /**
     * Item added to the dropdown menu.
     */
    options: PropTypes.array.isRequired,

    /**
     * Text that will appear in an empty input.
     */
    placeholder: PropTypes.string,

    /**
     * If true, adds asterisk next to input label to indicate it is a required field.
     */
    required: PropTypes.bool,

    /**
     * Text passed on to header search input of dropdown menu.
     */
    searchTerm: PropTypes.string,

    /**
     * Custom component that overrides the default section divider
     */
    sectionDividerRenderer: PropTypes.func,

    /**
     * Index of current selected item. To clear the selection, pass in -1.
     */
    selectedItem: PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      constrainToScrollParent: true,
      filterWith: defaultFilter,
      iconPosition: 'right',
      searchTerm: '',
      menuPosition: 'absolute'
    };
  },
  getInitialState: function getInitialState() {
    return {
      currentFocus: null,
      focusIndex: null,
      items: [],
      listLength: this.props.options.length,
      searchTerm: this.normalizeSearchTerm(this.props.searchTerm),
      selectedIndex: this.props.selectedItem
    };
  },
  componentWillMount: function componentWillMount() {
    // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
    checkProps(LOOKUP, this.props); // Keeps track of references of children for keyboard navigation

    this.pills = [];
  },
  componentDidMount: function componentDidMount() {
    this.modifyItems(this.props.options);
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.options) {
      this.modifyItems(newProps.options);
    }

    if (newProps.selectedItem !== this.props.selectedItem || !isEqual(newProps.options, this.props.options)) {
      this.setState({
        selectedIndex: newProps.selectedItem
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (!isNaN(parseInt(prevState.selectedIndex, 10)) && isNaN(parseInt(this.state.selectedIndex, 10))) {
      if (this.input) {
        this.input.focus();
      }
    } else if (isNaN(parseInt(prevState.selectedIndex, 10)) && !isNaN(parseInt(this.state.selectedIndex, 10))) {
      if (this.pills[this.state.selectedIndex]) {
        this.pills[this.state.selectedIndex].focus();
      }
    }
  },
  getClassName: function getClassName() {
    return classNames(this.props.className, 'slds-form-element slds-lookup', {
      'slds-has-selection': this.isSelected(),
      'slds-is-open': this.getIsOpen()
    });
  },
  setFirstIndex: function setFirstIndex() {
    var nextFocusIndex = 0;
    var filteredItem = this.state.items[0];

    if (this.menuComponent && this.menuComponent.getFilteredItemForIndex) {
      filteredItem = this.menuComponent.getFilteredItemForIndex(nextFocusIndex);
    }

    if (filteredItem && filteredItem.data.type === 'section') {
      nextFocusIndex += 1;
    }

    this.setState({
      focusIndex: nextFocusIndex
    });
  },
  getHeader: function getHeader() {
    var _this = this;

    var Header = this.props.headerRenderer;
    var headerActive = this.state.focusIndex === 0;
    return React.createElement(Header, _extends({
      ref: function ref(header) {
        _this.headerComponent = header;
      }
    }, this.props, {
      focusIndex: this.state.focusIndex,
      isActive: headerActive,
      onClose: this.handleClose,
      searchTerm: this.state.searchTerm,
      setFocus: this.setFocus
    }));
  },
  getFooter: function getFooter() {
    var _this2 = this;

    var Footer = this.props.footerRenderer;
    var numFocusable = this.getNumFocusableItems();
    var footerActive = this.state.focusIndex === numFocusable;
    return React.createElement(Footer, _extends({
      ref: function ref(footer) {
        _this2.footerComponent = footer;
      }
    }, this.props, {
      focusIndex: this.state.focusIndex,
      isActive: footerActive,
      onClose: this.handleClose,
      setFocus: this.setFocus
    }));
  },
  setFocus: function setFocus(id) {
    this.setState({
      currentFocus: id
    });
  },
  getIsOpen: function getIsOpen() {
    return !!(isBoolean(this.props.isOpen) ? this.props.isOpen : this.state.isOpen);
  },
  getListLength: function getListLength(qty) {
    if (qty !== this.state.listLength) {
      this.setState({
        listLength: qty
      });
    }
  },
  getNumFocusableItems: function getNumFocusableItems() {
    var offset = 0;

    if (this.footerComponent) {
      offset += 1;
    }

    if (this.headerComponent) {
      offset += 1;
    }

    return this.state.listLength - 1 + offset;
  },
  // =================================================
  // Using down/up keys, set Focus on list item and assign it to aria-activedescendant attribute in input.
  // Need to keep track of filtered list length to be able to increment/decrement the focus index so it's contained to the number of available list items.
  increaseIndex: function increaseIndex() {
    var numFocusable = this.getNumFocusableItems();
    var nextFocusIndex = this.state.focusIndex < numFocusable ? this.state.focusIndex + 1 : 0;
    var filteredItem = this.menuComponent.getFilteredItemForIndex(nextFocusIndex);

    if (filteredItem && filteredItem.data.type === 'section') {
      nextFocusIndex += 1;
    }

    this.setState({
      focusIndex: nextFocusIndex
    });
  },
  decreaseIndex: function decreaseIndex() {
    var numFocusable = this.getNumFocusableItems();
    var prevFocusIndex = this.state.focusIndex > 0 ? this.state.focusIndex - 1 : numFocusable;
    var filteredItem = this.menuComponent.getFilteredItemForIndex(prevFocusIndex);

    if (filteredItem && filteredItem.data.type === 'section') {
      prevFocusIndex = prevFocusIndex === 0 ? numFocusable : prevFocusIndex - 1;
    }

    this.setState({
      focusIndex: prevFocusIndex
    });
  },
  // =================================================
  // Select menu item (onClick or on key enter/space)
  selectItem: function selectItem(itemId) {
    if (itemId) {
      var index = itemId.replace('item-', '');
      this.selectItemByIndex(index);
    }
  },
  selectItemByIndex: function selectItemByIndex(index) {
    if (index >= 0 && index < this.state.items.length) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }

      this.setState({
        isOpen: false,
        selectedIndex: index,
        searchTerm: ''
      });
      var data = this.state.items[index].data;

      if (this.props.onSelect) {
        this.props.onSelect(data);
      }
    }
  },
  handleDeleteSelected: function handleDeleteSelected() {
    if (this.props.onRequestOpen) {
      this.props.onRequestOpen();
    }

    this.setState({
      selectedIndex: null,
      isOpen: true
    });
    this.focusInput();

    if (this.props.onUnselect) {
      this.props.onUnselect();
    }
  },
  // =================================================
  // Event Listeners on Input
  handleClose: function handleClose() {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }

    this.setState({
      isOpen: false,
      focusIndex: null,
      currentFocus: null
    });
  },
  handleClickOutside: function handleClickOutside() {
    this.handleClose();
  },
  handleEscape: function handleEscape(event) {
    if (this.getIsOpen() && event) {
      EventUtil.trap(event);
    }

    this.handleClose();
  },
  handleCancel: function handleCancel() {
    this.handleClose();
  },
  handleClick: function handleClick() {
    if (this.props.onRequestOpen) {
      this.props.onRequestOpen();
    }

    this.setState({
      isOpen: true
    });
  },
  handleBlur: function handleBlur(event) {
    if (this.props.onBlur) {
      var target = event.target || event.currentTarget;
      this.props.onBlur(target.value);
    }
  },
  handleFocus: function handleFocus(event) {
    if (this.props.onFocus) {
      var target = event.target || event.currentTarget;
      this.props.onFocus(target.value);
    }

    if (this.props.onRequestOpen) {
      this.props.onRequestOpen();
    }

    this.setState({
      isOpen: true
    });
  },
  handleChange: function handleChange(event) {
    var target = event.target || event.currentTarget;
    this.setState({
      searchTerm: this.normalizeSearchTerm(target.value)
    });

    if (this.props.onChange) {
      this.props.onChange(target.value);
    }
  },
  handleKeyDown: function handleKeyDown(event) {
    var _this3 = this;

    if (event.keyCode) {
      // If user hits esc key or tab key, close menu
      if (event.keyCode === KEYS.ESCAPE) {
        this.handleEscape(event);
      } else if (event.keyCode === KEYS.TAB) {
        // remove the focus on input, tab focus shoud move to next tabbale elemnt
        setTimeout(function () {
          _this3.handleClose();
        }, 200);
        this.handleBlur(event);
      } else {
        this.handleClick();
      } // If user hits down key, advance aria activedescendant to next item


      if (event.keyCode === KEYS.DOWN) {
        EventUtil.trapImmediate(event);

        if (this.state.focusIndex === null) {
          this.setFirstIndex();
        } else {
          this.increaseIndex();
        }
      } else if (event.keyCode === KEYS.UP) {
        // If user hits up key, advance aria activedescendant to previous item
        EventUtil.trapImmediate(event);
        var numFocusable = this.getNumFocusableItems();

        if (this.state.focusIndex === null) {
          this.setState({
            focusIndex: numFocusable
          });
        } else {
          this.decreaseIndex();
        }
      } else if (event.keyCode === KEYS.ENTER && this.state.focusIndex !== null) {
        // If user hits enter, select current activedescendant item
        EventUtil.trapImmediate(event); // If the focus is on the first fixed Action Item in Menu, click it

        if (this.headerComponent && this.state.focusIndex === 0) {
          this.headerComponent.handleClick();
        } else if (this.footerComponent && this.state.focusIndex === this.state.listLength + 1) {
          // If the focus is on the last fixed Action Item in Menu, click it
          this.footerComponent.handleClick();
        } else {
          // If not, then select menu item
          this.selectItem(this.state.currentFocus);
        }
      }
    }
  },
  handlePillKeyDown: function handlePillKeyDown(event) {
    if (event.keyCode) {
      if (event.keyCode === KEYS.DELETE || event.keyCode === KEYS.BACKSPACE) {
        EventUtil.trapImmediate(event);
        this.handleDeleteSelected();
      }
    }
  },
  normalizeSearchTerm: function normalizeSearchTerm(string) {
    return (string || '').toString().replace(/^\s+/, '');
  },
  inputRefId: function inputRefId() {
    return "".concat(this.props.label, "Lookup");
  },
  focusInput: function focusInput() {
    this.focusOnRender = true;
  },
  isSelected: function isSelected() {
    var hasSelection = !isNaN(parseInt(this.state.selectedIndex, 10)) && this.state.selectedIndex >= 0;
    return hasSelection;
  },
  modifyItems: function modifyItems(itemsToModify) {
    var items = itemsToModify.map(function (item, index) {
      return {
        id: "item-".concat(index),
        label: item.label,
        data: item
      };
    });
    this.setState({
      items: items
    });
  },
  // =================================================
  // Rendering Things
  renderMenuContent: function renderMenuContent() {
    var _this4 = this;

    return React.createElement(Menu, {
      ref: function ref(menu) {
        _this4.menuComponent = menu;
      },
      emptyMessage: this.props.emptyMessage,
      filterWith: this.props.filterWith,
      focusIndex: this.state.focusIndex,
      footer: this.props.footerRenderer ? this.getFooter() : null,
      getListLength: this.getListLength,
      header: this.props.headerRenderer ? this.getHeader() : null,
      iconCategory: this.props.iconCategory,
      iconInverse: this.props.iconInverse,
      iconName: this.props.iconName,
      items: this.state.items,
      label: this.props.label,
      listItemLabelRenderer: this.props.listItemLabelRenderer,
      listLength: this.state.listLength,
      onSelect: this.selectItem,
      searchTerm: this.state.searchTerm,
      sectionDividerRenderer: this.props.sectionDividerRenderer,
      setFocus: this.setFocus
    });
  },
  renderInlineMenu: function renderInlineMenu() {
    return this.getIsOpen() ? React.createElement("div", {
      className: "ignore-react-onclickoutside slds-lookup__menu",
      role: "listbox"
    }, this.renderMenuContent()) : null;
  },
  renderSeparateMenu: function renderSeparateMenu() {
    var _this5 = this;

    // FOR BACKWARDS COMPATIBILITY
    var menuPosition = this.props.isInline ? 'relative' : this.props.menuPosition; // eslint-disable-line react/prop-types

    return this.getIsOpen() ? React.createElement(Dialog, {
      align: "bottom",
      className: "slds-lookup__menu slds-show",
      closeOnTabKey: true,
      contentsClassName: "slds-lookup__menu slds-show",
      context: this.context,
      inheritWidthOf: "target",
      onClose: this.handleCancel,
      hasStaticAlignement: !this.props.flippable,
      constrainToScrollParent: this.props.constrainToScrollParent,
      onRequestTargetElement: function onRequestTargetElement() {
        return _this5.input;
      },
      position: menuPosition
    }, this.renderMenuContent()) : null;
  },
  renderInput: function renderInput() {
    var _this6 = this;

    return React.createElement(Input, {
      "aria-activedescendant": this.state.currentFocus ? this.state.currentFocus : '',
      "aria-autocomplete": "list",
      "aria-describedby": this.props.describedById,
      "aria-expanded": !!this.getIsOpen(),
      assistiveText: this.props.assistiveText,
      className: "slds-lookup__search-input",
      disabled: this.props.disabled,
      iconRight: React.createElement(InputIcon, {
        assistiveText: "Search",
        category: "utility",
        name: "search"
      }),
      id: this.inputRefId(),
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      inputRef: function inputRef(component) {
        _this6.input = component;

        if (_this6.focusOnRender) {
          _this6.input.focus();

          _this6.focusOnRender = false;
        }
      },
      placeholder: this.props.placeholder,
      role: "combobox",
      type: "text",
      value: this.state.searchTerm
    });
  },
  renderSelectedItem: function renderSelectedItem() {
    var _this7 = this;

    var selectedItem = this.props.options[this.state.selectedIndex].label;
    var renderIcon = this.props.iconName ? React.createElement(Icon, {
      category: this.props.iconCategory,
      className: "slds-icon slds-pill__icon",
      inverse: this.props.iconInverse,
      name: this.props.iconName
    }) : null;
    var labelClassName = this.props.iconName ? 'slds-pill__label' : 'slds-pill__label slds-m-left--x-small'; // i18n

    return React.createElement("div", {
      className: "slds-pill__container"
    }, React.createElement("a", {
      href: "javascript:void(0)",
      className: "slds-pill",
      ref: function ref(pill) {
        _this7.pills[_this7.state.selectedIndex] = pill;
      },
      onKeyDown: this.handlePillKeyDown
    }, renderIcon, React.createElement("span", {
      className: labelClassName
    }, selectedItem), React.createElement(Button, {
      assistiveText: "Press delete to remove",
      className: "slds-pill__remove slds-button--icon-bare",
      iconCategory: "utility",
      iconName: "close",
      onClick: this.handleDeleteSelected,
      tabIndex: "-1",
      variant: "icon"
    })));
  },
  renderLabel: function renderLabel() {
    var inputLabel;
    var required = this.props.required ? React.createElement("span", {
      className: "slds-required"
    }, "*") : null;

    if (this.isSelected()) {
      // inline style override
      inputLabel = React.createElement("span", {
        className: "slds-form-element__label",
        style: {
          width: '100%'
        }
      }, required, this.props.label);
    } else {
      inputLabel = React.createElement("label", {
        className: "slds-form-element__label",
        htmlFor: this.inputRefId(),
        style: {
          width: '100%'
        }
      }, required, this.props.label);
    }

    return inputLabel;
  },
  render: function render() {
    var isInline;
    /* eslint-disable react/prop-types */

    if (this.props.isInline) {
      isInline = true;
    } else if (this.props.modal !== undefined) {
      isInline = !this.props.modal;
    }
    /* eslint-enable react/prop-types */


    var formElementControlClasses = _defineProperty({
      'slds-form-element__control': true
    }, "slds-input-has-icon slds-input-has-icon--".concat(this.props.iconPosition), !this.isSelected());

    return React.createElement("div", {
      className: this.getClassName(),
      "data-select": "single",
      "data-scope": "single",
      onScroll: this.props.onScroll
    }, this.props.label ? this.renderLabel() : null, React.createElement("div", {
      className: classNames(formElementControlClasses)
    }, this.isSelected() ? this.renderSelectedItem() : null, !this.isSelected() ? this.renderInput() : null), isInline ? this.renderInlineMenu() : this.renderSeparateMenu());
  }
});
Lookup.contextTypes = {
  iconPath: PropTypes.string
};
export default Lookup;
//# sourceMappingURL=lookup.js.map