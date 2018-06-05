import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Dropdown from "../../../../components/menu-dropdown"; // `~` is replaced with design-system-react at runtime

import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button/"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'DropdownExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Dropdown, {
      align: "right",
      options: [{
        label: 'Menu Item One',
        value: 'A0'
      }, {
        label: 'Menu Item Two',
        value: 'B0'
      }, {
        label: 'Menu Item Three',
        value: 'C0'
      }, {
        type: 'divider'
      }, {
        label: 'Menu Item Four',
        value: 'D0'
      }]
    }, React.createElement(DropdownTrigger, null, React.createElement(Button, {
      iconCategory: "utility",
      iconName: "down",
      iconPosition: "right",
      label: "Dropdown"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=custom-trigger.js.map