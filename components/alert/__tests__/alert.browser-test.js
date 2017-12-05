define(['react', 'chai', 'chai-enzyme', '../../../tests/enzyme-helpers', '../', '../container', '../../icon', '../../icon-settings'], function (_react, _chai, _chaiEnzyme, _enzymeHelpers, _, _container, _icon, _iconSettings) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _chai2 = _interopRequireDefault(_chai);

	var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

	var _2 = _interopRequireDefault(_);

	var _container2 = _interopRequireDefault(_container);

	var _icon2 = _interopRequireDefault(_icon);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	_chai2.default.use((0, _chaiEnzyme2.default)());

	var DemoComponent = function (_Component) {
		_inherits(DemoComponent, _Component);

		function DemoComponent(props) {
			_classCallCheck(this, DemoComponent);

			var _this = _possibleConstructorReturn(this, (DemoComponent.__proto__ || Object.getPrototypeOf(DemoComponent)).call(this, props));

			_this.state = {
				isOpen: true
			};
			return _this;
		}

		_createClass(DemoComponent, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					_iconSettings2.default,
					{ iconPath: '/assets/icons' },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_container2.default,
							null,
							this.state.isOpen ? _react2.default.createElement(_2.default, {
								dismissible: true,
								icon: _react2.default.createElement(_icon2.default, { category: 'utility', name: 'user' }),
								labels: {
									heading: 'Logged in as John Smith (johnsmith@acme.com).',
									headingLink: 'Log out'
								},
								onClickHeadingLink: this.props.onClickHeadingLink,
								onRequestClose: function onRequestClose() {
									_this2.setState({ isOpen: false });
								}
							}) : null
						)
					)
				);
			}
		}]);

		return DemoComponent;
	}(_react.Component);

	DemoComponent.displayName = 'AlertExample';

	describe('SLDSAlert: ', function () {
		var wrapper = void 0;
		var onClickHeadingLink = sinon.spy();

		describe('Dismiss alert', function () {
			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { onClickHeadingLink: onClickHeadingLink })));

			afterEach(_enzymeHelpers.unmountComponent);

			/* Please notice the of `function () {}` and not () => {}.
    * It allows access to the Mocha test context via `this`.
    */
			it('calls onRequestClose handler', function () {
				var button = this.wrapper.find('.slds-notify__close');
				// If applicable, use second parameter to pass the data object
				(0, _chai.expect)(this.wrapper.find('.slds-notify').length).to.equal(1);
				button.simulate('click', {});
				(0, _chai.expect)(this.wrapper.find('.slds-notify').length).to.equal(0);
			});
			it('calls onClickHeadingLink handler', function () {
				var link = this.wrapper.find('a');
				// If applicable, use second parameter to pass the data object
				link.simulate('click', {});
				(0, _chai.expect)(onClickHeadingLink.calledOnce).to.be.true;
			});
		});
	});
});