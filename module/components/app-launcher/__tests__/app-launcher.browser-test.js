import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { expect } from 'chai';
import { mount, ReactWrapper } from 'enzyme';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import IconSettings from '../../icon-settings';
import AppLauncher from '../../app-launcher';
import AppLauncherTile from '../../app-launcher/tile';
import AppLauncherSection from '../../app-launcher/section';
import Search from '../../forms/input/search';
import Button from '../../button';
/* eslint-disable react/no-find-dom-node */

var should = chai.should();
var Simulate = TestUtils.Simulate;
describe('SLDS APP LAUNCHER *******************************************', function () {
  var handles = {
    appLauncher: null,
    appLauncherIcon: null,
    modal: null
  };
  var defaultAppLauncherProps = {
    isOpen: true
  };

  var createAppLauncher = function createAppLauncher(props) {
    return React.createElement(AppLauncher, assign({}, defaultAppLauncherProps, props), React.createElement(AppLauncherSection, {
      title: "All Items"
    }, React.createElement(AppLauncherTile, {
      title: "Marketing Cloud"
    }), React.createElement(AppLauncherTile, {
      title: "Support Cloud"
    })));
  };

  function mountAppLauncher(props) {
    handles.appLauncher = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createAppLauncher(props)));
    handles.appLauncherIcon = handles.appLauncher.find('.slds-context-bar__icon-action');
    /*
     * How to write tests for react-modal using portal
     * http://remarkablemark.org/blog/2017/05/17/testing-react-modal/
     */

    var portalNode = ReactDOM.findDOMNode(handles.appLauncher.find(ReactModal).node.portal); // eslint-disable-line react/no-find-dom-node
    // Wrap the modal portal in an Enzyme wrapper

    handles.modal = new ReactWrapper(handles.appLauncher.find(ReactModal).node.portal, true);
  }

  function cleanDom() {
    // Removes the modal container element from the bottom of the DOM, this will prevent the 'setState' errors
    // gotta be a better way to do this..
    var modalWrapper = document.documentElement.querySelectorAll('.ReactModalPortal')[0];

    if (modalWrapper) {
      modalWrapper.parentNode.removeChild(modalWrapper);
    }
  } // ///////////////////////
  // ////// T O D O ////////
  // ///////////////////////
  // APP LAUNCHER -----
  // tabs?
  // if you pass a isOpen prop, you must control the component with it (this.state.isOpen will now work)
  // (#591, waiting on #590) modal content has classes: slds-modal__content slds-app-launcher__content slds-p-around--medium


  describe('App Launcher', function () {
    var onClose;
    beforeEach(function () {
      onClose = sinon.spy();
      mountAppLauncher({
        modalClassName: 'custom-modal-class',
        modalHeaderButton: React.createElement(Button, {
          label: "App Exchange"
        }),
        onClose: onClose,
        search: React.createElement(Search, {
          assistiveText: "Find an app"
        }),
        title: 'App Launcher!'
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('renders modal', function () {
      should.exist(handles.modal);
    });
    it('renders custom modal class', function () {
      should.exist(handles.modal.find('.custom-modal-class'));
    });
    it('renders modal header', function () {
      should.exist(handles.modal.find('.slds-app-launcher__header'));
    });
    it('app launcher title can be set', function () {
      expect(handles.modal.contains(React.createElement("h2", {
        className: "slds-text-heading--medium"
      }, "App Launcher!"))).to.equal(true);
    });
    it('renders search bar', function () {
      should.exist(handles.modal.find(Search));
    });
    it('renders search bar with proper class', function () {
      should.exist(handles.modal.find('.slds-app-launcher__header-search'));
    });
    it('renders `modalHeaderButton`', function () {
      should.exist(handles.modal.find(Button).at(1));
    });
    it('closing modal fires callback', function () {
      Simulate.click(handles.modal.find('.slds-modal__close').node);
      expect(onClose.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
    it('close modal callback receives original event as arg', function () {
      Simulate.click(handles.modal.find('.slds-modal__close').node);
      expect(onClose.args.length).to.equal(1);
    });
    it('renders modal content', function () {
      should.exist(handles.modal.find('.slds-modal__content .slds-app-launcher__content .slds-p-around--medium'));
    });
    it('app launcher can be passed children', function () {
      should.exist(handles.modal.find('SLDSAppLauncherSection'));
      expect(handles.modal.find('SLDSAppLauncherTile').length).to.equal(2);
    });
  });
  describe('App Launcher Icon', function () {
    var triggerOnClick;
    beforeEach(function () {
      triggerOnClick = sinon.spy();
      mountAppLauncher({
        assistiveText: {
          trigger: 'Custom Icon Assistive Text'
        },
        triggerOnClick: triggerOnClick
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('renders App Launcer icon', function () {
      should.exist(handles.appLauncherIcon);
    });
    it('renders all App Launcher dots', function () {
      expect(handles.appLauncherIcon.find('.slds-icon-waffle').containsAllMatchingElements([React.createElement("span", {
        className: "slds-r1"
      }), React.createElement("span", {
        className: "slds-r2"
      }), React.createElement("span", {
        className: "slds-r3"
      }), React.createElement("span", {
        className: "slds-r4"
      }), React.createElement("span", {
        className: "slds-r5"
      }), React.createElement("span", {
        className: "slds-r6"
      }), React.createElement("span", {
        className: "slds-r7"
      }), React.createElement("span", {
        className: "slds-r8"
      }), React.createElement("span", {
        className: "slds-r9"
      })])).to.equal(true);
    });
    it('App Launcher Icon link has proper classes', function () {
      expect(handles.appLauncherIcon.find('button').node.className).to.include('slds-icon-waffle_container slds-context-bar__button');
    });
    it('clicking App Launcher Icon fires callback', function () {
      Simulate.click(handles.appLauncherIcon.find('button').node);
      expect(triggerOnClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
    it('App Launcher Icon callback receives original event as arg', function () {
      Simulate.click(handles.appLauncherIcon.find('button').node);
      expect(triggerOnClick.args.length).to.equal(1);
    });
    it('renders assistive text from prop', function () {
      expect(handles.appLauncherIcon.find('.slds-assistive-text').text()).to.equal('Custom Icon Assistive Text');
    });
  });
});
//# sourceMappingURL=app-launcher.browser-test.js.map