define(['exports', 'react', 'create-react-class', '../../../../../components/icon-settings', '../../../../../components/forms/checkbox'], function (exports, _react, _createReactClass, _iconSettings, _checkbox) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// `~` is replaced with design-system-react at runtime

	var Example = (0, _createReactClass2.default)({
		displayName: 'CheckboxExample',

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
						_react2.default.createElement(_checkbox2.default, {
							assistiveText: 'Default',
							label: 'Default'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_checkbox2.default, {
							assistiveText: 'Indeterminate',
							indeterminate: true,
							label: 'Indeterminate'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_checkbox2.default, {
							assistiveText: 'Indeterminate',
							label: 'Required',
							required: true
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-col--padded' },
						_react2.default.createElement(_checkbox2.default, {
							assistiveText: 'Disabled',
							label: 'Disabled',
							disabled: true
						})
					)
				)
			);
		}
	});

	exports.default = Example;
});