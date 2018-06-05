import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { storiesOf, action } from '@storybook/react';
import classNames from 'classnames';
import IconSettings from '../../icon-settings';
import { TABS } from '../../../utilities/constants';
import Tabs from '../../tabs';
import Panel from '../../tabs/panel'; // Used in the Nested story

import Input from '../../forms/input';
import InputIcon from '../../icon/input-icon'; // Used in the Conditinal story

import Checkbox from '../../forms/checkbox'; // Used in the outside control story

import Button from '../../button'; // Used in the custom content story

import Icon from '../../icon';
/* eslint-disable react/display-name */

var getTabs = function getTabs() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Base Tabs Demo"), React.createElement(Tabs, {
    id: "main-tabs-demo",
    className: "custom-class-is-custom",
    foo: "baz"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\"s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme--info slds-m-top--large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular."))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsMoreThanOneAllowGeneratedID = function getTabsMoreThanOneAllowGeneratedID() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Generated Unique IDs Demo"), React.createElement(Tabs, null, React.createElement(Panel, {
    label: "Only 1 Tab"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "About this story"), React.createElement("p", null, "There should be two instances of Tabs in this story, and each should have a unique (generated) ID."))), React.createElement(Tabs, null, React.createElement(Panel, {
    label: "Only 1 Tab"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "About this story"), React.createElement("p", null, "There should be two instances of Tabs in this story, and each should have a unique (generated) ID."))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsNested = function getTabsNested() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Nested Tabs Demo"), React.createElement(Tabs, {
    id: "nested-tabs-demo"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re ", React.createElement("a", {
    href: "#amazing"
  }, "amazing"), ".")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing."), React.createElement(Input, {
    id: "unique-id-123",
    name: "left-clickable-icon",
    label: "Input Label",
    iconLeft: React.createElement(InputIcon, {
      name: "search",
      category: "utility",
      onClick: action('search icon clicked')
    }),
    placeholder: "You can tab onto this to focus it."
  })), React.createElement(Panel, {
    label: "Tab 3 (has children)"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re tabceptionish."), React.createElement("div", {
    className: "slds-box slds-m-vertical--large"
  }, React.createElement(Tabs, {
    defaultSelectedIndex: 0
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing.")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3 (Also has children!)"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re even ", React.createElement("em", null, "more"), " tabceptionish."), React.createElement("div", {
    className: "slds-box slds-m-vertical--large"
  }, React.createElement(Tabs, {
    defaultSelectedIndex: 0
  }, React.createElement(Panel, {
    label: "Tab 1 (no children!)"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."))))))))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsScoped = function getTabsScoped() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Scoped Tabs Demo"), React.createElement(Tabs, {
    id: "scoped-tabs-demo",
    variant: "scoped"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\"s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme--info slds-m-top--large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular."))));
};
/* eslint-enable react/display-name */


var DemoTabsConditional = createReactClass({
  displayName: 'DemoTabsConditional',
  // ### Prop Types
  propTypes: {
    /**
     * Class names to be added to the container element and is passed along to its children.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
  },
  getInitialState: function getInitialState() {
    return {
      showA: true,
      showB: true,
      showC: true,
      disableA: false,
      disableB: true,
      disableC: true
    };
  },
  handleCheckClicked: function handleCheckClicked(checked, event) {
    var state = {};
    state[event.target.name] = checked;
    this.setState(state);
  },
  handleCheckClickedDisable: function handleCheckClickedDisable(checked, event) {
    var state = {};
    state[event.target.name] = checked;
    this.setState(state);
  },
  renderPaneA: function renderPaneA(disabled) {
    return React.createElement(Panel, {
      label: "Tab A",
      disabled: disabled
    }, React.createElement("p", null, "This is tab A."), React.createElement("div", null, React.createElement(Checkbox, {
      assistiveText: "Disable tab B",
      checked: this.state.disableB,
      onChange: this.handleCheckClickedDisable,
      label: "Disable tab B",
      name: "disableB"
    }), React.createElement(Checkbox, {
      assistiveText: "Disable tab C",
      checked: this.state.disableC,
      onChange: this.handleCheckClickedDisable,
      label: "Disable tab C",
      name: "disableC"
    })));
  },
  render: function render() {
    return React.createElement("div", null, React.createElement("h2", {
      className: "slds-text-heading--large"
    }, "Conditional Tabs Demo"), React.createElement(Checkbox, {
      assistiveText: "Show tab A",
      checked: this.state.showA,
      onChange: this.handleCheckClicked,
      label: "Show tab A",
      name: "showA"
    }), React.createElement(Checkbox, {
      assistiveText: "Show tab B",
      checked: this.state.showB,
      onChange: this.handleCheckClicked,
      label: "Show tab B",
      name: "showB"
    }), React.createElement(Checkbox, {
      checked: this.state.showC,
      onChange: this.handleCheckClicked,
      assistiveText: "Show tab C",
      label: "Show tab C",
      name: "showC"
    }), React.createElement(Tabs, {
      className: classNames('slds-m-top--large', this.props.className),
      onSelect: this.handleSelectNopesOnThree
    }, this.state.showA && this.renderPaneA(this.state.disableA), this.state.showB && this.state.disableB ? React.createElement(Panel, {
      label: "Tab B",
      disabled: true
    }, React.createElement("p", null, "This is tab B.")) : this.state.showB && React.createElement(Panel, {
      label: "Tab B"
    }, React.createElement("p", null, "This is tab B.")), this.state.showC && this.state.disableC ? React.createElement(Panel, {
      label: "Tab C",
      disabled: true
    }, React.createElement("p", null, "This is tab C.")) : this.state.showC && React.createElement(Panel, {
      label: "Tab C"
    }, React.createElement("p", null, "This is tab C."))));
  }
});
var DemoTabsOutsideControl = createReactClass({
  displayName: 'DemoTabsOutsideControl',
  // ### Prop Types
  propTypes: {
    /**
     * Class names to be added to the container element and is passed along to its children.
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * The Tab (and corresponding TabPanel) that is selected when the component renders. Defaults to `0`.
     */
    whichOneSelectedYo: PropTypes.number,
    prevOneSelectedYo: PropTypes.number
  },
  getInitialState: function getInitialState() {
    return {
      whichOneSelectedYo: this.props.whichOneSelectedYo || 0,
      prevOneSelectedYo: this.props.prevOneSelectedYo || 0
    };
  },
  handleSelect: function handleSelect(index, last) {
    var toReturn = true;

    if (index === this.state.whichOneSelectedYo && last === this.state.prevOneSelectedYo) {
      toReturn = false;
    } else {
      action('handleSelect')(index, last);
      this.setState({
        whichOneSelectedYo: index,
        prevOneSelectedYo: last
      });
    }

    return toReturn;
  },
  showState: function showState() {
    action('showState (current)')(this.state.whichOneSelectedYo);
    action('showState (previous)')(this.state.prevOneSelectedYo);
  },
  handleButtonClicked: function handleButtonClicked(event) {
    var prevOneSelected = this.state.prevOneSelectedYo;
    var thisOneSelected = this.state.whichOneSelectedYo;
    action('handleButtonClicked')(event.currentTarget.id);

    switch (event.currentTarget.id) {
      case 'monday':
        this.handleSelect(0, thisOneSelected);
        break;

      case 'tuesday':
        this.handleSelect(1, thisOneSelected);
        break;

      case 'tuesday-alt':
        this.handleSelect(1, thisOneSelected);
        break;

      case 'wednesday':
        this.handleSelect(2, thisOneSelected);
        break;

      case 'thursday':
        this.handleSelect(3, thisOneSelected);
        break;

      case 'friday':
        this.handleSelect(4, thisOneSelected);
        break;

      case 'none':
        this.handleSelect(undefined, thisOneSelected);
        break;

      case 'previous':
        this.handleSelect(prevOneSelected, thisOneSelected);
        break;

      case 'show-state':
        this.showState();
        break;

      default:
        // Statements executed when none of the values match the value of the expression
        this.handleSelect(thisOneSelected, prevOneSelected);
    }
  },
  render: function render() {
    return React.createElement("div", null, React.createElement("h2", {
      className: "slds-text-heading--large"
    }, "Outside Tabs Demo"), React.createElement("p", null, "Here we have several buttons, which are used to pass a new", ' ', React.createElement("code", null, "selectedIndex"), " into the Tabs component."), React.createElement("p", {
      className: "slds-m-bottom--large"
    }, "This shows that you can pass a new selected index property into the component from the outside and have it re-render."), React.createElement(Button, {
      id: "show-state",
      label: "Show State",
      onClick: this.showState
    }), React.createElement(Button, {
      id: "monday",
      label: "Monday",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "tuesday",
      label: "Tuesday",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "wednesday",
      label: "Wednesday",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "thursday",
      label: "Thursday",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "friday",
      label: "Friday",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "none",
      label: "None",
      onClick: this.handleButtonClicked
    }), React.createElement(Button, {
      id: "previous",
      label: "Previous",
      onClick: this.handleButtonClicked
    }), React.createElement(Tabs, {
      className: classNames('slds-m-top--large', this.props.className),
      selectedIndex: this.state.whichOneSelectedYo,
      onSelect: this.handleSelect
    }, React.createElement(Panel, {
      label: "Monday"
    }, React.createElement("p", null, "This is Monday\"s Pane."), React.createElement(Button, {
      id: "tuesday-alt",
      label: "Submit and go to next tab",
      onClick: this.handleButtonClicked
    })), React.createElement(Panel, {
      label: "Tuesday"
    }, React.createElement("p", null, "This is Tuesday\"s Pane.")), React.createElement(Panel, {
      label: "Wednesday"
    }, React.createElement("p", null, "This is Wednesday\"s Pane.")), React.createElement(Panel, {
      label: "Thursday"
    }, React.createElement("p", null, "Thursday\"s Pane has far to go.")), React.createElement(Panel, {
      label: "Friday"
    }, React.createElement("p", null, "This is Friday\"s Pane."))));
  }
});
/* eslint-disable react/display-name */

var getTabsDisabled = function getTabsDisabled() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Disabled Tabs Demo"), React.createElement(Tabs, {
    id: "disabled-tabs-demo"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\"s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme--info slds-m-top--large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2",
    disabled: true
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular.")), React.createElement(Panel, {
    label: "Tab 4"
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "Note that using your arrow keys you can loop ", React.createElement("em", null, "around the tabs"), "! \uD83C\uDF89"))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getCustomContentTabs = function getCustomContentTabs() {
  var tab1Label = React.createElement("div", {
    "aria-label": "test accessibility!"
  }, React.createElement(Icon, {
    assistiveText: "",
    category: "utility",
    name: "list",
    style: {
      marginRight: '.5rem'
    },
    size: "x-small"
  }), React.createElement("span", null, "my tab"));
  var tab2Label = React.createElement("span", {
    style: {
      color: 'red'
    }
  }, "my other tab");
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading--large"
  }, "Custom Tab Contents Demo"), React.createElement(Tabs, null, React.createElement(Panel, {
    label: tab1Label
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my first custom content tab!")), React.createElement(Panel, {
    label: tab2Label
  }, React.createElement("h2", {
    className: "slds-text-heading--medium"
  }, "This is my second custom content tab!"))));
};
/* eslint-enable react/display-name */


