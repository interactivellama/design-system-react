import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Checkbox from "../../../../../components/forms/checkbox"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'CheckboxExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Error state",
      errorText: "This field is required",
      label: "Checkbox Label"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Indeterminate",
      indeterminate: true,
      label: "Indeterminate"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Indeterminate",
      label: "Required",
      required: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Disabled",
      label: "Disabled",
      disabled: true
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=error.js.map