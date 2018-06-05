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
      label: "Checkbox",
      id: "checkbox-base-example"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox",
      id: "checkbox-base-example--error",
      errorText: "This field has an error"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox (disabled)",
      id: "checkbox-base-example--disabled",
      disabled: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox (required)",
      id: "checkbox-base-example--required",
      required: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      assistiveText: "Checkbox (with assistive text)",
      id: "checkbox-base-example--assistive-text"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox (checked)",
      id: "checkbox-base-example--checked",
      checked: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox (checked + disabled)",
      id: "checkbox-base-example--checked-disabled",
      checked: true,
      disabled: true
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Checkbox, {
      label: "Checkbox (indeterminate)",
      id: "checkbox-base-example--indeterminate",
      indeterminate: true
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=snapshot-base.js.map