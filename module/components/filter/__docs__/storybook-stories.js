import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { FILTER } from '../../../utilities/constants';
import Default from '../__examples__/default';
import NewFilter from '../__examples__/new';
import LockedFilter from '../__examples__/locked';
import PermanantFilter from '../__examples__/permanant';
import ErrorFilter from '../__examples__/error';
import AssistiveTextFilter from '../__examples__/assistive-text';
/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */

var CustomAlignment = function CustomAlignment(_ref) {
  var children = _ref.children,
      align = _ref.align;
  return React.createElement("div", {
    className: "slds-grid slds-m-around--xx-large"
  }, React.createElement("div", {
    className: "slds-col--bump-".concat(align),
    style: {
      width: '420px'
    }
  }, children));
};

CustomAlignment.defaultProps = {
  align: 'left'
};
storiesOf(FILTER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Filter', function () {
  return React.createElement(CustomAlignment, null, React.createElement(Default, null));
}).add('New Filter', function () {
  return React.createElement(CustomAlignment, null, React.createElement(NewFilter, null));
}).add('Locked Filter', function () {
  return React.createElement(CustomAlignment, null, React.createElement(LockedFilter, null));
}).add('Permanant Filter', function () {
  return React.createElement(CustomAlignment, null, React.createElement(PermanantFilter, null));
}).add('Filter Align Right', function () {
  return React.createElement(CustomAlignment, {
    align: "right"
  }, React.createElement(Default, {
    align: "right"
  }));
}).add('AssistiveTextFilter', function () {
  return React.createElement(CustomAlignment, null, React.createElement(AssistiveTextFilter, null));
});
//# sourceMappingURL=storybook-stories.js.map