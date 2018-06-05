import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Input from "../../../../../components/forms/input"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'InactiveInputExamples',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("section", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Disabled Input"), React.createElement(Input, {
      id: "disabled-input-id",
      label: "My Label",
      disabled: true,
      value: "Disabled value"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "ReadOnly Input"), React.createElement(Input, {
      id: "unique-id-3",
      label: "Input Label",
      readOnly: true,
      value: "Read Only Value"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Static Input"), React.createElement(Input, {
      id: "unique-id-3",
      label: "Input Label",
      isStatic: true,
      value: "Read Only Value"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=inactiveInputs.js.map