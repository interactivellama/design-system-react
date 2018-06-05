function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### find

import find from 'lodash.find'; // ## Children

import Checkbox from '../../forms/checkbox'; // ## Constants

import { DATA_TABLE_ROW, DATA_TABLE_ROW_ACTIONS, DATA_TABLE_CELL } from '../../../utilities/constants';
/**
 * Used internally, provides row rendering to the DataTable.
 */

var DataTableRow = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: DATA_TABLE_ROW,
  // ### Prop Types
  propTypes: {
    /**
     * Text for select row
     */
    assistiveTextForSelectRow: PropTypes.string,
    canSelectRows: PropTypes.bool,
    columns: PropTypes.arrayOf(PropTypes.shape({
      Cell: PropTypes.func,
      props: PropTypes.object
    })),

    /**
     * Use this if you are creating an advanced table (selectable, sortable, or resizable rows)
     */
    fixedLayout: PropTypes.bool,
    id: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func,
    rowActions: PropTypes.element,
    selection: PropTypes.array
  },
  isSelected: function isSelected() {
    return !!find(this.props.selection, this.props.item);
  },
  handleToggle: function handleToggle(selected, e) {
    return this.props.onToggle(this.props.item, selected, e);
  },
  // ### Render
  render: function render() {
    var _this = this;

    var isSelected = this.isSelected(); // i18n

    return React.createElement("tr", {
      className: classNames({
        'slds-hint-parent': this.props.rowActions,
        'slds-is-selected': this.props.canSelectRows && isSelected
      })
    }, this.props.canSelectRows ? React.createElement("td", {
      role: this.props.fixedLayout ? 'gridcell' : null,
      className: "slds-text-align--right",
      "data-label": "Select Row",
      style: {
        width: '3.25rem'
      }
    }, React.createElement(Checkbox, {
      assistiveText: this.props.assistiveTextForSelectRow,
      checked: isSelected,
      id: "".concat(this.props.id, "-SelectRow"),
      name: "SelectRow",
      onChange: this.handleToggle
    })) : null, this.props.columns.map(function (column) {
      var Cell = column.Cell;
      var cellId = "".concat(_this.props.id, "-").concat(DATA_TABLE_CELL, "-").concat(column.props.property);
      return React.createElement(Cell, _extends({}, column.props, {
        className: column.props.truncate ? 'slds-truncate' : null,
        fixedLayout: _this.props.fixedLayout,
        rowHeader: column.props.primaryColumn,
        id: cellId,
        item: _this.props.item,
        key: cellId,
        width: column.props.width
      }), _this.props.item[column.props.property]);
    }), this.props.rowActions ? React.cloneElement(this.props.rowActions, {
      id: "".concat(this.props.id, "-").concat(DATA_TABLE_ROW_ACTIONS),
      item: this.props.item
    }) : null);
  }
});
export default DataTableRow;
//# sourceMappingURL=row.js.map