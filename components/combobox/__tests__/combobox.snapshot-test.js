define(['react', 'react-test-renderer', '../../../tests/snapshot-helpers', '../__examples__/snapshot/base-open', '../__examples__/snapshot/base-selected', '../__examples__/snapshot/inline-single-selection', '../__examples__/snapshot/inline-single-selection-selected', '../__examples__/snapshot/inline-multiple-selection', '../__examples__/snapshot/inline-multiple-selection-selected', '../__examples__/snapshot/readonly-single-selection', '../__examples__/snapshot/readonly-single-selection-selected', '../__examples__/snapshot/readonly-single-selection-selected-open', '../__examples__/snapshot/readonly-multiple-selection', '../__examples__/snapshot/readonly-multiple-selection-single-item-selected', '../__examples__/snapshot/readonly-multiple-selection-multiple-items-selected', '../__examples__/snapshot/base-custom-menu-item-open', '../__examples__/snapshot/readonly-single-selection-custom-menu-item'], function (_react, _reactTestRenderer, _snapshotHelpers, _baseOpen, _baseSelected, _inlineSingleSelection, _inlineSingleSelectionSelected, _inlineMultipleSelection, _inlineMultipleSelectionSelected, _readonlySingleSelection, _readonlySingleSelectionSelected, _readonlySingleSelectionSelectedOpen, _readonlyMultipleSelection, _readonlyMultipleSelectionSingleItemSelected, _readonlyMultipleSelectionMultipleItemsSelected, _baseCustomMenuItemOpen, _readonlySingleSelectionCustomMenuItem) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _baseOpen2 = _interopRequireDefault(_baseOpen);

	var _baseSelected2 = _interopRequireDefault(_baseSelected);

	var _inlineSingleSelection2 = _interopRequireDefault(_inlineSingleSelection);

	var _inlineSingleSelectionSelected2 = _interopRequireDefault(_inlineSingleSelectionSelected);

	var _inlineMultipleSelection2 = _interopRequireDefault(_inlineMultipleSelection);

	var _inlineMultipleSelectionSelected2 = _interopRequireDefault(_inlineMultipleSelectionSelected);

	var _readonlySingleSelection2 = _interopRequireDefault(_readonlySingleSelection);

	var _readonlySingleSelectionSelected2 = _interopRequireDefault(_readonlySingleSelectionSelected);

	var _readonlySingleSelectionSelectedOpen2 = _interopRequireDefault(_readonlySingleSelectionSelectedOpen);

	var _readonlyMultipleSelection2 = _interopRequireDefault(_readonlyMultipleSelection);

	var _readonlyMultipleSelectionSingleItemSelected2 = _interopRequireDefault(_readonlyMultipleSelectionSingleItemSelected);

	var _readonlyMultipleSelectionMultipleItemsSelected2 = _interopRequireDefault(_readonlyMultipleSelectionMultipleItemsSelected);

	var _baseCustomMenuItemOpen2 = _interopRequireDefault(_baseCustomMenuItemOpen);

	var _readonlySingleSelectionCustomMenuItem2 = _interopRequireDefault(_readonlySingleSelectionCustomMenuItem);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Base Open',
		test: test,
		Component: _baseOpen2.default
	}); /* eslint-env jest */


	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Base Selected',
		test: test,
		Component: _baseSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Inline Single Selection',
		test: test,
		Component: _inlineSingleSelection2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Inline Single Selection Selected',
		test: test,
		Component: _inlineSingleSelectionSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Inline Multiple Selection',
		test: test,
		Component: _inlineMultipleSelection2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Inline Multiple Selection Selected',
		test: test,
		Component: _inlineMultipleSelectionSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Base Custom Menu Item Open',
		test: test,
		Component: _baseCustomMenuItemOpen2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Single Selection',
		test: test,
		Component: _readonlySingleSelection2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Single Selection Selected',
		test: test,
		Component: _readonlySingleSelectionSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Single Selection Selected Open',
		test: test,
		Component: _readonlySingleSelectionSelectedOpen2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Multiple Selection',
		test: test,
		Component: _readonlyMultipleSelection2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Multiple Selection Single Item Selected',
		test: test,
		Component: _readonlyMultipleSelectionSingleItemSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Multiple Selection Multiple Items Selected',
		test: test,
		Component: _readonlyMultipleSelectionMultipleItemsSelected2.default
	});

	(0, _snapshotHelpers.testDOMandHTML)({
		name: 'Readonly Single Selection Custom Menu Item Open',
		test: test,
		Component: _readonlySingleSelectionCustomMenuItem2.default
	});
});