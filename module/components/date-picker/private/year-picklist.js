/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import MenuPicklist from '../../menu-picklist';
var DatepickerYearSelector = createReactClass({
  displayName: 'SLDSDatepickerYearSelector',
  propTypes: {
    /**
     * HTML id for component
     */
    id: PropTypes.string,

    /**
     * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
     */
    initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

    /**
     * Displayed calendar has changed or re-rendered
     */
    onChangeMonth: PropTypes.func.isRequired,

    /**
     * Offset of year from current year that can be selected in the year selection dropdown. (2017 - 5 = 2012).
     */
    relativeYearFrom: PropTypes.number,

    /**
     * Offset of year from current year that can be selected in the year selection dropdown. (2017 + 5 = 2012).
     */
    relativeYearTo: PropTypes.number,

    /**
     * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    yearPicklistButtonRef: PropTypes.func
  },
  getOptions: function getOptions() {
    var now = new Date();
    var fromYear = now.getFullYear() + this.props.relativeYearFrom;
    var toYear = now.getFullYear() + this.props.relativeYearTo;
    var opts = [];

    for (var year = fromYear; year < toYear; year += 1) {
      opts.push({
        label: "".concat(year),
        value: year
      });
    }

    return opts;
  },
  getSelectedValueIndex: function getSelectedValueIndex() {
    var now = new Date();
    var selectedYear = this.props.initialDateForCalendarRender.getFullYear();
    var fromYear = now.getFullYear() + this.props.relativeYearFrom;
    return selectedYear - fromYear;
  },
  handleSelect: function handleSelect(selectedValue) {
    if (selectedValue) {
      this.props.onChangeMonth(new Date(this.props.initialDateForCalendarRender.setFullYear(parseInt(selectedValue.value, 10))));
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "slds-form-element"
    }, React.createElement(MenuPicklist, {
      buttonRef: this.props.yearPicklistButtonRef,
      checkmark: false,
      className: "slds-picklist--fluid slds-shrink-none",
      initialFocus: true,
      id: "".concat(this.props.id, "-year-picklist"),
      menuPosition: "relative",
      onSelect: this.handleSelect,
      options: this.getOptions(),
      placeholder: "Year",
      value: this.props.initialDateForCalendarRender.getFullYear(),
      initValueIndex: this.getSelectedValueIndex()
    }));
  }
});
export default DatepickerYearSelector;
//# sourceMappingURL=year-picklist.js.map