import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../../icon-settings';
import { FORMS_CHECKBOX } from '../../../../utilities/constants';
import Checkbox from '../';
import Button from '../../../button';
var CheckboxIndeterminate = createReactClass({
  displayName: "".concat(FORMS_CHECKBOX, "_INDETERMINATE"),
  getInitialState: function getInitialState() {
    return {
      indeterminate: true,
      checked: true,
      currentStateHelper: 'Indeterminate'
    };
  },
  handleChange: function handleChange(checked, event, data) {
    var checkedLabel = data.checked ? 'Checked' : 'Unchecked';
    this.setState({
      checked: data.checked,
      currentStateHelper: data.indeterminate ? 'Indeterminate' : checkedLabel,
      indeterminate: data.indeterminate
    });
    action('handleChange')(checked, event, "checked: ".concat(data.checked, ",\n\t\t\tindeterminate: ").concat(data.indeterminate));
  },
  changeToIndeterminate: function changeToIndeterminate(event) {
    this.setState({
      currentStateHelper: 'Indeterminate',
      checked: true,
      indeterminate: true
    });
    action('changeToIndeterminate')(event, 'checked: true, indeterminate: true');
  },
  changeToCheck: function changeToCheck(event) {
    this.setState({
      currentStateHelper: 'Checked',
      checked: true,
      indeterminate: false
    });
    action('changeToCheck')(event, 'checked: true, indeterminate: false');
  },
  changeToUnChecked: function changeToUnChecked(event) {
    this.setState({
      currentStateHelper: 'Unchecked',
      checked: false,
      indeterminate: false
    });
    action('changeToUnChecked')(event, 'checked: false, indeterminate: false');
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(Button, {
      onClick: this.changeToIndeterminate,
      label: "Indeterminate"
    }), React.createElement(Button, {
      onClick: this.changeToCheck,
      label: "Check"
    }), React.createElement(Button, {
      onClick: this.changeToUnChecked,
      label: "Uncheck"
    }), React.createElement("p", null, React.createElement("strong", null, "Current State:"), " ", this.state.currentStateHelper), React.createElement(Checkbox, {
      assistiveText: "Checkbox (indeterminate)",
      label: "Checkbox Label",
      name: "checkbox-example-standard-indeterminate",
      checked: this.state.checked,
      indeterminate: this.state.indeterminate,
      onChange: this.handleChange
    }), React.createElement("div", {
      className: "slds-box slds-text-longform slds-m-top--large"
    }, React.createElement("p", null, "This example has an ", React.createElement("em", null, "indeterminate"), " checkbox."), React.createElement("p", null, "It is set by providing the ", React.createElement("code", null, "indeterminate"), " prop as", ' ', React.createElement("code", null, React.createElement("strong", null, "true")), "."), React.createElement("p", null, "Once it is clicked, there is no way to make it go ", React.createElement("em", null, "back"), " to the indeterminate state,", ' ', React.createElement("a", {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate#Checkbox_radio_button"
    }, "it must be done programatically, through JavaScript"), ".")));
  }
});
storiesOf(FORMS_CHECKBOX, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Checkbox', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Label",
    name: "checkbox-example-base",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    }
  });
}).add('Checkbox (with error)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Label",
    name: "checkbox-example-base-error",
    errorText: "This field has an error.",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    }
  });
}).add('Checkbox (required)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Label",
    name: "checkbox-example-base-required",
    onChange: action('change'),
    required: true
  });
}).add('Checkbox (disabled)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Label",
    name: "checkbox-example-base-disabled",
    onChange: action('change'),
    disabled: true
  });
}).add('Checkbox (assistive text)', function () {
  return React.createElement("div", null, React.createElement(Checkbox, {
    assistiveText: "This is my checkbox. There are many like it, but this one is mine. My checkbox is my best friend. It is my life. I must master it as I must master my life. Without me, my checkbox is useless. Without my checkbox, I am useless. I must make my checkbox true. I must make it truer than my radio button who is trying to... ",
    label: "Checkbox Label",
    name: "checkbox-example-base-assistiveText",
    onChange: action('change')
  }), React.createElement("div", {
    className: "slds-box slds-text-longform slds-m-top--large"
  }, React.createElement("p", null, "This example has assistive text. In Safari on Mac you can turn assistive text on by using the keyboard combination:", React.createElement("strong", null, "Command + F5"), "."), React.createElement("p", null, "Once you have enabled it, use your tab key to focus on the checkbox input, and the system should read you what is supplied to the checkbox as the ", React.createElement("code", null, "assistiveText"), "property.")));
}).add('Checkbox (checked)', function () {
  return React.createElement(Checkbox, {
    checked: true,
    label: "Checkbox Label",
    name: "checkbox-example-base-checked",
    onChange: action('change')
  });
}).add('Checkbox (indeterminate)', function () {
  return React.createElement(CheckboxIndeterminate, null);
}).add('Checkbox Toggle', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Toggle Label",
    name: "checkbox-example-toggle",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle"
  });
}).add('Checkbox Toggle (with error)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Toggle Label",
    name: "checkbox-example-toggle-error",
    errorText: "This field has an error.",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle"
  });
}).add('Checkbox Toggle (required)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Toggle Label",
    name: "checkbox-example-toggle-required",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle",
    required: true
  });
}).add('Checkbox Toggle (disabled)', function () {
  return React.createElement(Checkbox, {
    label: "Checkbox Toggle Label",
    name: "checkbox-example-toggle-disabled",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle",
    disabled: true
  });
}).add('Checkbox Toggle (assistive text)', function () {
  return React.createElement("div", null, React.createElement(Checkbox, {
    assistiveText: "This is my checkbox. There are many like it, but this one is mine. My checkbox is my best friend. It is my life. I must master it as I must master my life. Without me, my checkbox is useless. Without my checkbox, I am useless. I must make my checkbox true. I must make it truer than my radio button who is trying to... ",
    label: "Checkbox Label",
    name: "checkbox-example-base-assistiveText",
    onChange: action('change'),
    variant: "toggle"
  }), React.createElement("div", {
    className: "slds-box slds-text-longform slds-m-top--large"
  }, React.createElement("p", null, "This example has assistive text. In Safari on Mac you can turn assistive text on by using the keyboard combination:", React.createElement("strong", null, "Command + F5"), "."), React.createElement("p", null, "Once you have enabled it, use your tab key to focus on the checkbox input, and the system should read you what is supplied to the checkbox as the ", React.createElement("code", null, "assistiveText"), "property.")));
}).add('Checkbox Toggle (checked)', function () {
  return React.createElement(Checkbox, {
    checked: true,
    label: "Checkbox Label",
    name: "checkbox-example-toggle-checked",
    onChange: action('change'),
    variant: "toggle"
  });
});
//# sourceMappingURL=storybook-stories.js.map