import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../../icon-settings';
import { FORMS_INPUT } from '../../../../utilities/constants';
import Button from '../../../button';
import Input from '../';
import InputIcon from '../../../icon/input-icon';
var iconClicked = action;
var clearIcon = React.createElement(InputIcon, {
  assistiveText: "clear",
  name: "clear",
  category: "utility"
});
var clearIconClickable = React.createElement(InputIcon, {
  assistiveText: "clear",
  name: "clear",
  category: "utility",
  onClick: iconClicked('Clear icon clicked')
});
var searchIcon = React.createElement(InputIcon, {
  name: "search",
  category: "utility"
});
var searchIconClickable = React.createElement(InputIcon, {
  assistiveText: "Search",
  name: "search",
  category: "utility",
  onClick: iconClicked('Search icon clicked')
});
storiesOf(FORMS_INPUT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "1. Base Input with visible label"), React.createElement(Input, {
    id: "base-id",
    label: "My Label",
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "2. Base Input with hidden label (assistive text)"), React.createElement(Input, {
    assistiveText: {
      label: 'My label'
    },
    id: "assistiveLabel-id",
    placeholder: "My placeholder"
  }))));
}).add('Base with Icons', function () {
  return React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "1. Base Input with left icon"), React.createElement(Input, {
    id: "with-left-icon",
    label: "My label",
    iconLeft: searchIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "2. Base Input with Clickable left icon"), React.createElement(Input, {
    id: "with-left-clickable-icon",
    label: "My Label",
    iconLeft: searchIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "3. Base Input with right icon"), React.createElement(Input, {
    id: "with-right-icon",
    label: "My Label",
    iconRight: searchIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "4. Base Input with Clickable right icon"), React.createElement(Input, {
    id: "with-right-clickable-icon",
    label: "My Label",
    iconRight: clearIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "5. Base Input with left and right icons"), React.createElement(Input, {
    label: "My Label",
    iconLeft: searchIcon,
    iconRight: clearIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "6. Base Input with Clickable left and right icon"), React.createElement(Input, {
    label: "My label",
    iconLeft: searchIconClickable,
    iconRight: clearIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "7. Base Input with left and clickable right icon"), React.createElement(Input, {
    label: "My Label",
    iconLeft: searchIcon,
    iconRight: clearIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom--large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "8. Base Input with left, clickable right icon, and loading spinner"), React.createElement(Input, {
    assistiveText: {
      spinner: 'Field data is loading'
    },
    hasSpinner: true,
    iconLeft: searchIcon,
    iconRight: clearIconClickable,
    label: "My Label",
    name: "right-clickable-icon",
    placeholder: "My placeholder"
  }))));
}).add('Fixed Text', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Input with Fixed Text"), React.createElement(Input, {
    assistiveText: {
      label: 'My Label'
    },
    name: "fixed-text",
    label: "My Label",
    fixedTextLeft: "$",
    placeholder: "My placeholder"
  }));
}).add('Read Only', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Read only Input"), React.createElement(Input, {
    name: "read-only",
    label: "My Label",
    readOnly: true,
    value: "Read Only Value"
  }));
}).add('Static Input', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Static Input"), React.createElement(Input, {
    name: "static-input",
    label: "My Label",
    isStatic: true,
    value: "Static value"
  }));
}).add('Disabled Input', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Disabled Input"), React.createElement(Input, {
    name: "disabled-input",
    label: "My Label",
    disabled: true,
    value: "Disabled value"
  }));
}).add('Required Input in Error State', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Example Button"), React.createElement(Button, {
    label: "Test"
  }), React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Required Input with Error"), React.createElement(Input, {
    "aria-describedby": "error-1",
    name: "required-input-error",
    label: "My Label",
    required: true,
    errorText: "This field is required.",
    placeholder: "My placeholder"
  }));
});
//# sourceMappingURL=storybook-stories.js.map