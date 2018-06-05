import React from 'react';
import createReactClass from 'create-react-class'; // `~` is replaced with design-system-react at runtime

import Checkbox from "../../../../../components/forms/checkbox";
var Example = createReactClass({
  displayName: 'CheckboxExample',
  render: function render() {
    return React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Toggle",
      id: "checkbox-toggle-example",
      variant: "toggle"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Toggle",
      id: "checkbox-toggle-example--error",
      errorText: "This field has an error",
      variant: "toggle"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Toggle (disabled)",
      id: "checkbox-toggle-example--disabled",
      variant: "toggle",
      disabled: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Toggle (required)",
      id: "checkbox-toggle-example--required",
      variant: "toggle",
      required: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Toggle (with assistive text)",
      id: "checkbox-toggle-example--assitive-text",
      variant: "toggle"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Toggle (checked)",
      id: "checkbox-toggle-example--checked",
      variant: "toggle",
      checked: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      id: "checkbox-toggle-example--checked-disabled",
      label: "Toggle (checked + disabled)",
      variant: "toggle",
      checked: true,
      disabled: true
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=snapshot-toggle.js.map