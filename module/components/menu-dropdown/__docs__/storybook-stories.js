function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable indent */

/* eslint-disable react/display-name */
import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { MENU_DROPDOWN } from '../../../utilities/constants';
import Dropdown from '../../menu-dropdown';
import { DropdownNubbinPositions } from '../../menu-dropdown/menu-dropdown';
import List from '../../utilities/menu-list';
import Button from '../../button';
import Trigger from '../../menu-dropdown/button-trigger';
var options = [{
  className: 'custom-li-class',
  divider: 'bottom',
  label: 'A Header',
  type: 'header'
}, {
  disabled: true,
  label: 'An option that is Super Super Long',
  value: 'A0'
}, {
  label: 'Custom Class',
  className: 'custom-item-class',
  value: 'classssss'
}, {
  href: 'http://sfdc.co/',
  id: 'custom-li-id',
  label: 'Has a value',
  leftIcon: {
    name: 'settings',
    category: 'utility'
  },
  rightIcon: {
    name: 'settings',
    category: 'utility'
  },
  type: 'item',
  value: 'B0'
}, {
  type: 'divider'
}, {
  label: 'C Option',
  value: 'C0'
}, {
  label: 'D Option',
  value: 'D0'
}, {
  label: 'E Option',
  value: 'E0'
}, {
  label: 'A1 Option',
  value: 'A1'
}, {
  label: 'B2 Option',
  value: 'B1'
}, {
  label: 'C2 Option',
  value: 'C1'
}, {
  label: 'D2 Option',
  value: 'D1'
}, {
  label: 'E2 Option Super Super Long',
  value: 'E1'
}];

var getDropdown = function getDropdown(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }));
};

var DropdownControlled = createReactClass({
  displayName: 'DropdownControlled',
  getInitialState: function getInitialState() {
    return {
      forcedState: undefined,
      menuOptions: options
    };
  },
  handleButtonClickReset: function handleButtonClickReset() {
    this.setState({
      forcedState: undefined
    });
  },
  handleOpen: function handleOpen() {
    action('Force Open').apply(void 0, arguments);
    this.setState({
      forcedState: true
    });
  },
  handleClose: function handleClose() {
    action('Force Closed').apply(void 0, arguments);
    this.setState({
      forcedState: false
    });
  },
  toggleDisabledOption: function toggleDisabledOption() {
    this.setState(function (prevState, props) {
      prevState.menuOptions.splice(1, 1, {
        disabled: false,
        label: 'An option that is Super Super Long',
        value: 'A0'
      });
      return {
        options: prevState.menuOptions
      };
    });
  },
  render: function render() {
    return React.createElement("div", {
      className: "slds-grid"
    }, React.createElement("div", {
      className: "slds-col"
    }, React.createElement(Dropdown, _extends({}, this.props, {
      modal: false,
      isOpen: this.state.forcedState,
      onClose: action('Attempt Close'),
      onOpen: action('Attempt Open'),
      options: this.state.menuOptions
    }))), React.createElement("div", {
      className: "slds-col"
    }, React.createElement(Button, {
      label: "Force Open Dropdown",
      onClick: this.handleOpen
    }), React.createElement(Button, {
      label: "Force Close Dropdown",
      onClick: this.handleClose
    }), React.createElement(Button, {
      label: "Reset Dropdown",
      onClick: this.handleButtonClickReset
    }), React.createElement(Button, {
      label: "Toggle Option A disabled",
      onClick: this.toggleDisabledOption
    })));
  }
});

var getDropdownPositioned = function getDropdownPositioned(props) {
  var positionedDropdowns = [];
  DropdownNubbinPositions.forEach(function (position) {
    positionedDropdowns.push(React.createElement("div", {
      className: "slds-col slds-size--1-of-3",
      style: {
        minHeight: '500px'
      }
    }, React.createElement(Dropdown, _extends({}, props, {
      isOpen: true,
      nubbinPosition: position,
      onClose: action('Closed'),
      onOpen: action('Opened')
    }), React.createElement(Trigger, null, React.createElement(Button, {
      iconVariant: "container",
      iconCategory: "utility",
      iconName: "settings",
      label: position
    })))));
  });
  return React.createElement("div", null, React.createElement("div", {
    className: "slds-grid slds-wrap"
  }, positionedDropdowns), React.createElement("div", {
    className: "slds-col",
    style: {
      minHeight: '500px'
    }
  }, React.createElement(Dropdown, _extends({}, props, {
    nubbinPosition: "top right",
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(Trigger, null, React.createElement(Button, {
    iconVariant: "container",
    iconCategory: "utility",
    iconName: "settings",
    assistiveText: "top right"
  })))));
};

var getDropdownCustomTrigger = function getDropdownCustomTrigger(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(Trigger, null, React.createElement(Button, {
    iconCategory: "utility",
    iconName: "settings"
  })));
};
/* eslint-disable react/prop-types */

/* eslint-disable no-script-url */


var DropdownCustomContent = function DropdownCustomContent(props) {
  return React.createElement("div", {
    id: "custom-dropdown-menu-content"
  }, React.createElement("div", {
    className: "slds-m-around--medium"
  }, React.createElement("div", {
    className: "slds-tile slds-tile--board slds-m-horizontal--small"
  }, React.createElement("p", {
    className: "tile__title slds-text-heading--small"
  }, "Art Vandelay"), React.createElement("div", {
    className: "slds-tile__detail"
  }, React.createElement("p", {
    className: "slds-truncate"
  }, React.createElement("a", {
    className: "slds-m-right--medium",
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Settings"), React.createElement("a", {
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Log Out"))))));
};

var getDropdownCustomContent = function getDropdownCustomContent(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(DropdownCustomContent, null), React.createElement(List, {
    options: [{
      label: 'Custom Content Option'
    }].concat(options)
  }));
};

storiesOf(MENU_DROPDOWN, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium slds-text-align--center"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getDropdown({
    align: 'right',
    label: 'Dropdown Click',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Base with icon', function () {
  return getDropdown({
    align: 'right',
    label: 'Dropdown Click',
    iconCategory: 'utility',
    iconName: 'down',
    iconPosition: 'right',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Render inline', function () {
  return getDropdown({
    align: 'right',
    label: 'Dropdown Click',
    menuPosition: 'relative',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Render inline w/ Nubbins', function () {
  return getDropdownPositioned({
    menuPosition: 'relative',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Custom Trigger', function () {
  return getDropdownCustomTrigger({
    assistiveText: 'Custom Dropdown Trigger',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Custom Content', function () {
  return getDropdownCustomContent({
    label: 'Custom Content Dropdown Click',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Hover', function () {
  return getDropdown({
    assistiveText: 'Icon More large',
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  });
}).add('Two Hovers', function () {
  return React.createElement("div", null, getDropdown({
    assistiveText: 'Icon More large',
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  }), ' ', getDropdown({
    assistiveText: 'Icon More large',
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  }));
}).add('Hover with Checkmark', function () {
  return getDropdown({
    assistiveText: 'More Options',
    buttonVariant: 'icon',
    checkmark: true,
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border-filled',
    onMouseEnter: action('Mouse enter'),
    onMouseLeave: action('Mouse leave'),
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options,
    value: 'C0'
  });
}).add('Controled w/ isOpen', function () {
  return React.createElement(DropdownControlled, {
    align: "right",
    label: "Dropdown Click",
    options: options
  });
});
//# sourceMappingURL=storybook-stories.js.map