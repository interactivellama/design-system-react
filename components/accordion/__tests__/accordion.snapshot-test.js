define(['../../../tests/snapshot-helpers', '../__examples__/base', '../__examples__/snapshot/base-open'], function (_snapshotHelpers, _base, _baseOpen) {
	'use strict';

	var _base2 = _interopRequireDefault(_base);

	var _baseOpen2 = _interopRequireDefault(_baseOpen);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Base',
		test: test,
		Component: _base2.default
	}); /* eslint-env jest */


	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Base Open',
		test: test,
		Component: _baseOpen2.default
	});
});