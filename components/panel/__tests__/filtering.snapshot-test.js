define(['react', 'enzyme', 'enzyme-to-json', 'react-dom/server', 'js-beautify', '../__examples__/filtering'], function (_react, _enzyme, _enzymeToJson, _server, _jsBeautify, _filtering) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

	var _server2 = _interopRequireDefault(_server);

	var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

	var _filtering2 = _interopRequireDefault(_filtering);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/* eslint-env jest */
	test('Panel Filtering Default Snapshot', function () {
		var domTree = (0, _enzymeToJson2.default)((0, _enzyme.shallow)(_react2.default.createElement(_filtering2.default, null)));
		expect(domTree).toMatchSnapshot();
	});

	test('Panel Filtering Default HTML Snapshot', function () {
		var domTree = String(_jsBeautify2.default.html(_server2.default.renderToStaticMarkup(_react2.default.createElement(_filtering2.default, null)), { indent_size: 2 }), 'utf-8');
		expect(domTree).toMatchSnapshot();
	});
});