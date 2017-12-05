define(['exports', 'react', 'create-react-class', '../../../../components/icon-settings', '../../../../components/icon'], function (exports, _react, _createReactClass, _iconSettings, _icon) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// `~` is replaced with design-system-react at runtime

	var Example = (0, _createReactClass2.default)({
		displayName: 'IconSettingsExample',

		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					'div',
					{ className: 'slds-grid slds-grid--pull-padded slds-grid--vertical-align-center' },
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_icon2.default, {
							assistiveText: 'Account',
							category: 'standard',
							name: 'account',
							size: 'small'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_icon2.default, {
							assistiveText: 'Announcement',
							category: 'utility',
							name: 'announcement',
							size: 'small'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_icon2.default, {
							assistiveText: 'Description',
							category: 'action',
							name: 'description',
							size: 'small'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_icon2.default, {
							assistiveText: 'XML',
							category: 'doctype',
							name: 'xml',
							size: 'small'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_icon2.default, {
							assistiveText: 'custom5',
							category: 'custom',
							name: 'custom5',
							size: 'small'
						})
					)
				)
			);
		}
	});

	exports.default = Example;
});