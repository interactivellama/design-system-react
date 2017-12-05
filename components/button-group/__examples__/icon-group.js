'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _buttonGroup = require('../../../../components/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _buttonStateful = require('../../../../components/button-stateful');

var _buttonStateful2 = _interopRequireDefault(_buttonStateful);

var _menuDropdown = require('../../../../components/menu-dropdown');

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _iconSettings = require('../../../../components/icon-settings');

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = (0, _createReactClass2.default)({
	displayName: 'ButtonGroupExample',

	render: function render() {
		return _react2.default.createElement(
			_iconSettings2.default,
			{ iconPath: '/assets/icons' },
			_react2.default.createElement(
				_buttonGroup2.default,
				null,
				_react2.default.createElement(_buttonStateful2.default, {
					assistiveText: 'Show Chart',
					buttonVariant: 'icon',
					iconName: 'chart',
					iconVariant: 'border',
					variant: 'icon'
				}),
				_react2.default.createElement(_buttonStateful2.default, {
					assistiveText: 'Filter',
					iconName: 'filter',
					iconVariant: 'border',
					variant: 'icon'
				}),
				_react2.default.createElement(_menuDropdown2.default, {
					assistiveText: 'Sort',
					checkmark: true,
					iconName: 'sort',
					iconVariant: 'more',
					id: 'icon-dropdown-example',
					onSelect: function onSelect() {
						console.log(item.label, 'selected');
					},
					openOn: 'click',
					options: [{ label: 'Sort ascending', value: 'A0' }, { label: 'Sort descending', value: 'B0' }],
					value: 'A0',
					variant: 'icon'
				})
			)
		);
	}
});

exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime