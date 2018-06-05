import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import logo from '../__examples__/logo.svg';
import GlobalHeader from '../../global-header';
import GlobalHeaderButton from '../../global-header/button';
import GlobalHeaderDropdown from '../../global-header/dropdown';
import GlobalHeaderProfile from '../../global-header/profile';
import GlobalHeaderSearch from '../../global-header/search';
import { GLOBAL_HEADER } from '../../../utilities/constants';
import globalNavigationBar from '../../global-navigation-bar/__docs__/storybook-stories';
/* eslint-disable react/prop-types */

/* eslint-disable no-script-url */

/* eslint-disable react/display-name */

var HeaderProfileCustomContent = function HeaderProfileCustomContent(props) {
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
/* eslint-disable react/display-name */


var GlobalHeaderDemo = function GlobalHeaderDemo(props) {
  return React.createElement(GlobalHeader, {
    logoSrc: logo,
    onSkipToContent: action('Skip to Main Content'),
    onSkipToNav: action('Skip to Navigation'),
    navigation: globalNavigationBar(props)
  }, React.createElement(GlobalHeaderSearch, {
    onSelect: action('Search Selected'),
    placeholder: "Search Salesforce",
    options: [{
      label: 'Email'
    }, {
      label: 'Mobile'
    }]
  }), React.createElement(GlobalHeaderButton, {
    className: "slds-m-right--small",
    iconVariant: null,
    label: "Feedback",
    onClick: action('Feedback Clicked'),
    variant: "neutral"
  }), React.createElement(GlobalHeaderDropdown, {
    openOn: props.openOn,
    assistiveText: "Global Actions",
    globalAction: true,
    iconCategory: "utility",
    iconName: "add",
    onSelect: action('Action Selected'),
    options: [{
      label: 'New Note',
      rightIcon: {
        category: 'standard',
        name: 'note',
        size: 'small'
      }
    }, {
      label: 'Log a Call',
      rightIcon: {
        category: 'standard',
        name: 'log_a_call',
        size: 'small'
      }
    }]
  }), React.createElement(GlobalHeaderButton, {
    assistiveText: "Help and Training",
    iconName: "question",
    onClick: action('Help Clicked')
  }), React.createElement(GlobalHeaderDropdown, {
    openOn: props.openOn,
    assistiveText: "Setup",
    iconName: "setup",
    onSelect: action('Action Selected'),
    options: [{
      label: 'Global Setup'
    }, {
      label: 'Permissions'
    }]
  }), React.createElement(GlobalHeaderButton, {
    assistiveText: "Notifications",
    iconName: "Notification",
    onClick: action('Notifications Clicked')
  }), React.createElement(GlobalHeaderProfile, {
    openOn: props.openOn,
    onClick: action('Profile Clicked'),
    onSelect: action('Profile Selected')
  }, React.createElement(HeaderProfileCustomContent, null)));
};

storiesOf(GLOBAL_HEADER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Search + Navigation', function () {
  return React.createElement(GlobalHeaderDemo, null);
}).add('Open on Hybrid', function () {
  return React.createElement(GlobalHeaderDemo, {
    openOn: "hybrid"
  });
}).add('Fewer Elements', function () {
  return React.createElement(GlobalHeader, {
    logoSrc: logo
  }, React.createElement(GlobalHeaderDropdown, {
    assistiveText: "Setup",
    iconName: "setup",
    onSelect: action('Action Selected'),
    options: [{
      label: 'Global Setup'
    }, {
      label: 'Permissions'
    }]
  }), React.createElement(GlobalHeaderProfile, {
    onClick: action('Profile Clicked'),
    onSelect: action('Profile Selected'),
    options: [{
      label: 'Profile Menu'
    }]
  }));
});
//# sourceMappingURL=storybook-stories.js.map