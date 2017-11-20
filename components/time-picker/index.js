'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.isdate');

var _lodash2 = _interopRequireDefault(_lodash);

var _inputIcon = require('../icon/input-icon');

var _inputIcon2 = _interopRequireDefault(_inputIcon);

var _menuDropdown = require('../menu-dropdown');

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _dropdownTrigger = require('./private/dropdown-trigger');

var _dropdownTrigger2 = _interopRequireDefault(_dropdownTrigger);

var _constants = require('../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*  Component description.
*/


// ### Dropdown
/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// # Timepicker Component

// ## Dependencies

// ### React
var Timepicker = (0, _createReactClass2.default)({
	// ### Display Name
	// Always use the canonical component name as the React display name.
	displayName: _constants.TIME_PICKER,

	// ### Prop Types
	propTypes: {
		constrainToScrollParent: _propTypes2.default.bool,
		/**
   * Disables the input and prevents editing the contents.
   */
		disabled: _propTypes2.default.bool,
		/**
   * Time formatting function
   */
		formatter: _propTypes2.default.func,
		inheritTargetWidth: _propTypes2.default.bool,
		/**
   * This label appears above the input.
   */
		label: _propTypes2.default.string,
		/**
   * Custom element that overrides the default Menu Item component.
   */
		listItemRenderer: _propTypes2.default.func,
		/**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
		menuPosition: _propTypes2.default.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),
		/**
   * Receives the props `(dateValue, stringValue)`
   */
		onDateChange: _propTypes2.default.func,
		/**
   * Parsing date string into Date
   */
		parser: _propTypes2.default.func,
		/**
   * Text that will appear in an empty input.
   */
		placeholder: _propTypes2.default.string,
		/**
   * If true, adds asterisk next to input label to indicate it is a required field.
   */
		required: _propTypes2.default.bool,
		stepInMinutes: _propTypes2.default.number,
		strValue: _propTypes2.default.string,
		/**
   * Date
   */
		value: _propTypes2.default.instanceOf(Date)
	},

	getDefaultProps: function getDefaultProps() {
		return {
			formatter: function formatter(date) {
				if (date) {
					return date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
				}

				return null;
			},
			parser: function parser(timeStr) {
				var date = new Date();
				var dateStr = date.toLocaleString(navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric' });
				return new Date(dateStr + ' ' + timeStr);
			},

			menuPosition: 'absolute',
			placeholder: 'Pick Time',
			value: null,
			stepInMinutes: 30
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value,
			strValue: this.props.strValue,
			options: this.getOptions()
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.value && this.props.value) {
			var currentTime = this.props.value.getTime();
			var nextTime = nextProps.value.getTime();

			if (currentTime !== nextTime) {
				this.setState({
					value: nextProps.value,
					strValue: this.props.formatter(nextProps.value)
				});
			}
		}
	},
	getOptions: function getOptions() {
		var baseDate = new Date();
		var options = [];

		baseDate.setHours(0);
		baseDate.setMinutes(0);
		baseDate.setSeconds(0);
		baseDate.setMilliseconds(0);

		var curDate = new Date(baseDate);

		while (baseDate.getDate() === curDate.getDate()) {
			var formatted = this.props.formatter(curDate);

			options.push({
				label: formatted,
				value: new Date(curDate)
			});

			curDate.setMinutes(curDate.getMinutes() + this.props.stepInMinutes);
		}

		return options;
	},
	parseDate: function parseDate(strValue) {
		var newDate = this.props.parser(strValue);

		if ((0, _lodash2.default)(newDate)) {
			if (!isNaN(newDate.getTime())) {
				return newDate;
			}
		}

		return new Date();
	},


	// ### Render
	render: function render() {
		return _react2.default.createElement(
			_menuDropdown2.default,
			{
				checkmark: false,
				constrainToScrollParent: this.props.constrainToScrollParent,
				disabled: this.props.disabled,
				inheritTargetWidth: this.props.inheritTargetWidth,
				label: this.props.label,
				listItemRenderer: this.props.listItemRenderer
				// inline style override
				, menuStyle: {
					maxHeight: '20em',
					overflowX: 'hidden',
					minWidth: '100%'
				},
				menuPosition: this.props.menuPosition,
				onSelect: this.handleSelect,
				options: this.state.options
			},
			_react2.default.createElement(_dropdownTrigger2.default, {
				iconRight: _react2.default.createElement(_inputIcon2.default, {
					category: 'utility',
					name: 'clock'
				}),
				onChange: this.handleInputChange,
				placeholder: this.props.placeholder,
				required: this.props.required,
				type: 'text',
				value: this.state.strValue
			})
		);
	},
	handleChange: function handleChange(date, strValue) {
		this.setState({
			value: date,
			strValue: strValue
		});

		if (this.props.onDateChange) {
			this.props.onDateChange(date, strValue);
		}
	},
	handleSelect: function handleSelect(val) {
		if (val && val.value) {
			this.handleChange(val.value, val.label);
		}
	},
	handleInputChange: function handleInputChange(event) {
		var strValue = event.target.value;

		this.setState({
			strValue: strValue
		});

		if (this.props.onDateChange) {
			var parsedDate = this.props.parser(strValue);
			this.props.onDateChange(parsedDate, strValue);
		}
	}
});

// ## Constants


// ### isDate
exports.default = Timepicker;