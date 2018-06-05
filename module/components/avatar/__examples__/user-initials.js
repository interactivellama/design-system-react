import React from 'react';
import createReactClass from 'create-react-class';
import Avatar from "../../../../components/avatar"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'AvatarExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Avatar, {
      variant: "user",
      label: "Annie Wilson",
      size: "medium"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=user-initials.js.map