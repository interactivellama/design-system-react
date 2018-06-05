import React from 'react';
import createReactClass from 'create-react-class';
import ButtonGroup from "../../../../components/button-group";
import Checkbox from "../../../../components/forms/checkbox";
var Example = createReactClass({
  displayName: 'ButtonGroupExample',
  render: function render() {
    return React.createElement(ButtonGroup, {
      labels: {
        label: 'Scheduled Day(s)'
      },
      variant: "checkbox"
    }, React.createElement(Checkbox, {
      id: "ButtonGroupExampleMon",
      label: "Mon"
    }), React.createElement(Checkbox, {
      id: "ButtonGroupExampleTue",
      label: "Tue"
    }), React.createElement(Checkbox, {
      id: "ButtonGroupExampleWed",
      label: "Wed"
    }), React.createElement(Checkbox, {
      id: "ButtonGroupExampleThu",
      label: "Thu"
    }), React.createElement(Checkbox, {
      id: "ButtonGroupExampleFri",
      label: "Fri"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=checkbox.js.map