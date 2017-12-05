define(['exports', 'react', 'create-react-class', '../../../../components/icon-settings', '../../../../components/menu-dropdown'], function (exports, _react, _createReactClass, _iconSettings, _menuDropdown) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// `~` is replaced with design-system-react at runtime

	var Example = (0, _createReactClass2.default)({
		displayName: 'MediaObjectExample',

		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(_menuDropdown2.default, {
					assistiveText: 'More Options',
					iconName: 'down',
					iconVariant: 'border-filled',
					onSelect: function onSelect(value) {
						console.log('selected: ', value);
					},
					options: [{ label: 'Menu Item One', value: 'A0' }, { label: 'Menu Item Two', value: 'B0' }, { label: 'Menu Item Three', value: 'C0' }, { type: 'divider' }, { label: 'Menu Item Four', value: 'D0' }]
				})
			);
		}
	});

	exports.default = Example;
});