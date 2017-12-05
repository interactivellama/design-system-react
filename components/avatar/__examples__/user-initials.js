define(['exports', 'react', 'create-react-class', '../../../../components/avatar', '../../../../components/icon-settings'], function (exports, _react, _createReactClass, _avatar, _iconSettings) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _avatar2 = _interopRequireDefault(_avatar);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Example = (0, _createReactClass2.default)({
		displayName: 'AvatarExample',

		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(_avatar2.default, {
					variant: 'user',
					label: 'Annie Wilson',
					size: 'medium'
				})
			);
		}
	}); // `~` is replaced with design-system-react at runtime
	exports.default = Example;
});