function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Search Component
// Wraps the input to default to a search style.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ## Children

import Input from './index';
import InputIcon from '../../icon/input-icon'; // ### Event Helpers

import KEYS from '../../../utilities/key-code';
import EventUtil from '../../../utilities/event'; // ## Constants

import { FORMS_SEARCH } from '../../../utilities/constants';

var handleKeyDown = function handleKeyDown(event, onSearch) {
  if (event.keyCode === KEYS.ENTER) {
    EventUtil.trapImmediate(event);
    onSearch(event);
  }
};
/**
 * A `Search` is an `Input` which renders the search icon by default. It can be cleared, too. All `Input` props not specified as props already may be used with this component and will override defaults.
 */


var Search = function Search(_ref) {
  var assistiveText = _ref.assistiveText,
      clearable = _ref.clearable,
      onClear = _ref.onClear,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["assistiveText", "clearable", "onClear", "onSearch", "placeholder"]);

  return React.createElement(Input, _extends({
    assistiveText: {
      label: assistiveText
    },
    iconLeft: React.createElement(InputIcon, {
      assistiveText: "Search",
      category: "utility",
      name: "search",
      onClick: onSearch
    }),
    iconRight: clearable ? React.createElement(InputIcon, {
      assistiveText: "Clear",
      category: "utility",
      name: "clear",
      onClick: onClear
    }) : null,
    onKeyDown: onSearch ? function (event) {
      return handleKeyDown(event, onSearch);
    } : null,
    placeholder: placeholder
  }, props));
};

Search.displayName = FORMS_SEARCH;
Search.propTypes = {
  /**
   * Assistive text to search input
   */
  assistiveText: PropTypes.string,

  /**
   * Adds a clear button to right side of the input
   */
  clearable: PropTypes.bool,

  /**
   * Triggers when the clear button is clicked
   */
  onClear: PropTypes.func,

  /**
   * This event fires when enter is pressed in the `input` or the search button is clicked.
   */
  onSearch: PropTypes.func,

  /**
   * Placeholder for the input
   */
  placeholder: PropTypes.string
};
export default Search;
//# sourceMappingURL=search.js.map