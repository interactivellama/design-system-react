function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable indent */
import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../../../../components/icon-settings';
import { FORMS_INLINE_EDIT } from '../../../../../utilities/constants';
import InlineEdit from '../../../input/inline';
var DemoInlineEdit = createReactClass({
  displayName: 'DemoInlineEdit',
  getInitialState: function getInitialState() {
    return {
      value: 'Edit me inline'
    };
  },
  handleChange: function handleChange(eventProps) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    action('change')(rest);

    if (eventProps.value === '') {
      this.setState({
        value: 'Edit me inline'
      });
    } else {
      this.setState({
        value: eventProps.value
      });
    }
  },
  render: function render() {
    return React.createElement(InlineEdit, _extends({}, this.props, {
      value: this.state.value,
      onChange: this.handleChange
    }));
  }
});
storiesOf(FORMS_INLINE_EDIT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Base Inline Edit Input"), React.createElement(DemoInlineEdit, {
    name: "inline-edit-standard",
    id: "inline-edit-standard"
  }));
}).add('Disabled', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical--medium"
  }, "Disabled Inline Edit Input"), React.createElement(DemoInlineEdit, {
    name: "inline-edit-disabled",
    id: "inline-edit-disabled",
    disabled: true
  }));
});
//# sourceMappingURL=storybook-stories.js.map