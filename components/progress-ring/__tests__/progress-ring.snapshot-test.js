define(['react', '../../../tests/snapshot-helpers', '../../../components/icon-settings', '../__examples__/examples'], function (_react, _snapshotHelpers, _iconSettings, _examples) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var ProgressRing = _interopRequireWildcard(_examples);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};

			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}

			newObj.default = obj;
			return newObj;
		}
	}

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/* eslint-env jest */
	Object.keys(ProgressRing).forEach(function (name) {
		var wrapper = function wrapper(element) {
			return function () {
				return _react2.default.createElement(
					_iconSettings2.default,
					{ iconPath: '/assets/icons' },
					element()
				);
			};
		};

		test(name + ' DOM Snapshot', function () {
			expect((0, _snapshotHelpers.renderMarkup)(wrapper(ProgressRing[name]))).toMatchSnapshot();
		});
	});
});