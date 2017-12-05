define(['react', 'react-test-renderer', '../../../tests/snapshot-helpers', '../__examples__/snapshot-default'], function (_react, _reactTestRenderer, _snapshotHelpers, _snapshotDefault) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _snapshotDefault2 = _interopRequireDefault(_snapshotDefault);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Navigation Default DOM Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotDefault2.default, null)).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	test('Navigation Default HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_snapshotDefault2.default)).toMatchSnapshot();
	});

	var customProps = {
		className: 'CUSTOM-CLASSNAME',
		id: 'CUSTOM-ID',
		variant: 'shade',
		selectedId: 'all_reports'
	};

	test('Navigation\n\t\tclassName,\n\t\tid,\n\t\tvariant\n\tDOM Snapshot', function () {
		var domTree = _reactTestRenderer2.default.create(_react2.default.createElement(_snapshotDefault2.default, customProps)).toJSON();
		expect(domTree).toMatchSnapshot();
	});
});