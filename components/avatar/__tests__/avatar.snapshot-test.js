define(['react', 'react-test-renderer', '../__examples__/base', '../__examples__/entity-icon', '../__examples__/entity-initials', '../__examples__/user-icon', '../__examples__/user-initials'], function (_react, _reactTestRenderer, _base, _entityIcon, _entityInitials, _userIcon, _userInitials) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _base2 = _interopRequireDefault(_base);

	var _entityIcon2 = _interopRequireDefault(_entityIcon);

	var _entityInitials2 = _interopRequireDefault(_entityInitials);

	var _userIcon2 = _interopRequireDefault(_userIcon);

	var _userInitials2 = _interopRequireDefault(_userInitials);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Avatar Base DOM Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	}); /* eslint-env jest */


	test('Avatar Entity Icon Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_entityIcon2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Avatar Entity Initials Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_entityInitials2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Avatar User Icon Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_userIcon2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Avatar User Initials Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_userInitials2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});
});