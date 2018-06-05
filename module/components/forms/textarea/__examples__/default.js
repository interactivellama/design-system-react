import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../../components/icon-settings";
import Textarea from "../../../../../components/forms/textarea"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'TextareaExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Textarea, {
      id: "unique-id-1",
      label: "Textarea Label"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map