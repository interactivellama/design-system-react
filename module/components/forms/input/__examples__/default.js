import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Input from "../../../../../components/forms/input"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'BaseInputExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("section", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Base Input with visible label"), React.createElement(Input, {
      id: "base-id",
      label: "My Label",
      placeholder: "My placeholder"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Base Input with hidden label (assistive text)"), React.createElement(Input, {
      assistiveText: {
        label: 'My label'
      },
      id: "assistiveLabel-id",
      placeholder: "My placeholder"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Base Input with Fixed Text"), React.createElement(Input, {
      id: "fixed-text-id",
      fixedTextLeft: "$",
      label: "Total amount",
      placeholder: "Enter amount in USD"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map