function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign'; // ### isBoolean

import isBoolean from 'lodash.isboolean'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import Dialog from '../utilities/dialog';
import CalendarWrapper from './private/calendar-wrapper';
import InputIcon from '../icon/input-icon';
import Input from '../forms/input'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import EventUtil from '../../utilities/event';
import KEYS from '../../utilities/key-code';
import { DATE_PICKER } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `nextMonth`: Label for button to go to the next month _Tested with snapshot testing._
   * * `openCalendar`: Call to action label for calendar dialog trigger _Tested with snapshot testing._
   * * `previousMonth`: Label for button to go to the previous month _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    nextMonth: PropTypes.string,
    openCalendar: PropTypes.string,
    previousMonth: PropTypes.string
  }),

  /**
   * Aligns the right or left side of the menu with the respective side of the trigger. _Tested with snapshot testing._
   */
  align: PropTypes.oneOf(['left', 'right']),

  /**
   * Pass in an `<Input />` component to customize it. Event handlers for the input (if needed) should be added here and not to this component. `<Input onKeyDown... />`.` _Tested with Mocha framework._
   */
  children: PropTypes.node,

  /**
   * CSS classes to be added to tag with `slds-datepicker`. If you are looking for the outer DOM node (slds-dropdown-trigger), please review `triggerClassName`. _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Disable input and calendar. _Tested with Mocha framework._
   */
  disabled: PropTypes.bool,

  /**
   * This function callback receives a data object with a key of `date`. Write your own validation and return `true` if the date should be disabled, otherwise please return `false`. The value of `date` is the day rendered in the calendar with the current local time and timezone.
   */
  dateDisabled: PropTypes.func,

  /**
   * Date formatting function. _Tested with snapshot testing._
   */
  formatter: PropTypes.func,

  /**
   * Value of input that gets passed to `parser` prop. Set the `value` prop if using a `Date` object. Use an external library such as [MomentJS](https://github.com/moment/moment/) if additional date formatting or internationalization is needed. _Not tested._
   */
  formattedValue: PropTypes.string,

  /**
   * Prevents the dropdown from changing position based on the viewport/window. If set to true your dropdowns can extend outside the viewport _and_ overflow outside of a scrolling parent. If this happens, you might want to consider making the dropdowns contents scrollable to fit the menu on the screen. `hasStaticAlignment` disables this behavior and allows this component to extend beyond boundary elements. _Not tested._
   */
  hasStaticAlignment: PropTypes.bool,

  /**
   * HTML id for component _Tested with snapshot testing._
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `abbreviatedWeekDays`: Three letter abbreviations of the days of the week, starting on Sunday. _Tested with snapshot testing._
   * * `months`: Names of the months. _Tested with snapshot testing._
   * * `label`: This label appears above the input.
   * * `placeholder`: Placeholder text for input. _Tested with snapshot testing._
   * * `today`: Label of shortcut to jump to today within the calendar. This is also used for assistive text on today's date. _Tested with snapshot testing._
   * * `weekDays`: Full names of the seven days of the week, starting on Sunday. _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    abbreviatedWeekDays: PropTypes.array,
    label: PropTypes.string,
    months: PropTypes.array,
    placeholder: PropTypes.string,
    today: PropTypes.string,
    weekDays: PropTypes.array
  }),

  /**
   * Forces the dropdown to be open or closed. See controlled/uncontrolled callback/prop pattern for more on suggested use view [Concepts and Best Practices](https://github.com/salesforce-ux/design-system-react/blob/master/CONTRIBUTING.md#concepts-and-best-practices)
   */
  isOpen: PropTypes.bool,

  /**
   * Makes Monday the first day of the week. _Tested with snapshot testing._
   */
  isIsoWeekday: PropTypes.bool,

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  menuPosition: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

  /**
   * Triggered when the user wants to focus on a new day with the keyboard. If the target node is a day it will return the keyboard event a data object with the shape: `{date: [Date object]}`. Event will be `null` when new month is re-rendered.  _Tested with Mocha framework._
   */
  onCalendarFocus: PropTypes.func,

  /**
   * Triggered when the date changes. `onChange` can be used for form validation if needed. It receives an event and a data object in the shape: `{date: [Date object], formattedDate: [string], timezoneOffset: [number]}`. `data.date` is Coordinated Universal Time (UTC), but the days of the calendar are in local time of the user. The `timezoneOffset` is the difference, in minutes, between UTC and the local time. Please note that this means that the offset is positive if the local timezone is behind UTC and negative if it is ahead. `timezoneOffset` is in minutes, for hours divide by `60`. _Tested with Mocha framework._
   */
  onChange: PropTypes.func,

  /**
   * Triggered when the calendar is closed. _Tested with Mocha framework._
   */
  onClose: PropTypes.func,

  /**
   * Triggered when the calendar has opened. _Tested with Mocha framework._
   */
  onOpen: PropTypes.func,

  /**
   * Function called when the calendar dialog would like hide. This will turn the calendar dialog into into a controlled component. Please use with `isOpen`. _Tested with Mocha framework._
   */
  onRequestClose: PropTypes.func,

  /**
   * Function called when the calendar dialog would like show. This will turn the calendar dialog into into a controlled component. Please use with `isOpen`. _Tested with Mocha framework._
   */
  onRequestOpen: PropTypes.func,

  /**
   * Custom function to parse date string into and return a `Date` object. Default function passes the input value to `Date()` and prays for a miracle. Use an external library such as [MomentJS](https://github.com/moment/moment/) if additional date parsing is needed. _Tested with snapshot testing._
   */
  parser: PropTypes.func,

  /**
   * Offset of year from current year that can be selected in the year selection dropdown. (2017 - 5 = 2012). _Tested with snapshot testing._
   */
  relativeYearFrom: PropTypes.number,

  /**
   * Offset of year from current year that can be selected in the year selection dropdown. (2017 + 5 = 2012). _Tested with snapshot testing._
   */
  relativeYearTo: PropTypes.number,

  /**
   * CSS classes to be added to tag with `slds-datepicker-trigger`. This is typically a wrapping `div` around the input. _Tested with snapshot testing._
   */
  triggerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Sets date with a `Date` ECMAScript object. _Tested with snapshot testing._
   */
  value: PropTypes.instanceOf(Date)
};
var defaultProps = {
  align: 'left',
  assistiveText: {
    nextMonth: 'Next month',
    openCalendar: 'Open Calendar',
    previousMonth: 'Previous month'
  },
  formatter: function formatter(date) {
    return date ? "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear()) : '';
  },
  labels: {
    abbreviatedWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    placeholder: 'Pick a Date',
    today: 'Today',
    weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  menuPosition: 'absolute',
  parser: function parser(str) {
    return new Date(str);
  },
  relativeYearFrom: -5,
  relativeYearTo: 5,
  dateDisabled: function dateDisabled() {
    return false;
  }
};
/**
 * A date picker is a non text input form element. You can select a single date from a popup or inline calendar. The date picker supplied by this library comes with an input by default, but other components could be passed in as children--however, pairing with other components is untested.
 *
 * The calendar is rendered with time/dates based on local browser time of the client. All dates are in local user timezones. Another way to put it is if a user selects a date, they are selecting midnight their time on that day and not mightnight in UTC. If this component is being used in conjuction with a timezone input, you may want to convert dates provided to UTC in that timezone.
 *
 * This component is wrapped in a [higher order component to listen for clicks outside itself](https://github.com/kentor/react-click-outside) and thus requires use of `ReactDOM`.
 */

var Datepicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Datepicker, _React$Component);

  function Datepicker(props) {
    var _this;

    _classCallCheck(this, Datepicker);

    _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, props)); // Please remove `strValue` on the next breaking change.

    var formattedValue = props.formattedValue || props.strValue; // eslint-disable-line react/prop-types

    var dateString = props.formatter(props.value);
    var initDate = props.value ? dateString : formattedValue;
    _this.getId = _this.getId.bind(_assertThisInitialized(_this));
    _this.getIsOpen = _this.getIsOpen.bind(_assertThisInitialized(_this));
    _this.handleCalendarChange = _this.handleCalendarChange.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind(_assertThisInitialized(_this));
    _this.openDialog = _this.openDialog.bind(_assertThisInitialized(_this));
    _this.parseDate = _this.parseDate.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
    _this.getDialog = _this.getDialog.bind(_assertThisInitialized(_this));
    _this.getDatePicker = _this.getDatePicker.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      value: props.value,
      formattedValue: initDate || '',
      inputValue: initDate || ''
    };
    return _this;
  }

  _createClass(Datepicker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate(); // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)

      checkProps(DATE_PICKER, this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value && this.props.value) {
        var currentDate = this.props.value.getTime();
        var nextDate = nextProps.value.getTime();

        if (currentDate !== nextDate) {
          this.setState({
            value: nextProps.value,
            formattedValue: this.props.formatter(nextProps.value),
            inputValue: this.props.formatter(nextProps.value)
          });
        }
      }
    }
  }, {
    key: "getDatePicker",
    value: function getDatePicker(_ref) {
      var _this2 = this;

      var labels = _ref.labels,
          assistiveText = _ref.assistiveText;
      var date = this.state.formattedValue ? this.parseDate(this.state.formattedValue) : this.state.value;
      return React.createElement(CalendarWrapper // Please remove `abbrWeekDayLabels` on the next breaking change.
      , {
        abbreviatedWeekDayLabels: this.props.abbreviatedWeekDayLabels || // eslint-disable-line react/prop-types
        this.props.abbrWeekDayLabels || // eslint-disable-line react/prop-types
        labels.abbreviatedWeekDays
        /* Remove || for assistiveText at next breaking change */
        ,
        assistiveTextNextMonth: this.props.assistiveTextNextMonth || assistiveText.nextMonth // eslint-disable-line react/prop-types
        ,
        assistiveTextPreviousMonth: this.props.assistiveTextPreviousMonth || assistiveText.previousMonth // eslint-disable-line react/prop-types
        ,
        id: this.getId(),
        isIsoWeekday: this.props.isIsoWeekday,
        monthLabels: this.props.monthLabels || labels.months // eslint-disable-line react/prop-types
        ,
        onCalendarFocus: this.props.onCalendarFocus,
        dateDisabled: this.props.dateDisabled,
        onRequestClose: this.handleRequestClose,
        onSelectDate: this.handleCalendarChange,
        relativeYearFrom: this.props.relativeYearFrom,
        relativeYearTo: this.props.relativeYearTo,
        selectedDate: date || new Date(),
        selectedDateRef: function selectedDateRef(component) {
          _this2.selectedDateCell = component;
        },
        todayLabel: this.props.todayLabel || labels.today // eslint-disable-line react/prop-types
        ,
        weekDayLabels: this.props.weekDayLabels || labels.weekDays // eslint-disable-line react/prop-types

      });
    }
  }, {
    key: "getDialog",
    value: function getDialog(_ref2) {
      var _this3 = this;

      var labels = _ref2.labels,
          assistiveText = _ref2.assistiveText;
      // FOR BACKWARDS COMPATIBILITY
      var menuPosition = this.props.isInline ? 'relative' : this.props.menuPosition; // eslint-disable-line react/prop-types
      // SLDS override

      var style = this.props.menuPosition !== 'relative' ? {
        transform: 'none'
      } : {};
      return !this.props.disabled && this.getIsOpen() ? React.createElement(Dialog, {
        align: "bottom ".concat(this.props.align),
        contentsClassName: classNames('slds-datepicker slds-dropdown', {
          'slds-dropdown--right': this.props.menuPosition === 'relative' && this.props.align === 'right',
          'slds-dropdown--left': this.props.menuPosition === 'relative' && this.props.align === 'left'
        }, this.props.className),
        context: this.context,
        hasStaticAlignment: this.props.hasStaticAlignment,
        style: style,
        onClose: this.handleClose,
        onOpen: this.handleOpen,
        onRequestTargetElement: function onRequestTargetElement() {
          return _this3.inputRef;
        },
        position: menuPosition,
        portalMount: this.props.portalMount
      }, this.getDatePicker({
        labels: labels,
        assistiveText: assistiveText
      })) : null;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getIsOpen",
    value: function getIsOpen() {
      return !!(isBoolean(this.props.isOpen) ? this.props.isOpen : this.state.isOpen);
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(component) {
      this.inputRef = component; // yes, this is a re-render triggered by a render.
      // Dialog/Popper.js cannot place the popover until
      // the trigger/target DOM node is mounted. This
      // way `findDOMNode` is not called and parent
      // DOM nodes are not queried.

      if (!this.state.inputRendered) {
        this.setState({
          inputRendered: true
        });
      }
    }
  }, {
    key: "handleCalendarChange",
    value: function handleCalendarChange(event, _ref3) {
      var date = _ref3.date;
      this.setState({
        value: date,
        formattedValue: this.props.formatter(date),
        inputValue: this.props.formatter(date)
      });
      this.handleRequestClose();

      if (this.props.onChange) {
        this.props.onChange(event, {
          date: date,
          formattedDate: this.props.formatter(date),
          timezoneOffset: date.getTimezoneOffset()
        });
      } // Please remove `onDateChange` on the next breaking change.

      /* eslint-disable react/prop-types */


      if (this.props.onDateChange) {
        this.props.onDateChange(date, this.props.formatter(date));
      }
      /* eslint-enable react/prop-types */

    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.handleRequestClose();
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState({
        formattedValue: event.target.value,
        inputValue: event.target.value
      });
      var date = this.props.parser(event.target.value);

      if (this.props.onChange) {
        this.props.onChange(event, {
          date: date,
          formattedDate: event.target.value,
          timezoneOffset: date.getTimezoneOffset()
        });
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      // Don't open if user is selecting text
      if (event.keyCode && !event.shiftKey && (event.keyCode === KEYS.DOWN || event.keyCode === KEYS.UP)) {
        EventUtil.trapEvent(event);
        this.setState({
          isOpen: true
        });
      } // Please remove `onKeyDown` on the next breaking change.

      /* eslint-disable react/prop-types */


      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
      /* eslint-enable react/prop-types */

    }
  }, {
    key: "handleOpen",
    value: function handleOpen(event, _ref4) {
      var portal = _ref4.portal;

      if (this.props.onOpen) {
        this.props.onOpen(event, {
          portal: portal
        });
      }

      if (this.selectedDateCell) {
        this.selectedDateCell.focus();
      }
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }

      if (this.getIsOpen()) {
        this.setState({
          isOpen: false
        });

        if (this.inputRef) {
          this.inputRef.focus();
        }
      }
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      if (this.props.onRequestOpen) {
        this.props.onRequestOpen();
      } else {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "parseDate",
    value: function parseDate(formattedValue) {
      var parsedDate = this.props.parser(formattedValue);

      if (Object.prototype.toString.call(parsedDate) !== '[object Date]' || isNaN(parsedDate.getTime())) {
        parsedDate = new Date();
      }

      return parsedDate;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // Merge objects of strings with their default object
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var clonedInputProps = {
        disabled: this.props.children && !!this.props.children.props.disabled || this.props.disabled,
        iconRight: this.props.children && !!this.props.children.props.iconRight || React.createElement(InputIcon // Remove || for assistiveText at next breaking change
        , {
          assistiveText: this.props.assistiveTextOpenCalendar || assistiveText.openCalendar // eslint-disable-line react/prop-types
          ,
          "aria-haspopup": true,
          "aria-expanded": this.getIsOpen(),
          category: "utility",
          name: "event",
          onClick: this.openDialog,
          type: "button"
        }),
        id: this.getId(),
        inputRef: function inputRef(component) {
          _this4.setInputRef(component);
        },
        label: this.props.children && this.props.children.props.label || this.props.label || // eslint-disable-line react/prop-types
        labels.label,
        onBlur: this.props.children && this.props.children.props.onBlur || this.props.onBlur,
        // eslint-disable-line react/prop-types
        onChange: this.handleInputChange,
        onClick: function onClick() {
          _this4.openDialog();

          if (_this4.props.children && _this4.props.children.props.onClick) {
            _this4.props.children.props.onClick();
          }
        },
        onFocus: this.props.children && this.props.children.props.onFocus || this.props.onFocus,
        // eslint-disable-line react/prop-types
        onKeyDown: this.props.children && this.props.children.props.onKeyDown || this.handleKeyDown,
        placeholder: this.props.children && this.props.children.props.placeholder || this.props.placeholder || // eslint-disable-line react/prop-types
        labels.placeholder,
        required: this.props.children && this.props.children.props.required || this.props.required,
        // eslint-disable-line react/prop-types
        value: this.props.children && this.props.children.props.value || this.state.inputValue
      };
      var clonedInput = this.props.children ? React.cloneElement(this.props.children, _objectSpread({}, clonedInputProps)) : React.createElement(Input, clonedInputProps);
      return React.createElement("div", {
        className: classNames('slds-dropdown-trigger', 'slds-dropdown-trigger--click', 'ignore-react-onclickoutside', {
          'slds-is-open': this.getIsOpen()
        }, this.props.triggerClassName)
      }, clonedInput, this.getDialog({
        labels: labels,
        assistiveText: assistiveText
      }));
    }
  }]);

  return Datepicker;
}(React.Component);

Datepicker.contextTypes = {
  iconPath: PropTypes.string
};
Datepicker.displayName = DATE_PICKER;
Datepicker.propTypes = propTypes;
Datepicker.defaultProps = defaultProps;
export default Datepicker;
//# sourceMappingURL=date-picker.js.map