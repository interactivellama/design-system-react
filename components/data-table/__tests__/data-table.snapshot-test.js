'use strict';

var _basic = require('../__examples__/basic');

var _basic2 = _interopRequireDefault(_basic);

var _advanced = require('../__examples__/advanced');

var _advanced2 = _interopRequireDefault(_advanced);

var _snapshotHelpers = require('../../../tests/snapshot-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('DataTable Basic HTML Snapshot', function () {
	expect((0, _snapshotHelpers.renderMarkup)(_basic2.default)).toMatchSnapshot();
}); /* eslint-env jest */


test('DataTable Advanced HTML Snapshot', function () {
	expect((0, _snapshotHelpers.renderMarkup)(_advanced2.default)).toMatchSnapshot();
});