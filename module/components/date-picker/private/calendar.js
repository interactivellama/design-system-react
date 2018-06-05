/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import Week from './week';
import DateUtil from '../../../utilities/date';
var DatepickerCalendar = createReactClass({
  displayName: 'SLDSDatepickerCalendar',
  propTypes: {
    /**
     * Three letter abbreviations of the days of the week, starting on Sunday.
     */
    abbreviatedWeekDayLabels: PropTypes.array.isRequired,

    /**
     * dateDisabled() takes a date as input argument, returns true if given date should be disabled, otherwise returns false.
     */
    dateDisabled: PropTypes.func,

    /**
     * HTML id for component
     */
    id: PropTypes.string.isRequired,

    /**
     * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
     */
    initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

    /**
     * Makes Monday the first day of the week
     */
    isIsoWeekday: PropTypes.bool,

    /**
     * Triggered when the keyboard moves focus off the calendar.
     */
    onCalendarBlur: PropTypes.func.isRequired,

    /**
     * Displayed calendar has changed or re-rendered
     */
    onChangeMonth: PropTypes.func.isRequired,

    /**
     * Internal callback that will eventually trigger when the keyboard moves focus on the calendar. `{date: [Date object], formattedDate: [string]}`.
     */
    onRequestInternalFocusDate: PropTypes.func,

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
    selectedDate: PropTypes.instanceOf(Date),

    /**
     * Component reference / DOM node for selected day.
     */
    selectedDateRef: PropTypes.func,

    /**
     * Label of shortcut to jump to today within the calendar. This is also used for assistive text on today's date.
     */
    todayLabel: PropTypes.string.isRequired,

    /**
     * For keyboard navigation. Listens for key presses on the last focusable DOM Node, the "Today" link, so that dialog focus can be trapped.
     */
    onLastFocusableNodeKeyDown: PropTypes.func,

    /**
     * Callback that passes in the DOM reference of the Today `a` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    todayRef: PropTypes.func,

    /**
     * Names of the seven days of the week, starting on Sunday.
     */
    weekDayLabels: PropTypes.array.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      focusedDate: this.props.initialDateForCalendarRender,
      calendarHasFocus: true,
      todayFocus: false
    };
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    this.setCalendarRenderSeedDate(prevProps);
  },
  setCalendarRenderSeedDate: function setCalendarRenderSeedDate(prevProps) {
    // Set prop that sets focus in child component once it is rendered. This occurs when the month DOM has changed. This will trigger a re-render, but no DOM change will occur, just a DOM focus.
    if (!DateUtil.isEqual(this.props.initialDateForCalendarRender, prevProps.initialDateForCalendarRender)) {
      this.setState({
        focusedDate: this.props.initialDateForCalendarRender
      });
      this.props.onRequestInternalFocusDate(undefined, {
        date: this.props.initialDateForCalendarRender,
        triggerCallback: true
      });
    }
  },
  handleSelectDate: function handleSelectDate(event, _ref) {
    var date = _ref.date;

    if (!this.props.dateDisabled({
      date: date
    })) {
      this.setState({
        selected: date
      });
      this.props.onSelectDate(event, {
        date: date
      });
    }
  },
  handleRequestClose: function handleRequestClose() {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  },
  handleKeyboardNavigateToPreviousDay: function handleKeyboardNavigateToPreviousDay(event, _ref2) {
    var date = _ref2.date;
    var prevDate = DateUtil.addDays(date, -1);

    if (!DateUtil.isSameMonth(prevDate, date)) {
      this.props.onChangeMonth(event, prevDate);
    } else {
      this.setState({
        focusedDate: prevDate
      });
      this.props.onRequestInternalFocusDate(event, {
        date: prevDate,
        triggerCallback: true
      });
    }
  },
  handleKeyboardNavigateToNextDay: function handleKeyboardNavigateToNextDay(event, _ref3) {
    var date = _ref3.date;
    var nextDate = DateUtil.addDays(date, 1);

    if (!DateUtil.isSameMonth(nextDate, date)) {
      this.props.onChangeMonth(event, nextDate);
    } else {
      this.setState({
        focusedDate: nextDate
      });
      this.props.onRequestInternalFocusDate(event, {
        date: nextDate,
        triggerCallback: true
      });
    }
  },
  handleKeyboardNavigateToPreviousWeek: function handleKeyboardNavigateToPreviousWeek(event, _ref4) {
    var date = _ref4.date;
    var prevDate = DateUtil.addDays(date, -7);

    if (!DateUtil.isSameMonth(prevDate, date)) {
      this.props.onChangeMonth(event, prevDate);
    } else {
      this.setState({
        focusedDate: prevDate
      });
      this.props.onRequestInternalFocusDate(event, {
        date: prevDate,
        triggerCallback: true
      });
    }
  },
  handleKeyboardNavigateToNextWeek: function handleKeyboardNavigateToNextWeek(event, _ref5) {
    var date = _ref5.date;
    var nextDate = DateUtil.addDays(date, 7);

    if (!DateUtil.isSameMonth(nextDate, date)) {
      this.props.onChangeMonth(event, nextDate);
    } else {
      this.setState({
        focusedDate: nextDate
      });
      this.props.onRequestInternalFocusDate(event, {
        date: nextDate,
        triggerCallback: true
      });
    }
  },
  renderWeeks: function renderWeeks() {
    var firstDayOfWeekOffset = this.props.isIsoWeekday ? 1 : 0;
    var firstDayOfMonth = DateUtil.firstDayOfMonth(this.props.initialDateForCalendarRender);
    var firstDayOfWeek;

    if (firstDayOfMonth.getDay() > firstDayOfWeekOffset) {
      var prevWeek = DateUtil.addWeeks(firstDayOfMonth, -1);
      firstDayOfWeek = DateUtil.nearestWeekDay(prevWeek, firstDayOfWeekOffset);
    } else {
      firstDayOfWeek = firstDayOfMonth;
    }

    var weeks = [];
    var done = false;
    var monthIndex = firstDayOfWeek.getMonth();
    var count = 0;

    while (!done) {
      weeks.push(React.createElement(Week, {
        calendarHasFocus: this.state.calendarHasFocus,
        dateDisabled: this.props.dateDisabled,
        firstDayOfWeek: firstDayOfWeek,
        key: firstDayOfWeek.toString(),
        focusedDate: this.state.focusedDate,
        initialDateForCalendarRender: this.props.initialDateForCalendarRender,
        onCalendarBlur: this.props.onCalendarBlur,
        onKeyboardNavigateToPreviousDay: this.handleKeyboardNavigateToPreviousDay,
        onKeyboardNavigateToNextDay: this.handleKeyboardNavigateToNextDay,
        onKeyboardNavigateToPreviousWeek: this.handleKeyboardNavigateToPreviousWeek,
        onKeyboardNavigateToNextWeek: this.handleKeyboardNavigateToNextWeek,
        onRequestClose: this.handleRequestClose,
        onRequestInternalFocusDate: this.props.onRequestInternalFocusDate,
        onSelectDate: this.handleSelectDate,
        selectedDate: this.props.selectedDate,
        selectedDateRef: this.props.selectedDateRef,
        todayLabel: this.props.todayLabel
      })); // create new weeks

      firstDayOfWeek = DateUtil.addWeeks(firstDayOfWeek, 1);
      done = count > 2 && monthIndex !== firstDayOfWeek.getMonth();
      count += 1;
      monthIndex = firstDayOfWeek.getMonth();
    }

    var extraWeeks = 0;

    while (weeks.length < 6) {
      extraWeeks += 1;
      weeks.push(React.createElement("tr", {
        key: "extra_".concat(extraWeeks),
        className: "week"
      }, React.createElement("td", {
        "aria-disabled": "true",
        "aria-selected": "false",
        className: "slds-disabled-text"
      }, React.createElement("span", {
        className: "slds-day "
      }, "\xA0"))));
    }

    return weeks;
  },
  render: function render() {
    var _this = this;

    var sunday = React.createElement("th", null, React.createElement("abbr", {
      title: this.props.weekDayLabels[0]
    }, this.props.abbreviatedWeekDayLabels[0]));
    return React.createElement("div", {
      className: "calendar"
    }, React.createElement("table", {
      className: "datepicker__month",
      role: "grid",
      "aria-labelledby": "".concat(this.props.id, "-month")
    }, React.createElement("thead", null, React.createElement("tr", null, this.props.isIsoWeekday ? null : sunday, React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[1]
    }, this.props.abbreviatedWeekDayLabels[1])), React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[2]
    }, this.props.abbreviatedWeekDayLabels[2])), React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[3]
    }, this.props.abbreviatedWeekDayLabels[3])), React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[4]
    }, this.props.abbreviatedWeekDayLabels[4])), React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[5]
    }, this.props.abbreviatedWeekDayLabels[5])), React.createElement("th", {
      scope: "col"
    }, React.createElement("abbr", {
      title: this.props.weekDayLabels[6]
    }, this.props.abbreviatedWeekDayLabels[6])), this.props.isIsoWeekday && sunday)), React.createElement("tbody", null, this.renderWeeks(), React.createElement("tr", null, React.createElement("td", {
      colSpan: "7",
      role: "gridcell"
    }, React.createElement("a", {
      href: "javascript:void(0)" // eslint-disable-line no-script-url
      ,
      tabIndex: "0",
      className: "slds-show--inline-block slds-p-bottom--x-small",
      onClick: function onClick(event) {
        _this.handleSelectDate(event, {
          date: new Date()
        });
      },
      onKeyDown: this.props.onLastFocusableNodeKeyDown,
      ref: this.props.todayRef
    }, this.props.todayLabel))))));
  }
});
export default DatepickerCalendar;
//# sourceMappingURL=calendar.js.map