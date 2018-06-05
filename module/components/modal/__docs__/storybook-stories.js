/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { MODAL } from '../../../utilities/constants';
import Modal from '../../modal';
import MenuPicklist from '../../menu-picklist';
import Timepicker from '../../time-picker';
import Datepicker from '../../date-picker';
import Button from '../../button';
import ComboboxBase from '../../combobox/__examples__/base';
import ModalCustomParentNode from '../__examples__/modal-custom-parent-node';
import SLDSSettings from '../../SLDSSettings';
SLDSSettings.setAppElement('#root'); // used by Modal component

var getModal = function getModal(props) {
  return React.createElement(Modal, props);
};

var modalFooter = [React.createElement(Button, {
  key: "modalBCancel",
  label: "Cancel"
}), React.createElement(Button, {
  key: "modalBSave",
  label: "Save",
  variant: "brand"
})];
var modalContent = React.createElement("section", {
  className: "slds-p-around--large"
}, React.createElement("div", {
  className: "slds-form-element slds-m-bottom--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "opptyName"
}, "Opportunity Name"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "opptyName",
  className: "slds-input",
  type: "text",
  placeholder: "Enter name"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-bottom--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "description"
}, "Opportunity Description"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("textarea", {
  id: "description",
  className: "slds-textarea",
  placeholder: "Enter description"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-m-bottom--large"
}, React.createElement(Datepicker, {
  onDateChange: function onDateChange() {
    action('date is selected');
  }
})), React.createElement("div", {
  className: "slds-form-element slds-m-bottom--large"
}, React.createElement(ComboboxBase, null)), React.createElement(MenuPicklist, {
  className: "slds-m-bottom--large",
  label: "Lead Source",
  onSelect: function onSelect(option) {
    action('selected: ', option.label);
  },
  options: [{
    label: 'Third Party Program',
    value: 'A0'
  }, {
    label: 'Cold Call',
    value: 'B0'
  }, {
    label: 'LinkedIn',
    value: 'C0'
  }, {
    label: 'Direct Mail',
    value: 'D0'
  }, {
    label: 'Other',
    value: 'E0'
  }],
  placeholder: "Select Lead Source",
  value: "B0"
}), React.createElement("div", {
  className: "slds-m-bottom--large"
}, React.createElement(Timepicker, {
  onDateChange: function onDateChange() {
    action('time is selected');
  }
})), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical--large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))));
storiesOf(MODAL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Modal with Custom Parent Node', function () {
  return React.createElement(ModalCustomParentNode, null);
}).add('Small', function () {
  return getModal({
    assistiveText: {
      closeButton: 'Exit'
    },
    isOpen: true,
    tagline: 'Enter in details below',
    title: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    portalClassName: 'portal-class-name-test'
  });
}).add('Small with footer, not dismissible', function () {
  return getModal({
    dismissible: false,
    isOpen: true,
    tagline: 'Enter in details below',
    title: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: modalFooter
  });
}).add('Small with custom footer', function () {
  return getModal({
    directional: true,
    isOpen: true,
    tagline: 'Enter in details below',
    title: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: React.createElement("div", null, React.createElement(Button, {
      label: "cancel"
    }), " and some random text in here", ' ', React.createElement(Button, {
      label: "update"
    }), React.createElement(Button, {
      label: "run"
    }))
  });
}).add('Small no header', function () {
  return getModal({
    isOpen: true,
    children: modalContent,
    onRequestClose: action('modal closed'),
    portalClassName: 'portal-class-name-test'
  });
}).add('Large with directional footer', function () {
  return getModal({
    directional: true,
    isOpen: true,
    tagline: 'Enter in details below',
    title: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: modalFooter,
    size: 'large'
  });
}).add('Prompt', function () {
  return getModal({
    isOpen: true,
    title: 'Delete state - Default',
    children: React.createElement("div", {
      className: "slds-p-around--medium"
    }, "Are you sure you want to delete the Default State? This action cannot be undone. Are you sure you want to delete the Default State? This action cannot be undone. Are you sure you want to delete the Default State? This action cannot be undone.", ' ', React.createElement(Button, {
      className: "slds-m-around--medium"
    }, "Ok, got it!")),
    // eslint-disable-line max-len
    prompt: 'error',
    onRequestClose: action('modal closed')
  });
});
//# sourceMappingURL=storybook-stories.js.map