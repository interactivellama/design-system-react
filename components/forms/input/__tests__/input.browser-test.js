define(['react', 'react-dom', 'chai', 'lodash.assign', 'react-addons-test-utils', '../../../forms/input', '../../../icon', '../../../icon/input-icon', '../../../icon-settings'], function (_react, _reactDom, _chai, _lodash, _reactAddonsTestUtils, _input, _icon, _inputIcon, _iconSettings) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

	var _input2 = _interopRequireDefault(_input);

	var _icon2 = _interopRequireDefault(_icon);

	var _inputIcon2 = _interopRequireDefault(_inputIcon);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
	    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag,
	    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;


	describe('SLDSInput', function () {
		var defaultProps = {
			placeholder: 'Placeholder Text'
		};

		var body = void 0;

		var renderInput = function renderInput(instance) {
			body = document.createElement('div');
			document.body.appendChild(body);
			return _reactDom2.default.render(_react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				instance
			), body);
		};

		function removeInput() {
			_reactDom2.default.unmountComponentAtNode(body);
			document.body.removeChild(body);
		}

		var createInput = function createInput(props) {
			return _react2.default.createElement(_input2.default, (0, _lodash2.default)({}, defaultProps, props));
		};
		var getInput = function getInput(props) {
			return renderInput(createInput(props));
		};

		describe('Standard Input with Label', function () {
			var component = void 0;
			var wrapper = void 0;
			var input = void 0;
			var label = void 0;

			beforeEach(function () {
				component = getInput({ label: 'Input Label', id: 'custom-id' });
				wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
				input = findRenderedDOMComponentWithTag(component, 'input');
				label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
			});

			afterEach(function () {
				removeInput();
			});

			it('is wrapped in div with class "slds-form-element"', function () {
				(0, _chai.expect)(wrapper.className).to.include('slds-form-element');
			});

			it('renders label', function () {
				(0, _chai.expect)(label.textContent).to.equal('Input Label');
			});

			it('renders input element with class "slds-input"', function () {
				(0, _chai.expect)(input.className).to.include('slds-input');
			});

			it('has an id', function () {
				(0, _chai.expect)(input.getAttribute('id')).to.be.ok;
			});

			it('can pass custom id', function () {
				(0, _chai.expect)(input.getAttribute('id')).to.equal('custom-id');
			});

			it('renders placeholder text', function () {
				(0, _chai.expect)(input.getAttribute('placeholder')).to.equal('Placeholder Text');
			});

			it('has associated label for tag pointing to id of input', function () {
				var labelForTag = label.getAttribute('for');
				var inputId = input.getAttribute('id');
				(0, _chai.expect)(labelForTag).to.equal(inputId);
			});
		});

		describe('Input without Assistive Text Label', function () {
			var component = void 0;
			var label = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({ assistiveText: { label: 'Assistive Label' } });
				label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
				input = findRenderedDOMComponentWithTag(component, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('renders label (assitive)', function () {
				(0, _chai.expect)(label.textContent).to.equal('Assistive Label');
			});

			it('label has class "slds-assistive-text"', function () {
				(0, _chai.expect)(label.className).to.include('slds-assistive-text');
			});

			it('has associated label for tag pointing to id of input', function () {
				var labelForTag = label.getAttribute('for');
				var inputId = input.getAttribute('id');
				(0, _chai.expect)(labelForTag).to.equal(inputId);
			});
		});

		describe('Read Only Input', function () {
			var component = void 0;
			var label = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({ label: 'Input Label', readOnly: true });
				label = findRenderedDOMComponentWithTag(component, 'label');
				input = findRenderedDOMComponentWithTag(component, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('label has class "slds-form-element__label"', function () {
				(0, _chai.expect)(label.className).to.include('slds-form-element__label');
			});

			it('input has attribute "readonly"', function () {
				(0, _chai.expect)(input.getAttribute('readonly')).to.equal('');
			});
		});

		describe('Static Input', function () {
			var component = void 0;
			var label = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({ label: 'Input Label', isStatic: true });
				label = scryRenderedDOMComponentsWithTag(component, 'span')[0];
				input = scryRenderedDOMComponentsWithTag(component, 'span')[1];
			});

			afterEach(function () {
				removeInput();
			});

			it('label is a span and has class "slds-form-element__label"', function () {
				(0, _chai.expect)(label.className).to.include('slds-form-element__label');
			});

			it('input is a span and has class "slds-form-element__static"', function () {
				(0, _chai.expect)(input.className).to.include('slds-form-element__static');
			});
		});

		describe('Disabled Input', function () {
			var component = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({ label: 'Input Label', disabled: true });
				input = findRenderedDOMComponentWithTag(component, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('input has attribute "disabled"', function () {
				(0, _chai.expect)(input.getAttribute('disabled')).to.equal('');
			});
		});

		describe('Multiple Inputs', function () {
			var component1 = void 0;
			var component2 = void 0;
			var input1 = void 0;
			var input2 = void 0;

			beforeEach(function () {
				component1 = getInput({ label: 'Input One' });
				component2 = getInput({ label: 'Input Two' });
				input1 = findRenderedDOMComponentWithTag(component1, 'input');
				input2 = findRenderedDOMComponentWithTag(component2, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('each input has unique generated id', function () {
				(0, _chai.expect)(input1.getAttribute('id')).to.not.equal(input2.getAttribute('id'));
			});
		});

		describe('Required Input in Error State', function () {
			var component = void 0;
			var wrapper = void 0;
			var error = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({ label: 'Input Label', required: true, errorText: 'Error Message' });
				wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
				error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
				input = findRenderedDOMComponentWithTag(component, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('input wrapper contains an <abbr> that has class "slds-required"', function () {
				(0, _chai.expect)(findRenderedDOMComponentWithTag(component, 'abbr').className).to.include('slds-required');
			});

			it('input wrapper has class "slds-has-error"', function () {
				(0, _chai.expect)(wrapper.className).to.include('slds-has-error');
			});

			it('renders error message', function () {
				(0, _chai.expect)(error.textContent).to.equal('Error Message');
			});

			it('has associated aria-describedby pointing to id of error message', function () {
				var inputDescribedby = input.getAttribute('aria-describedby');
				var errorId = error.getAttribute('id');
				(0, _chai.expect)(inputDescribedby).to.equal(errorId);
			});
		});

		describe('Input with Left Clickable Icon', function () {
			var component = void 0;
			var elementControl = void 0;
			var leftButton = void 0;
			var iconAssistiveText = void 0;

			var clickCallback = sinon.spy();

			beforeEach(function () {
				component = getInput({
					iconLeft: _react2.default.createElement(_inputIcon2.default, {
						assistiveText: 'Passed assistive text to icon',
						name: 'search',
						category: 'utility',
						onClick: clickCallback
					})
				});
				leftButton = findRenderedDOMComponentWithTag(component, 'button');
				iconAssistiveText = findRenderedDOMComponentWithClass(component, 'slds-assistive-text');
				elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
			});

			afterEach(function () {
				removeInput();
			});

			it('element control has class "slds-input-has-icon"', function () {
				(0, _chai.expect)(elementControl.className).to.include('slds-input-has-icon');
			});

			it('passes "assitiveText" down to icon', function () {
				(0, _chai.expect)(iconAssistiveText.textContent).to.equal('Passed assistive text to icon');
			});

			it('icon renders button BEFORE input in DOM', function () {
				var render = elementControl.innerHTML;
				(0, _chai.expect)(render.indexOf('<button')).to.be.below(render.indexOf('<input'));
			});

			it('icon can be clicked', function () {
				_reactAddonsTestUtils2.default.Simulate.click(leftButton);
				(0, _chai.expect)(clickCallback.calledOnce).to.be.true;
			});
		});

		describe('Input with Right Clickable Icon', function () {
			var component = void 0;
			var elementControl = void 0;
			var leftButton = void 0;

			var clickCallback = sinon.spy();

			beforeEach(function () {
				component = getInput({
					iconRight: _react2.default.createElement(_inputIcon2.default, {
						assistiveText: 'Passed assistive text to icon',
						name: 'search',
						category: 'utility',
						onClick: clickCallback
					})
				});
				leftButton = findRenderedDOMComponentWithTag(component, 'button');
				elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
			});

			afterEach(function () {
				removeInput();
			});

			it('element control has class "slds-input-has-icon"', function () {
				(0, _chai.expect)(elementControl.className).to.include('slds-input-has-icon');
			});

			it('icon renders button AFTER input in DOM', function () {
				var render = elementControl.innerHTML;
				(0, _chai.expect)(render.indexOf('<button')).to.be.above(render.indexOf('<input'));
			});

			it('icon can be clicked', function () {
				_reactAddonsTestUtils2.default.Simulate.click(leftButton);

				(0, _chai.expect)(clickCallback.calledOnce).to.be.true;
			});
		});

		describe('Input with Non-Clickable Icon', function () {
			var component = void 0;
			var elementControl = void 0;

			beforeEach(function () {
				component = getInput({ iconRight: _react2.default.createElement(_icon2.default, { name: 'search', category: 'utility' }) });
				elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
			});

			afterEach(function () {
				removeInput();
			});

			it('button tag does not exist', function () {
				(0, _chai.expect)(elementControl.getElementsByTagName('button')[0]).to.not.be.ok;
			});
		});

		describe('Input with Loading Spinner Icon', function () {
			var component = void 0;
			var spinner = void 0;
			var input = void 0;

			beforeEach(function () {
				component = getInput({
					assistiveText: { label: 'Passed assistive text to icon' },
					hasSpinner: true,
					iconRight: _react2.default.createElement(_inputIcon2.default, {
						assistiveText: 'Passed assistive text to icon',
						name: 'search',
						category: 'utility'
					}),
					id: 'unique-id-4',
					label: 'Input Label'
				});
				spinner = findRenderedDOMComponentWithClass(component, 'slds-spinner');
				input = findRenderedDOMComponentWithTag(component, 'input');
			});

			afterEach(function () {
				removeInput();
			});

			it('renders loading spinner icon', function () {
				(0, _chai.expect)(spinner).to.be.ok;
			});

			it('input aria-describedby points to id of spinner)', function () {
				var spinnerId = spinner.getAttribute('id');
				var inputDescribedby = input.getAttribute('aria-describedby');
				(0, _chai.expect)(inputDescribedby).to.include(spinnerId);
			});

			it('input aria-describedby points to id of spinner AND id of error message)', function () {
				var spinnerId = spinner.getAttribute('id');
				var inputDescribedby = input.getAttribute('aria-describedby');
				(0, _chai.expect)(inputDescribedby).to.include(spinnerId);
			});
		});

		describe('Input with Loading Spinner Icon & Error', function () {
			var component = void 0;
			var spinner = void 0;
			var input = void 0;
			var error = void 0;

			beforeEach(function () {
				component = getInput({
					assistiveText: { label: 'Passed assistive text to icon' },
					required: true,
					errorText: 'Error Message',
					hasSpinner: true,
					iconRight: _react2.default.createElement(_inputIcon2.default, {
						assistiveText: 'Passed assistive text to icon',
						name: 'search',
						category: 'utility'
					}),
					id: 'unique-id-4',
					label: 'Input Label'
				});
				spinner = findRenderedDOMComponentWithClass(component, 'slds-spinner');
				input = findRenderedDOMComponentWithTag(component, 'input');
				error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
			});

			afterEach(function () {
				removeInput();
			});

			it('input aria-describedby points to id of spinner AND id of error message)', function () {
				var errorId = error.getAttribute('id');
				var spinnerId = spinner.getAttribute('id');
				var inputDescribedby = input.getAttribute('aria-describedby');
				(0, _chai.expect)(inputDescribedby).to.equal(spinnerId + ' ' + errorId);
			});
		});

		describe('Input with Fixed Left Text', function () {
			var component = void 0;
			var fixedTextLeft = void 0;

			beforeEach(function () {
				component = getInput({
					fixedTextLeft: '$',
					id: 'unique-id-5',
					label: 'Input Label'
				});
				fixedTextLeft = findRenderedDOMComponentWithClass(component, 'slds-form-element__addon');
			});

			afterEach(function () {
				removeInput();
			});

			it('renders fixed text node', function () {
				(0, _chai.expect)(fixedTextLeft).to.be.ok;
			});

			it('renders fixed text node content', function () {
				(0, _chai.expect)(fixedTextLeft.textContent).to.equal('$');
			});
		});
	});
});