// Import your external dependencies
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import IconSettings from '../../icon-settings';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Datepicker from '../../date-picker';
import Input from '../../forms/input';
import KEYS from '../../../utilities/key-code';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-datepicker',
  value: new Date(2007, 0, 6)
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent = createReactClass({
  displayName: 'DatepickerDemoComponent',
  propTypes: {
    isOpen: PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  getInitialState: function getInitialState() {
    return {};
  },
  // event handlers
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Datepicker, this.props));
  }
});
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */

describe('SLDSDatepicker', function () {
  var _this = this;

  var mountNode;
  var wrapper;
  var triggerClassSelector = '.slds-input__icon';
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has aria-haspopup, correct aria-expanded on input trigger.', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var inputTrigger = wrapper.find(triggerClassSelector);
      expect(inputTrigger.node.getAttribute('aria-haspopup')).to.equal('true');
      var ariaExpanded = inputTrigger.find('button').node.getAttribute('aria-expanded');
      expect(ariaExpanded).to.equal('true');
    });
  }); // PROPS AND CHILDREN

  describe('Optional props', function () {
    var customPlaceholder = 'With custom Input';
    var optionalProps = {
      children: React.createElement(Input, {
        placeholder: customPlaceholder,
        value: ""
      })
    };
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has custom input with custom placeholder', function () {
      wrapper = mount(React.createElement(DemoComponent, optionalProps), {
        attachTo: mountNode
      });
      expect(wrapper.find('input').node.getAttribute('placeholder')).to.equal(customPlaceholder);
    });
  }); // EVENTS

  describe('onClose, onRequestClose, onOpen callbacks are set', function () {
    var _this2 = this;

    beforeEach(function () {
      mountNode = createMountNode({
        context: _this2
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onOpen is executed when trigger is clicked, onClose is executed when date is selected', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        onClose: function onClose() {
          setTimeout(function () {
            var month = wrapper.find('.datepicker__month');
            expect(month.node).to.not.exist;
            done();
          }, 0);
        },
        onRequestClose: function onRequestClose() {
          var month = wrapper.find('.datepicker__month');
          expect(month.node).to.exist;
        },
        onOpen: function onOpen() {
          var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
          expect(firstDayOfMonth).to.exist;
          firstDayOfMonth.simulate('click', {});
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
    it('onChange is triggered when date is selected', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        onChange: function onChange(event, data) {
          console.log('onChange');
          setTimeout(function () {
            var input = wrapper.find('input');
            expect(input.node.value).to.equal('1/1/2007'); // test callback parameters

            expect(data.date.getTime()).to.equal(new Date('1/1/2007').getTime());
            expect(data.formattedDate).to.equal('1/1/2007');
            done();
          }, 0);
        },
        onOpen: function onOpen() {
          var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
          expect(firstDayOfMonth).to.exist;
          firstDayOfMonth.simulate('click', {});
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
  });
  describe('keyboard interactions', function () {
    /* Test event callback functions using Simulate. For more information, view
     * https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/simulate.md
     */
    describe('Esc when menu is open', function () {
      var _this3 = this;

      beforeEach(function () {
        mountNode = createMountNode({
          context: _this3
        });
      });
      afterEach(function () {
        destroyMountNode({
          wrapper: wrapper,
          mountNode: mountNode
        });
      });
      it('opens on trigger click, closes on ESC', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          onClose: function onClose() {
            setTimeout(function () {
              var month = wrapper.find('.datepicker__month');
              expect(month.node).to.not.exist;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
            firstDayOfMonth.simulate('keyDown', {
              key: 'Esc',
              keyCode: KEYS.ESCAPE,
              which: KEYS.ESCAPE
            });
          }
        }), {
          attachTo: mountNode
        });
        var trigger = wrapper.find(triggerClassSelector);
        trigger.simulate('click', {});
      });
      it('navigates to next week', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 13).getTime());
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Down',
          keyCode: KEYS.DOWN,
          which: KEYS.DOWN
        });
      });
      it('navigates to next day', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 7).getTime());
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Right',
          keyCode: KEYS.RIGHT,
          which: KEYS.RIGHT
        });
      });
      it('navigates to previous week (that is of a previous month)', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2006, 11, 30).getTime());
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Up',
          keyCode: KEYS.UP,
          which: KEYS.UP
        });
      });
      it('navigates to previous day', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 5).getTime());
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Left',
          keyCode: KEYS.LEFT,
          which: KEYS.LEFT
        });
      });
      it('calendar blur, focus on previous month button', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.ref.textContent).to.equal('Previous month');
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Tab',
          keyCode: KEYS.TAB,
          which: KEYS.TAB
        });
      });
      it('calendar blur, focus on today', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.ref.textContent).to.equal('Today');
            done();
          }
        }), {
          attachTo: mountNode
        });
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Tab',
          keyCode: KEYS.TAB,
          shiftKey: true,
          which: KEYS.TAB
        });
      });
    });
  });
  describe('Disabled', function () {
    var _this4 = this;

    var triggerClicked = sinon.spy();
    var dialogOpened = sinon.spy();
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this4
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onOpen is not called when disabled', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        disabled: true,
        onClick: triggerClicked,
        onOpen: dialogOpened
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find('#sample-datepicker');
      trigger.simulate('click', {});
      setTimeout(function () {
        expect(dialogOpened.callCount).to.equal(0);
        done();
      }, 200);
    });
  });
  describe('Disable dates', function () {
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('disable weekends', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true,
        value: new Date(2007, 0, 5),
        dateDisabled: function dateDisabled(_ref) {
          var date = _ref.date;
          return date.getDay() > 5 || date.getDay() < 1;
        }
      }), {
        attachTo: mountNode
      });
      var input = wrapper.find('input');
      expect(input.node.value).to.equal('1/5/2007');
      var disabledDay = wrapper.find('.datepicker__month [aria-disabled=true]').first();
      disabledDay.simulate('click', {});
      expect(input.node.value).to.equal('1/5/2007');
      var day = wrapper.find('.datepicker__month [aria-disabled=false]').first();
      day.simulate('click', {});
      expect(input.node.value).to.equal('1/1/2007');
      done();
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
  });
});
//# sourceMappingURL=date-picker.browser-test.js.map