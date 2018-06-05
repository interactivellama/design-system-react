function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ## Children

import Checkbox from '../../forms/checkbox';
import HeaderCell from './header-cell'; // ## Constants

import { DATA_TABLE_HEAD } from '../../../utilities/constants';
/**
 * Used internally, provides header row rendering to the DataTable.
 */

var DataTableHead = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: DATA_TABLE_HEAD,
  // ### Prop Types
  propTypes: {
    /**
     * Text for heading of actions column
     */
    assistiveTextForActionsHeader: PropTypes.string,

    /**
     * Text for sort action on table column header
     */
    assistiveTextForColumnSort: PropTypes.string,

    /**
     * Text for select all checkbox within the table header
     */
    assistiveTextForSelectAllRows: PropTypes.string,
    allSelected: PropTypes.bool,
    indeterminateSelected: PropTypes.bool,
    canSelectRows: PropTypes.bool,
    columns: PropTypes.arrayOf(PropTypes.shape({
      Cell: PropTypes.func,
      props: PropTypes.object
    })),
    id: PropTypes.string,
    onToggleAll: PropTypes.func,
    onSort: PropTypes.func,
    showRowActions: PropTypes.bool
  },
  componentWillMount: function componentWillMount() {},
  // ### Render
  render: function render() {
    var _this = this;

    return React.createElement("thead", null, React.createElement("tr", {
      className: "slds-line-height_reset"
    }, this.props.canSelectRows ? React.createElement("th", {
      className: "slds-text-align_right",
      scope: "col",
      style: {
        width: '3.25rem'
      }
    }, React.createElement("div", {
      className: "slds-th__action slds-th__action--form"
    }, React.createElement(Checkbox, {
      assistiveText: this.props.assistiveTextForSelectAllRows,
      checked: this.props.allSelected,
      indeterminate: this.props.indeterminateSelected,
      id: "".concat(this.props.id, "-SelectAll"),
      name: "SelectAll",
      onChange: this.props.onToggleAll
    }))) : null, this.props.columns.map(function (column) {
      return React.createElement(HeaderCell, _extends({
        assistiveTextForColumnSort: _this.props.assistiveTextForColumnSort,
        id: "".concat(_this.props.id, "-").concat(column.props.property),
        key: "".concat(_this.props.id, "-").concat(column.props.property),
        onSort: _this.props.onSort
      }, column.props));
    }), this.props.showRowActions ? React.createElement("th", {
      scope: "col",
      style: {
        width: '3.25rem'
      }
    }, React.createElement("div", {
      className: "slds-th__action"
    }, React.createElement("span", {
      className: "slds-assistive-text"
    }, this.props.assistiveTextForActionsHeader))) : null));
  }
});
export default DataTableHead;
//# sourceMappingURL=head.js.map