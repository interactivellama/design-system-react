/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import Input from '../../../forms/input';
import Icon from '../../../icon';
import InputIcon from '../../../icon/input-icon';
import IconSettings from '../../../icon-settings';
var findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('SLDSInput', function () {
  var defaultProps = {
    placeholder: 'Placeholder Text'
  };
  var body;

  var renderInput = function renderInput(instance) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, instance), body);
  };

  function removeInput() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var createInput = function createInput(props) {
    return React.createElement(Input, assign({}, defaultProps, props));
  };

  var getInput = function getInput(props) {
    return renderInput(createInput(props));
  };

  describe('Standard Input with Label', function () {
    var component;
    var wrapper;
    var input;
    var label;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        id: 'custom-id'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      input = findRenderedDOMComponentWithTag(component, 'input');
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
    });
    afterEach(function () {
      removeInput();
    });
    it('is wrapped in div with class "slds-form-element"', function () {
      expect(wrapper.className).to.include('slds-form-element');
    });
    it('renders label', function () {
      expect(label.textContent).to.equal('Input Label');
    });
    it('renders input element with class "slds-input"', function () {
      expect(input.className).to.include('slds-input');
    });
    it('has an id', function () {
      expect(input.getAttribute('id')).to.be.ok;
    });
    it('can pass custom id', function () {
      expect(input.getAttribute('id')).to.equal('custom-id');
    });
    it('renders placeholder text', function () {
      expect(input.getAttribute('placeholder')).to.equal('Placeholder Text');
    });
    it('has associated label for tag pointing to id of input', function () {
      var labelForTag = label.getAttribute('for');
      var inputId = input.getAttribute('id');
      expect(labelForTag).to.equal(inputId);
    });
  });
  describe('Input without Assistive Text Label', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Assistive Label'
        }
      });
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('renders label (assitive)', function () {
      expect(label.textContent).to.equal('Assistive Label');
    });
    it('label has class "slds-assistive-text"', function () {
      expect(label.className).to.include('slds-assistive-text');
    });
    it('has associated label for tag pointing to id of input', function () {
      var labelForTag = label.getAttribute('for');
      var inputId = input.getAttribute('id');
      expect(labelForTag).to.equal(inputId);
    });
  });
  describe('Read Only Input', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        readOnly: true
      });
      label = findRenderedDOMComponentWithTag(component, 'label');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('label has class "slds-form-element__label"', function () {
      expect(label.className).to.include('slds-form-element__label');
    });
    it('input has attribute "readonly"', function () {
      expect(input.getAttribute('readonly')).to.equal('');
    });
  });
  describe('Static Input', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        isStatic: true
      });
      label = scryRenderedDOMComponentsWithTag(component, 'span')[0];
      input = scryRenderedDOMComponentsWithTag(component, 'span')[1];
    });
    afterEach(function () {
      removeInput();
    });
    it('label is a span and has class "slds-form-element__label"', function () {
      expect(label.className).to.include('slds-form-element__label');
    });
    it('input is a span and has class "slds-form-element__static"', function () {
      expect(input.className).to.include('slds-form-element__static');
    });
  });
  describe('Disabled Input', function () {
    var component;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        disabled: true
      });
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('input has attribute "disabled"', function () {
      expect(input.getAttribute('disabled')).to.equal('');
    });
  });
  describe('Multiple Inputs', function () {
    var component1;
    var component2;
    var input1;
    var input2;
    beforeEach(function () {
      component1 = getInput({
        label: 'Input One'
      });
      component2 = getInput({
        label: 'Input Two'
      });
      input1 = findRenderedDOMComponentWithTag(component1, 'input');
      input2 = findRenderedDOMComponentWithTag(component2, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('each input has unique generated id', function () {
      expect(input1.getAttribute('id')).to.not.equal(input2.getAttribute('id'));
    });
  });
  describe('Required Input in Error State', function () {
    var component;
    var wrapper;
    var error;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        required: true,
        errorText: 'Error Message'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('input wrapper contains an <abbr> that has class "slds-required"', function () {
      expect(findRenderedDOMComponentWithTag(component, 'abbr').className).to.include('slds-required');
    });
    it('input wrapper has class "slds-has-error"', function () {
      expect(wrapper.className).to.include('slds-has-error');
    });
    it('renders error message', function () {
      expect(error.textContent).to.equal('Error Message');
    });
    it('has associated aria-describedby pointing to id of error message', function () {
      var inputDescribedby = input.getAttribute('aria-describedby');
      var errorId = error.getAttribute('id');
      expect(inputDescribedby).to.equal(errorId);
    });
  });
  describe('Input with Left Clickable Icon', function () {
    var component;
    var elementControl;
    var leftButton;
    var iconAssistiveText;
    var clickCallback = sinon.spy();
    beforeEach(function () {
      component = getInput({
        iconLeft: React.createElement(InputIcon, {
          assistiveText: "Passed assistive text to icon",
          name: "search",
          category: "utility",
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
      expect(elementControl.className).to.include('slds-input-has-icon');
    });
    it('passes "assitiveText" down to icon', function () {
      expect(iconAssistiveText.textContent).to.equal('Passed assistive text to icon');
    });
    it('icon renders button BEFORE input in DOM', function () {
      var render = elementControl.innerHTML;
      expect(render.indexOf('<button')).to.be.below(render.indexOf('<input'));
    });
    it('icon can be clicked', function () {
      TestUtils.Simulate.click(leftButton);
      expect(clickCallback.calledOnce).to.be.true;
    });
  });
  describe('Input with Right Clickable Icon', function () {
    var component;
    var elementControl;
    var leftButton;
    var clickCallback = sinon.spy();
    beforeEach(function () {
      component = getInput({
        iconRight: React.createElement(InputIcon, {
          assistiveText: "Passed assistive text to icon",
          name: "search",
          category: "utility",
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
      expect(elementControl.className).to.include('slds-input-has-icon');
    });
    it('icon renders button AFTER input in DOM', function () {
      var render = elementControl.innerHTML;
      expect(render.indexOf('<button')).to.be.above(render.indexOf('<input'));
    });
    it('icon can be clicked', function () {
      TestUtils.Simulate.click(leftButton);
      expect(clickCallback.calledOnce).to.be.true;
    });
  });
  describe('Input with Non-Clickable Icon', function () {
    var component;
    var elementControl;
    beforeEach(function () {
      component = getInput({
        iconRight: React.createElement(Icon, {
          name: "search",
          category: "utility"
        })
      });
      elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
    });
    afterEach(function () {
      removeInput();
    });
    it('button tag does not exist', function () {
      expect(elementControl.getElementsByTagName('button')[0]).to.not.be.ok;
    });
  });
  describe('Input with Loading Spinner Icon', function () {
    var component;
    var spinner;
    var input;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Passed assistive text to icon'
        },
        hasSpinner: true,
        iconRight: React.createElement(InputIcon, {
          assistiveText: "Passed assistive text to icon",
          name: "search",
          category: "utility"
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
      expect(spinner).to.be.ok;
    });
    it('input aria-describedby points to id of spinner)', function () {
      var spinnerId = spinner.getAttribute('id');
      var inputDescribedby = input.getAttribute('aria-describedby');
      expect(inputDescribedby).to.include(spinnerId);
    });
    it('input aria-describedby points to id of spinner AND id of error message)', function () {
      var spinnerId = spinner.getAttribute('id');
      var inputDescribedby = input.getAttribute('aria-describedby');
      expect(inputDescribedby).to.include(spinnerId);
    });
  });
  describe('Input with Loading Spinner Icon & Error', function () {
    var component;
    var spinner;
    var input;
    var error;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Passed assistive text to icon'
        },
        required: true,
        errorText: 'Error Message',
        hasSpinner: true,
        iconRight: React.createElement(InputIcon, {
          assistiveText: "Passed assistive text to icon",
          name: "search",
          category: "utility"
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
      expect(inputDescribedby).to.equal("".concat(spinnerId, " ").concat(errorId));
    });
  });
  describe('Input with Fixed Left Text', function () {
    var component;
    var fixedTextLeft;
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
      expect(fixedTextLeft).to.be.ok;
    });
    it('renders fixed text node content', function () {
      expect(fixedTextLeft.textContent).to.equal('$');
    });
  });
});
//# sourceMappingURL=input.browser-test.js.map