import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../../icon-settings';
import { FORMS_TEXTAREA } from '../../../../utilities/constants';
import Textarea from '../';
storiesOf(FORMS_TEXTAREA, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Standard', function () {
  return React.createElement(Textarea, {
    label: "Textarea Label",
    name: "standard-textarea",
    placeholder: "Placeholder Text"
  });
}).add('Disabled', function () {
  return React.createElement(Textarea, {
    name: "disabled",
    label: "Textarea Label",
    disabled: true,
    placeholder: "Placeholder Text"
  });
}).add('Required', function () {
  return React.createElement(Textarea, {
    "aria-describedby": "required-1",
    name: "required-textarea",
    label: "Textarea Label",
    required: true,
    placeholder: "Placeholder Text"
  });
}).add('Error', function () {
  return React.createElement(Textarea, {
    "aria-describedby": "error-1",
    name: "required-textarea-error",
    label: "Textarea Label",
    required: true,
    errorText: "Error Message",
    placeholder: "Placeholder Text"
  });
});
//# sourceMappingURL=storybook-stories.js.map