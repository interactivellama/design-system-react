import React from 'react';
import createReactClass from 'create-react-class';
import Radio from "../../../../../components/forms/radio"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'RadioExample',
  render: function render() {
    return React.createElement(Radio, {
      id: "radioId1",
      label: "Radio Label",
      disabled: true
    });
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=disabled.js.map