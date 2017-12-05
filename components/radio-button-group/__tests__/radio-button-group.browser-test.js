'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require('chai-enzyme');

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require('enzyme');

var _airbnbPropTypes = require('airbnb-prop-types');

var _enzymeHelpers = require('../../../tests/enzyme-helpers');

var _radioButtonGroup = require('../../radio-button-group');

var _radioButtonGroup2 = _interopRequireDefault(_radioButtonGroup);

var _radio = require('../../radio-button-group/radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */


_chai2.default.use((0, _chaiEnzyme2.default)());

/* Re-usable demo component.
 */

var RadioButtonGroupExample = function (_React$Component) {
	_inherits(RadioButtonGroupExample, _React$Component);

	function RadioButtonGroupExample(props) {
		_classCallCheck(this, RadioButtonGroupExample);

		var _this = _possibleConstructorReturn(this, (RadioButtonGroupExample.__proto__ || Object.getPrototypeOf(RadioButtonGroupExample)).call(this, props));

		_this.state = { checked: 'Tue' };
		return _this;
	}

	_createClass(RadioButtonGroupExample, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
			return _react2.default.createElement(
				_radioButtonGroup2.default,
				{
					labels: this.props.labels,
					onChange: function onChange(event) {
						return _this2.setState({ checked: event.target.value });
					},
					disabled: this.props.disabled,
					required: this.props.required
				},
				days.map(function (day) {
					return _react2.default.createElement(_radio2.default, { key: day, label: day, value: day, checked: _this2.state.checked === day, variant: 'button-group' });
				})
			);
		}
	}]);

	return RadioButtonGroupExample;
}(_react2.default.Component);

RadioButtonGroupExample.propTypes = {
	labels: (0, _airbnbPropTypes.shape)({
		error: _propTypes2.default.string,
		label: _propTypes2.default.string
	}),
	disabled: _propTypes2.default.bool,
	required: _propTypes2.default.bool
};

RadioButtonGroupExample.defaultProps = {
	labels: { label: 'Day of week' }
};

/* RadioButtonGroup rendering tests
 */
describe('RadioButtonGroup', function () {
	var _this3 = this;

	var mountNode = void 0;
	var wrapper = void 0;

	beforeEach(function () {
		mountNode = (0, _enzymeHelpers.createMountNode)({ context: _this3 });
	});

	afterEach(function () {
		(0, _enzymeHelpers.destroyMountNode)({ wrapper: wrapper, mountNode: mountNode });
	});

	it('renders a radio button group', function () {
		wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioButtonGroupExample, null), { attachTo: mountNode });
		var radios = wrapper.find(_radio2.default);
		(0, _chai.expect)(radios).to.have.lengthOf(5, 'there are five radio inputs');
		for (var index = 0; index < radios.length; index++) {
			var radio = radios.get(index);
			(0, _chai.expect)(radio.props.checked).to.equal(radio.props.label === 'Tue', 'the second radio input is checked');
		}
		var legend = wrapper.find('legend');
		(0, _chai.expect)(legend.text()).to.equal('Day of week', 'there is a label');
	});

	it('renders a disabled state', function () {
		wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioButtonGroupExample, { disabled: true }), { attachTo: mountNode });
		var radios = wrapper.find(_radio2.default);
		for (var index = 0; index < radios.length; index++) {
			var radio = radios.get(index);
			(0, _chai.expect)(radio.props.disabled, 'all radio inputs are disabled').to.be.true;
		}
	});

	it('renders a required indicator', function () {
		wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioButtonGroupExample, { required: true }), { attachTo: mountNode });
		var abbr = wrapper.find('abbr');
		(0, _chai.expect)(abbr.text()).to.equal('*', 'there is a required indicator');
	});

	it('triggers a change callback', function () {
		wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioButtonGroupExample, null), { attachTo: mountNode });
		var radio = wrapper.find({ value: 'Mon' });
		(0, _chai.expect)(radio.props().checked).to.be.false;
		radio.simulate('change', { event: { target: 'Mon' } });
		(0, _chai.expect)(radio.props().checked, 'radio button changes from unchecked to checked').to.be.true;
	});
});