define(['react', 'react-test-renderer', '../__examples__/base'], function (_react, _reactTestRenderer, _base) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Breadcrumb Base Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_base2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});
});