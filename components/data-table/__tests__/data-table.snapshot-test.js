define(['../__examples__/basic', '../__examples__/advanced', '../../../tests/snapshot-helpers'], function (_basic, _advanced, _snapshotHelpers) {
	'use strict';

	var _basic2 = _interopRequireDefault(_basic);

	var _advanced2 = _interopRequireDefault(_advanced);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('DataTable Basic HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_basic2.default)).toMatchSnapshot();
	}); /* eslint-env jest */


	test('DataTable Advanced HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_advanced2.default)).toMatchSnapshot();
	});
});