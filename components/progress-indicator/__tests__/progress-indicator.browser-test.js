define(['react', 'create-react-class', 'react-dom', 'react-addons-test-utils', 'chai', 'chai-enzyme', 'lodash.assign', '../../../tests/enzyme-helpers', '../../progress-indicator', '../../icon-settings'], function (_react, _createReactClass, _reactDom, _reactAddonsTestUtils, _chai, _chaiEnzyme, _lodash, _enzymeHelpers, _progressIndicator, _iconSettings) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

	var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _progressIndicator2 = _interopRequireDefault(_progressIndicator);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Simulate = _reactAddonsTestUtils2.default.Simulate,
	    findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
	    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;


	var defaultProps = {
		id: 'sample-progress-indicator'
	};

	var mockCallback = sinon.spy();

	var DemoComponent = (0, _createReactClass2.default)({
		displayName: 'ProgressIndicatorDemoComponent',
		propTypes: {
			onStepClick: mockCallback,
			onStepFocus: mockCallback
		},

		getDefaultProps: function getDefaultProps() {
			return defaultProps;
		},
		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(_progressIndicator2.default, this.props)
			);
		}
	});

	var steps = [{ id: 0, label: 'tooltip label #1' }, { id: 1, label: 'tooltip label #2' }, { id: 2, label: 'tooltip label #3' }, { id: 3, label: 'tooltip label #4' }, { id: 4, label: 'tooltip label #5' }];

	var sixSteps = [{ id: 0, label: 'custom tooltip #1' }, { id: 1, label: 'tooltip label #2' }, { id: 2, label: 'tooltip label #3' }, { id: 3, label: 'tooltip label #4' }, { id: 4, label: 'tooltip label #5' }, { id: 5, label: 'tooltip label #6' }];

	describe('SLDSProgressIndicator: ', function () {
		describe('Basic Props Render', function () {
			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { steps: steps, selectedStep: steps[2], completedSteps: steps.slice(0, 2) })));

			afterEach(_enzymeHelpers.unmountComponent);

			// PROPS
			it('has five steps by default', function () {
				var item = this.wrapper.find('.slds-progress').find('li');
				(0, _chai.expect)(item).to.have.length(5);
			});

			it('has only one active step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
				(0, _chai.expect)(item).to.have.length(1);
			});

			it('does not have an error step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
				(0, _chai.expect)(item).to.have.length(0);
			});

			it('has correct number of completed steps', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
				(0, _chai.expect)(item).to.have.length(2);
			});

			it('has a white background', function () {
				var item = this.wrapper.find('.slds-progress_shade');
				(0, _chai.expect)(item).to.have.length(0);
			});
		});

		describe('Within-Modal Props Render (Without Error)', function () {
			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { steps: steps, selectedStep: steps[2], completedSteps: steps.slice(0, 2), variant: 'modal' })));

			afterEach(_enzymeHelpers.unmountComponent);

			// PROPS
			it('has 5 steps by default', function () {
				var item = this.wrapper.find('.slds-progress').find('li');
				(0, _chai.expect)(item).to.have.length(5);
			});

			it('has no error step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
				(0, _chai.expect)(item).to.have.length(0);
			});

			it('has 1 active step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
				(0, _chai.expect)(item).to.have.length(1);
			});

			it('has correct number of completed steps', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
				(0, _chai.expect)(item).to.have.length(2);
			});

			it('has a gray background', function () {
				var item = this.wrapper.find('.slds-progress_shade');
				(0, _chai.expect)(item).to.have.length(1);
			});
		});

		describe('Within-Modal Props Render (With Error)', function () {
			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { steps: steps, selectedStep: steps[2], errorSteps: steps.slice(2, 3), completedSteps: steps.slice(0, 2), variant: 'modal' })));

			afterEach(_enzymeHelpers.unmountComponent);

			// PROPS
			it('has 1 error step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
				(0, _chai.expect)(item).to.have.length(1);
			});

			it('has no active step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
				(0, _chai.expect)(item).to.have.length(0);
			});

			it('has correct number of completed steps', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
				(0, _chai.expect)(item).to.have.length(2);
			});
		});

		describe('Tooltip Props Render', function () {
			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
				steps: sixSteps,
				selectedStep: sixSteps[2],
				errorSteps: sixSteps.slice(2, 3),
				completedSteps: sixSteps.slice(0, 2)
			})));

			afterEach(_enzymeHelpers.unmountComponent);

			// PROPS
			it('has an error step', function () {
				var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
				(0, _chai.expect)(item).to.have.length(1);
			});

			it('has a tooltip attached to every step', function () {
				var item = this.wrapper.find('.slds-progress').find('.slds-tooltip-trigger');
				(0, _chai.expect)(item).to.have.length(6);
			});

			it('renders correct assistive text', function () {
				var item = this.wrapper.find('.slds-progress').find('.slds-tooltip-trigger').find('button > span').find('.slds-assistive-text').first();
				(0, _chai.expect)(item.text()).to.include('custom tooltip #1');
			});
		});

		describe('Click Event', function () {
			var clickHandler = sinon.spy();

			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { steps: steps, selectedStep: steps[2], completedSteps: steps.slice(0, 2), onStepClick: clickHandler })));

			afterEach(_enzymeHelpers.unmountComponent);

			// EVENTS
			it('calls onStepClick()', function () {
				var step = this.wrapper.find('.slds-progress').find('li').find('button').first().node;
				// step.simulate('click'); <-- this is causing some errors on tab tests
				Simulate.click(step);
				(0, _chai.expect)(clickHandler.callCount).to.equal(1);
			});
		});

		describe('Assistive Technology', function () {
			/* Detect if presence of accessibility features such as ARIA
    * roles and screen reader text is present in the DOM.
    */
			var focusHandler = sinon.spy();

			beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, { steps: steps, selectedStep: steps[2], completedSteps: steps.slice(0, 2), onStepFocus: focusHandler })));

			afterEach(_enzymeHelpers.unmountComponent);

			// A11Y FEATURES
			it('specifies the role for progress bar', function () {
				var progressbarRole = this.wrapper.find('div[role="progressbar"]');
				(0, _chai.expect)(progressbarRole).to.have.length(1);
			});

			it('renders assistive text for progress bar', function () {
				var item = this.wrapper.find('.slds-progress-bar').find('.slds-assistive-text').first();
				(0, _chai.expect)(item.text()).to.include('Progress:');
				(0, _chai.expect)(item.text()).to.include('%');
			});

			it('renders assistive text for steps', function () {
				var firstItem = this.wrapper.find('.slds-progress').find('li').find('.slds-tooltip-trigger').find('.slds-button').find('.slds-assistive-text').first();
				(0, _chai.expect)(firstItem.text()).to.include('tooltip label');

				var secondItem = this.wrapper.find('.slds-progress').find('li').find('.slds-tooltip-trigger').find('.slds-button').find('.slds-assistive-text').at(1);
				(0, _chai.expect)(secondItem.text()).to.include('Step');
			});
		});

		/**
   * TODO in the future:
   * we may want to extend test cases when TetherJS is removed for future dev
   * The following cases may be considered:
   *    1. test tooltips behave properly (show/hide/with correct label) *on hover*
   *    2. test tooltips behave properly *on focus/blur*
   */
	});
});