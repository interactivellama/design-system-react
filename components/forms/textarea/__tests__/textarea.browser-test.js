define(['react', 'react-dom', 'chai', 'lodash.assign', 'react-addons-test-utils', '../'], function (_react, _reactDom, _chai, _lodash, _reactAddonsTestUtils, _) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
	    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag,
	    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;


	describe('SLDS TEXTAREA **************************************************', function () {
		var defaultProps = {
			placeholder: 'Placeholder Text'
		};

		var body = void 0;

		var renderTextarea = function renderTextarea(instance) {
			body = document.createElement('div');
			document.body.appendChild(body);
			return _reactDom2.default.render(instance, body);
		};

		function removeTextarea() {
			_reactDom2.default.unmountComponentAtNode(body);
			document.body.removeChild(body);
		}

		var createTextarea = function createTextarea(props) {
			return _react2.default.createElement(_2.default, (0, _lodash2.default)({}, defaultProps, props));
		};
		var getTextarea = function getTextarea(props) {
			return renderTextarea(createTextarea(props));
		};

		describe('Standard Textarea with Label', function () {
			var component = void 0;
			var wrapper = void 0;
			var textarea = void 0;
			var label = void 0;

			beforeEach(function () {
				component = getTextarea({ label: 'Textarea Label', id: 'custom-id' });
				wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
				textarea = findRenderedDOMComponentWithTag(component, 'textarea');
				label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
			});

			afterEach(function () {
				removeTextarea();
			});

			it('is wrapped in div with class "slds-form-element"', function () {
				(0, _chai.expect)(wrapper.className).to.include('slds-form-element');
			});

			it('renders label', function () {
				(0, _chai.expect)(label.textContent).to.equal('Textarea Label');
			});

			it('renders textarea element with class "slds-textarea"', function () {
				(0, _chai.expect)(textarea.className).to.include('slds-textarea');
			});

			it('has an id', function () {
				(0, _chai.expect)(textarea.getAttribute('id')).to.be.ok;
			});

			it('can pass custom id', function () {
				(0, _chai.expect)(textarea.getAttribute('id')).to.equal('custom-id');
			});

			it('renders placeholder text', function () {
				(0, _chai.expect)(textarea.getAttribute('placeholder')).to.equal('Placeholder Text');
			});
		});

		describe('Textarea without Label', function () {
			var component = void 0;
			var label = void 0;

			beforeEach(function () {
				component = getTextarea({ assistiveText: 'Assistive Label' });
				label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
			});

			afterEach(function () {
				removeTextarea();
			});

			it('renders label (assitive)', function () {
				(0, _chai.expect)(label.textContent).to.equal('Assistive Label');
			});

			it('label has class "slds-assistive-text"', function () {
				(0, _chai.expect)(label.className).to.include('slds-assistive-text');
			});
		});

		describe('Multiple Textareas', function () {
			var component1 = void 0;
			var component2 = void 0;
			var textarea1 = void 0;
			var textarea2 = void 0;

			beforeEach(function () {
				component1 = getTextarea({ label: 'Textarea One' });
				component2 = getTextarea({ label: 'Textarea Two' });
				textarea1 = findRenderedDOMComponentWithTag(component1, 'textarea');
				textarea2 = findRenderedDOMComponentWithTag(component2, 'textarea');
			});

			afterEach(function () {
				removeTextarea();
			});

			it('each textarea has unique generated id', function () {
				(0, _chai.expect)(textarea1.getAttribute('id')).to.not.equal(textarea2.getAttribute('id'));
			});
		});

		describe('Required Textarea in Error State', function () {
			var component = void 0;
			var wrapper = void 0;
			var error = void 0;

			beforeEach(function () {
				component = getTextarea({ label: 'Textarea Label', required: true, errorText: 'Error Message' });
				wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
				error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
			});

			afterEach(function () {
				removeTextarea();
			});

			it('textarea wrapper contains an <abbr> that has class "slds-required"', function () {
				(0, _chai.expect)(findRenderedDOMComponentWithTag(component, 'abbr').className).to.include('slds-required');
			});

			it('textarea wrapper has class "slds-has-error"', function () {
				(0, _chai.expect)(wrapper.className).to.include('slds-has-error');
			});

			it('renders error message', function () {
				(0, _chai.expect)(error.textContent).to.equal('Error Message');
			});
		});
	});
});