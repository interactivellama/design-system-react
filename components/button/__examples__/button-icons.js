'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _iconSettings = require('../../../../components/icon-settings');

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _button = require('../../../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `~` is replaced with design-system-react at runtime

var Example = (0, _createReactClass2.default)({
	displayName: 'ButtonExample',

	render: function render() {
		return _react2.default.createElement(
			_iconSettings2.default,
			{ iconPath: '/assets/icons' },
			_react2.default.createElement(
				'div',
				{ className: '-x-small-buttons--horizontal' },
				_react2.default.createElement(_button2.default, {
					assistiveText: 'Icon Bare Small',
					iconName: 'settings',
					iconSize: 'small',
					iconVariant: 'bare',
					onClick: function onClick() {
						console.log('Icon Bare Clicked');
					},
					variant: 'icon'
				}),
				_react2.default.createElement(_button2.default, {
					assistiveText: 'Icon Container Small',
					iconName: 'settings',
					iconSize: 'small',
					iconVariant: 'container',
					variant: 'icon'
				}),
				_react2.default.createElement(
					'div',
					{
						style: { backgroundColor: '#4BC076', padding: '10px', display: 'inline-block' },
						className: '-m-horizontal--small'
					},
					_react2.default.createElement(_button2.default, {
						assistiveText: 'Icon Border medium',
						iconName: 'settings',
						iconVariant: 'border',
						variant: 'icon'
					}),
					_react2.default.createElement(_button2.default, {
						assistiveText: 'Icon Border-filled medium',
						iconName: 'settings',
						iconVariant: 'border-filled',
						variant: 'icon'
					})
				),
				_react2.default.createElement(_button2.default, {
					assistiveText: 'Icon More large',
					iconName: 'settings',
					iconSize: 'large',
					iconVariant: 'more',
					variant: 'icon'
				}),
				_react2.default.createElement(
					'div',
					{
						style: { backgroundColor: '#16325c', padding: '10px', display: 'inline-block' },
						className: '-m-horizontal--small'
					},
					_react2.default.createElement(_button2.default, {
						assistiveText: 'Icon inverse',
						iconName: 'settings',
						iconSize: 'large',
						inverse: true,
						variant: 'icon'
					})
				),
				_react2.default.createElement(
					'div',
					{
						style: { backgroundColor: '#FFB75D', padding: '10px 50px', display: 'inline-block' },
						className: '-hint-parent -m-horizontal--small'
					},
					_react2.default.createElement(_button2.default, {
						assistiveText: 'Icon hint large',
						hint: true,
						iconName: 'settings',
						iconSize: 'large',
						variant: 'icon'
					})
				)
			)
		);
	}
});

exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime