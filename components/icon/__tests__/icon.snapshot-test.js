define(['react', 'react-test-renderer', '../../../tests/snapshot-helpers', '../../icon', '../../../icons/utility/download', '../__examples__/standard', '../__examples__/utility', '../__examples__/action', '../__examples__/doctype', '../__examples__/custom', '../__examples__/external-path', '../__examples__/color-base', '../__examples__/color-default', '../__examples__/color-error', '../__examples__/color-warning', '../__examples__/sizes-extra-small', '../__examples__/sizes-small', '../__examples__/sizes-medium', '../__examples__/sizes-large'], function (_react, _reactTestRenderer, _snapshotHelpers, _icon, _download, _standard, _utility, _action, _doctype, _custom, _externalPath, _colorBase, _colorDefault, _colorError, _colorWarning, _sizesExtraSmall, _sizesSmall, _sizesMedium, _sizesLarge) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

	var _icon2 = _interopRequireDefault(_icon);

	var _download2 = _interopRequireDefault(_download);

	var _standard2 = _interopRequireDefault(_standard);

	var _utility2 = _interopRequireDefault(_utility);

	var _action2 = _interopRequireDefault(_action);

	var _doctype2 = _interopRequireDefault(_doctype);

	var _custom2 = _interopRequireDefault(_custom);

	var _externalPath2 = _interopRequireDefault(_externalPath);

	var _colorBase2 = _interopRequireDefault(_colorBase);

	var _colorDefault2 = _interopRequireDefault(_colorDefault);

	var _colorError2 = _interopRequireDefault(_colorError);

	var _colorWarning2 = _interopRequireDefault(_colorWarning);

	var _sizesExtraSmall2 = _interopRequireDefault(_sizesExtraSmall);

	var _sizesSmall2 = _interopRequireDefault(_sizesSmall);

	var _sizesMedium2 = _interopRequireDefault(_sizesMedium);

	var _sizesLarge2 = _interopRequireDefault(_sizesLarge);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Icon Category Standard HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_standard2.default)).toMatchSnapshot();
	}); /* eslint-env jest */


	test('Icon Category Utility HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_utility2.default)).toMatchSnapshot();
	});

	test('Icon Category Action HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_action2.default)).toMatchSnapshot();
	});

	test('Icon Category Doctype HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_doctype2.default)).toMatchSnapshot();
	});

	test('Icon Category Custom HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_custom2.default)).toMatchSnapshot();
	});

	test('Icon Category External Path HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_externalPath2.default)).toMatchSnapshot();
	});

	test('Icon Size X-Small HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_sizesExtraSmall2.default)).toMatchSnapshot();
	});

	test('Icon Size Small HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_sizesSmall2.default)).toMatchSnapshot();
	});

	test('Icon Size Medium HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_sizesMedium2.default)).toMatchSnapshot();
	});

	test('Icon Size Large HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_sizesLarge2.default)).toMatchSnapshot();
	});
});