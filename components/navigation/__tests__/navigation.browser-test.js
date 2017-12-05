'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* Adds all of the Mocha (eg `it` and `should`) and sinon testing global
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * variables to the global namespace for eslint purposes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
/* eslint-env mocha */
/* global sinon */

// Additional modifiers to [eslint-config-slds](https://github.com/salesforce-ux/eslint-config-slds) for convenience
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/display-name */

// Import your external dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require('chai-enzyme');

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _object = require('object.entries');

var _object2 = _interopRequireDefault(_object);

var _enzymeHelpers = require('../../../tests/enzyme-helpers');

var _navigation = require('../../../utilities/sample-data/navigation');

var _navigation2 = require('../../navigation');

var _navigation3 = _interopRequireDefault(_navigation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shim for PhantomJS
if (!Object.entries) {
	_object2.default.shim();
}

/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */


/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

var defaultProps = {
	id: 'sample-navigation',
	className: 'sample-navigation',
	categories: _navigation.sampleReportCategories
};

/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 */
var DemoComponent = (0, _createReactClass2.default)({
	displayName: 'NavigationDemoComponent',
	propTypes: {
		selectedId: _propTypes2.default.string,
		onSelect: _propTypes2.default.func
	},

	getDefaultProps: function getDefaultProps() {
		return defaultProps;
	},
	getInitialState: function getInitialState() {
		return {};
	},


	// event handlers

	render: function render() {
		return _react2.default.createElement(_navigation3.default, this.props);
	}
});

describe('SLDSNavigation', function () {
	describe('Assistive technology', function () {
		/* Detect if presence of accessibility features such as ARIA
   * roles and screen reader text is present in the DOM.
   */
		beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, null)));

		afterEach(_enzymeHelpers.unmountComponent);

		it('has items described by category headers', function () {
			var _this = this;

			var structure = { reports: 5, folders: 3 };
			Object.entries(structure).forEach(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    categoryId = _ref2[0],
				    itemCount = _ref2[1];

				var header = _this.wrapper.find('#sample-navigation-' + categoryId);
				(0, _chai.expect)(header).to.have.length(1);
				var ariaDescribedbyId = _this.wrapper.find('a[aria-describedby="sample-navigation-' + categoryId + '"]');
				(0, _chai.expect)(ariaDescribedbyId).to.have.length(itemCount);
			});
		});
	});

	// PROPS

	describe('selectedId prop', function () {
		var selectedId = 'my_folders';

		beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { selectedId: selectedId })));

		afterEach(_enzymeHelpers.unmountComponent);

		it('is used to select an item', function () {
			var item = this.wrapper.find('.sample-navigation').find('li.slds-is-active').find('a[data-id="my_folders"]');
			(0, _chai.expect)(item).to.have.length(1);
		});
	});

	// EVENTS

	describe('Item', function () {
		var clickHandler = sinon.spy();

		beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { onSelect: clickHandler })));

		afterEach(_enzymeHelpers.unmountComponent);

		it('calls onSelect', function () {
			var item = this.wrapper.find('.sample-navigation').find('a[data-id="my_folders"]');
			item.simulate('click');
			(0, _chai.expect)(clickHandler.callCount).to.equal(1);
		});
	});
});