import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Input from "../../../../../components/forms/input"; // `~` is replaced with design-system-react at runtime

import InputIcon from "../../../../../components/icon/input-icon"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'InputExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "Input with Icons"), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      iconLeft: React.createElement(InputIcon, {
        assistiveText: "Search",
        name: "search",
        category: "utility"
      }),
      id: "unique-id-1",
      label: "Input Label",
      placeholder: "Static Icon on the left"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      iconLeft: React.createElement(InputIcon, {
        assistiveText: "Search",
        name: "search",
        category: "utility",
        onClick: function onClick() {
          console.log('Icon Clicked');
        }
      }),
      iconRight: React.createElement(InputIcon, {
        assistiveText: "Clear",
        name: "clear",
        category: "utility",
        onClick: function onClick() {
          console.log('Icon Clicked');
        }
      }),
      id: "unique-id-2",
      label: "Input Label",
      placeholder: "Clickable Icons (Left and Right)"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      iconRight: React.createElement(InputIcon, {
        assistiveText: "Clear",
        name: "clear",
        category: "utility",
        onClick: function onClick() {
          console.log('Icon Clicked');
        }
      }),
      id: "unique-id-3",
      label: "Input Label",
      placeholder: "Clickable Icon on the right"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Input, {
      assistiveText: {
        spinner: 'Field data is loading'
      },
      iconRight: React.createElement(InputIcon, {
        assistiveText: "Clear",
        name: "clear",
        category: "utility",
        onClick: function onClick() {
          console.log('Icon Clicked');
        }
      }),
      hasSpinner: true,
      id: "unique-id-4",
      label: "Input Label",
      placeholder: "Loading Spinner Icon on the right"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icons.js.map