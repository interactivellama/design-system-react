define(['react', 'react-test-renderer', '../../../../tests/snapshot-helpers', '../__examples__/snapshot-base', '../__examples__/snapshot-toggle'], function (_react, _reactTestRenderer, _snapshotHelpers, _snapshotBase, _snapshotToggle) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _snapshotBase2 = _interopRequireDefault(_snapshotBase);

	var _snapshotToggle2 = _interopRequireDefault(_snapshotToggle);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Checkbox Base DOM Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotBase2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Checkbox Base HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_snapshotBase2.default)).toMatchSnapshot();
	});

	test('Checkbox Toggle DOM Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotToggle2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Checkbox Toggle HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_snapshotToggle2.default)).toMatchSnapshot();
	});
});