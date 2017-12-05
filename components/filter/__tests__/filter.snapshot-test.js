define(['react', 'enzyme', 'enzyme-to-json', '../../../tests/snapshot-helpers', '../__examples__/default', '../__examples__/new', '../__examples__/locked', '../__examples__/permanant', '../__examples__/error', '../__examples__/assistive-text'], function (_react, _enzyme, _enzymeToJson, _snapshotHelpers, _default, _new, _locked, _permanant, _error, _assistiveText) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

	var _default2 = _interopRequireDefault(_default);

	var _new2 = _interopRequireDefault(_new);

	var _locked2 = _interopRequireDefault(_locked);

	var _permanant2 = _interopRequireDefault(_permanant);

	var _error2 = _interopRequireDefault(_error);

	var _assistiveText2 = _interopRequireDefault(_assistiveText);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	test('Filter Base Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_default2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('NewFilter Base Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_new2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('LockedFilter Base Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_locked2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('Permanant Filter Base Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_permanant2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('Error Filter Base Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_error2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('AssistiveText Filter', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_assistiveText2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('Filter Base with custom className Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_default2.default, { className: 'MY_CUSTOM_CLASS_NAME' })).toMatchSnapshot();
	});

	test('AssistiveText Filter HTML Snapshot', function () {
		expect((0, _snapshotHelpers.renderMarkup)(_default2.default)).toMatchSnapshot();
	});
});