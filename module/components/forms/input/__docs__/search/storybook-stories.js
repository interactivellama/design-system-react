import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../../../icon-settings';
import { FORMS_SEARCH } from '../../../../../utilities/constants';
import Search from '../../search';
storiesOf(FORMS_SEARCH, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Standard', function () {
  return React.createElement(Search, {
    assistiveText: "Search",
    placeholder: "Search",
    name: "search-input",
    onChange: action('change'),
    onSearch: action('search')
  });
});
//# sourceMappingURL=storybook-stories.js.map