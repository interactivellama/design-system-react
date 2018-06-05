function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames';
import EventUtil from '../../../utilities/event';
import DateUtil from '../../../utilities/date';
import KEYS from '../../../utilities/key-code';

var handleClick = function handleClick(event, _ref) {
  var date = _ref.date,
      onSelectDate = _ref.onSelectDate;
  onSelectDate(event, {
    date: date
  });
};

var handleKeyDown = function handleKeyDown(event, _ref2) {
  var _keyDownCallbacks;

  var date = _ref2.date,
      onCalendarBlur = _ref2.onCalendarBlur,
      onSelectDate = _ref2.onSelectDate,
      onKeyboardNavigateToPreviousDay = _ref2.onKeyboardNavigateToPreviousDay,
      onKeyboardNavigateToNextDay = _ref2.onKeyboardNavigateToNextDay,
      onKeyboardNavigateToPreviousWeek = _ref2.onKeyboardNavigateToPreviousWeek,
      onKeyboardNavigateToNextWeek = _ref2.onKeyboardNavigateToNextWeek;
  var keyDownCallbacks = (_keyDownCallbacks = {}, _defineProperty(_keyDownCallbacks, KEYS.SPACE, function () {
    onSelectDate(event, {
      date: date
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.ENTER, function () {
    onSelectDate(event, {
      date: date
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.TAB, function () {
    onCalendarBlur(event, {
      direction: 'next'
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.LEFT, function () {
    onKeyboardNavigateToPreviousDay(event, {
      date: date
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.RIGHT, function () {
    onKeyboardNavigateToNextDay(event, {
      date: date
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.UP, function () {
    onKeyboardNavigateToPreviousWeek(event, {
      date: date
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.DOWN, function () {
    onKeyboardNavigateToNextWeek(event, {
      date: date
    });
  }), _keyDownCallbacks);

  var shiftKeyDownCallbacks = _defineProperty({}, KEYS.TAB, function () {
    onCalendarBlur(event, {
      direction: 'previous'
    });
  });

  if (event.keyCode) {
    if (event.shiftKey && keyDownCallbacks[event.keyCode]) {
      EventUtil.trapEvent(event);
      shiftKeyDownCallbacks[event.keyCode]();
    } else if (keyDownCallbacks[event.keyCode]) {
      EventUtil.trapEvent(event);
      keyDownCallbacks[event.keyCode]();
    }
  }
};

var DatepickerCalendarDay = function DatepickerCalendarDay(props) {
  var isCurrentMonth = DateUtil.isSameMonth(props.date, props.initialDateForCalendarRender);
  var isToday = DateUtil.isToday(props.date);
  var isSelectedDay = DateUtil.isSameDay(props.date, props.selectedDate);
  var isFirstDayOfMonth = DateUtil.isFirstDayOfMonth(props.date);
  var isDisabled = !isCurrentMonth || props.disabled;
  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    React.createElement("td", {
      "aria-disabled": isDisabled,
      "aria-selected": isSelectedDay,
      className: classNames({
        'slds-is-today': isToday,
        'slds-disabled-text': isDisabled,
        'slds-is-selected': isSelectedDay
      }),
      onClick: function onClick(event) {
        handleClick(event, {
          date: props.date,
          onSelectDate: props.onSelectDate
        });
      },
      onKeyDown: function onKeyDown(event) {
        handleKeyDown(event, _objectSpread({}, props));
      },
      ref: function ref(component) {
        if (isSelectedDay) {
          props.selectedDateRef(component);
        }

        if (props.calendarHasFocus && DateUtil.isSameDay(props.focusedDate, props.date) && isCurrentMonth) {
          props.onRequestInternalFocusDate(undefined, {
            date: props.date,
            ref: component
          });
        }
      },
      role: "gridcell",
      tabIndex: !props.calendarHasFocus && isFirstDayOfMonth && isCurrentMonth ? 0 : -1
    }, React.createElement("span", {
      className: "slds-day"
    }, isToday ? React.createElement("span", {
      className: "slds-assistive-text"
    }, props.todayLabel, ": ") : null, props.date.getDate()))
  );
};

DatepickerCalendarDay.displayName = 'SLDSDatepickerCalendarDay';
DatepickerCalendarDay.propTypes = {
  /**
   * If elements within the calendar have focus. This is helpful for keyboard event trapping.
   */
  calendarHasFocus: PropTypes.bool.isRequired,

  /**
   * Date of day
   */
  date: PropTypes.instanceOf(Date).isRequired,

  /**
   * If date is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
   */
  initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

  /**
   * Triggered when the keyboard moves focus off the calendar.
   */
  onCalendarBlur: PropTypes.func.isRequired,

  /**
   * For keyboard navigation. Changes the focus to the next day on the calendar. Triggered when right arrow button is pressed.
   */
  onKeyboardNavigateToNextDay: PropTypes.func.isRequired,

  /**
   * For keyboard navigation. Changes the focus to the same day in the next week on the calendar. Triggered when down arrow button is pressed.
   */
  onKeyboardNavigateToNextWeek: PropTypes.func.isRequired,

  /**
   * For keyboard navigation. Changes the focus to the previous day on the calendar. Triggered when left arrow button is pressed.
   */
  onKeyboardNavigateToPreviousDay: PropTypes.func.isRequired,

  /**
   * For keyboard navigation. Changes the focus to the same day in the previous week on the calendar. Triggered when up arrow button is pressed.
   */
  onKeyboardNavigateToPreviousWeek: PropTypes.func.isRequired,

  /**
   * Triggered when the calendar is cancelled.
   */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Triggered when a date on the calendar is clicked.
   */
  onSelectDate: PropTypes.func.isRequired,

  /**
   * Currently selected date. This should be present in the input field.
   */
  selectedDate: PropTypes.instanceOf(Date).isRequired,

  /**
   * Component reference / DOM node for selected day.
   */
  selectedDateRef: PropTypes.func.isRequired,

  /**
   * Label of shortcut to jump to today within the calendar. Also used for assistive text for the current day.
   */
  todayLabel: PropTypes.string.isRequired,
  focusedDate: PropTypes.instanceOf(Date),
  onRequestInternalFocusDate: PropTypes.func
};
export default DatepickerCalendarDay;
//# sourceMappingURL=day.js.map