var DemoTabsInterceptSelect = createReactClass({
  displayName: 'DemoTabsInterceptSelect',
  getInitialState: function getInitialState() {
    return {
      intercepts: 0
    };
  },
  handleTabSelect: function handleTabSelect(next, last) {
    action('handleTabSelect')(next, last);
    var intercepts = this.state.intercepts + 1;
    this.setState({
      intercepts: intercepts
    });
    return false;
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(Tabs, {
      onSelect: this.handleTabSelect
    }, React.createElement(Panel, {
      label: "Panel with intercept"
    }, React.createElement("p", null, "Default Panel"), this.state.intercepts > 0 && React.createElement("p", null, "We've intercepted navigation ".concat(this.state.intercepts, " time(s)"))), React.createElement(Panel, {
      label: "Unreachable panel"
    }, React.createElement("p", null, "You should never see this message"))), React.createElement("div", {
      style: {
        height: '20px'
      }
    }), React.createElement(Tabs, null, React.createElement(Panel, {
      label: "Panel still working as intended"
    }, React.createElement("p", null, "Default Panel")), React.createElement(Panel, {
      label: "Destination panel"
    }, React.createElement("p", null, "You should be able to reach this panel"))));
  }
});
storiesOf(TABS, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getTabs();
}).add('With disabled tab', function () {
  return getTabsDisabled();
}).add('Nested', function () {
  return getTabsNested();
}).add('Outside Control', function () {
  return React.createElement(DemoTabsOutsideControl, {
    className: "controlled-yo"
  });
}).add('Conditional', function () {
  return React.createElement(DemoTabsConditional, {
    className: "conditional-yo"
  });
}).add('Unique Generated IDs', function () {
  return getTabsMoreThanOneAllowGeneratedID();
}).add('Scoped', function () {
  return getTabsScoped();
}).add('Custom Tab Contents', function () {
  return getCustomContentTabs();
}).add('Tab Intercept Panel Select', function () {
  return React.createElement(DemoTabsInterceptSelect, null);
});
//# sourceMappingURL=storybook-stories.js.map