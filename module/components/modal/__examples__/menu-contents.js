import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Modal from "../../../../components/modal"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import Lookup from "../../../../components/lookup";
import Picklist from "../../../../components/menu-picklist";
var Example = createReactClass({
  displayName: 'ModalExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  toggleOpen: function toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Button, {
      label: "Open modal with menu contents",
      onClick: this.toggleOpen
    }), React.createElement(Modal, {
      isOpen: this.state.isOpen,
      footer: [React.createElement(Button, {
        label: "Cancel",
        onClick: this.toggleOpen
      }), React.createElement(Button, {
        label: "Save",
        variant: "brand",
        onClick: this.toggleOpen
      })],
      onRequestClose: this.toggleOpen,
      title: "New Opportunity"
    }, React.createElement("section", {
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
      className: "-input",
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
      className: "-textarea",
      placeholder: "Enter description"
    }))), React.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, React.createElement(Lookup, {
      emptyMessage: "No items found",
      hasError: false,
      label: "Account",
      onChange: function onChange(newValue) {
        console.log('New search term: ', newValue);
      },
      onSelect: function onSelect(item) {
        console.log(item, ' Selected');
      },
      options: [{
        type: 'section',
        label: 'SECTION 1'
      }, {
        label: "Paddy's Pub"
      }, {
        label: 'Tyrell Corp'
      }, {
        type: 'section',
        label: 'SECTION 2'
      }, {
        label: 'Paper St. Soap Company'
      }, {
        label: 'Nakatomi Investments'
      }, {
        label: 'Acme Landscaping'
      }, {
        type: 'section',
        label: 'SECTION 3'
      }, {
        label: 'Acme Construction'
      }],
      sectionDividerRenderer: Lookup.DefaultSectionDivider
    })), React.createElement(Picklist, {
      className: "slds-m-bottom--large",
      label: "Lead Source",
      onSelect: function onSelect(option) {
        console.log('selected: ', option.label);
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
    }), React.createElement(Picklist, {
      className: "slds-m-bottom--large",
      label: "Type",
      onSelect: function onSelect(option) {
        console.log('selected: ', option.label);
      },
      options: [{
        label: 'Add on Business',
        value: 'A0'
      }, {
        label: 'Courtesy',
        value: 'B0'
      }, {
        label: 'New Business',
        value: 'C0'
      }, {
        label: 'Renewal',
        value: 'D0'
      }, {
        label: 'Upgrade',
        value: 'E0'
      }],
      placeholder: "Select Opportunity Type",
      value: "C0"
    }), React.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, React.createElement("label", {
      className: "slds-form-element__label",
      htmlFor: "amount"
    }, "Amount"), React.createElement("div", {
      className: "slds-form-element__control"
    }, React.createElement("input", {
      id: "amount",
      className: "-input",
      type: "text",
      placeholder: "Enter Amount"
    })))))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=menu-contents.js.map