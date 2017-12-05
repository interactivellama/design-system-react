define(['../../../tests/snapshot-helpers', '../__examples__/info', '../__examples__/warning', '../__examples__/error', '../__examples__/offline', '../__examples__/dismissable', '../__examples__/custom-class-name'], function (_snapshotHelpers, _info, _warning, _error, _offline, _dismissable, _customClassName) {
	'use strict';

	var _info2 = _interopRequireDefault(_info);

	var _warning2 = _interopRequireDefault(_warning);

	var _error2 = _interopRequireDefault(_error);

	var _offline2 = _interopRequireDefault(_offline);

	var _dismissable2 = _interopRequireDefault(_dismissable);

	var _customClassName2 = _interopRequireDefault(_customClassName);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Info',
		test: test,
		Component: _info2.default
	}); /* eslint-env jest */


	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Warning',
		test: test,
		Component: _warning2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Error',
		test: test,
		Component: _error2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Offline',
		test: test,
		Component: _offline2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Dismissable',
		test: test,
		Component: _dismissable2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Alert Custom Class Name',
		test: test,
		Component: _customClassName2.default
	});
});