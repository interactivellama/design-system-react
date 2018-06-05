import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Input from "../../../../../components/forms/input"; // `~` is replaced with design-system-react at runtime

import InputIcon from "../../../../../components/icon/input-icon"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'ErrorInputExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      id: "unique-id-4",
      label: "Input Label",
      required: true,
      errorText: "Error Message",
      placeholder: "Placeholder Text"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      iconLeft: React.createElement(InputIcon, {
        assistiveText: "Search",
        name: "warning",
        category: "utility",
        color: "warning",
        onClick: function onClick() {
          console.log('Icon Clicked');
        }
      }),
      id: "unique-id-4",
      label: "Input Label",
      required: true,
      errorText: "Error Message",
      placeholder: "Placeholder Text"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=error.js.map