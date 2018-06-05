import React from 'react';
import createReactClass from 'create-react-class';
import AppLauncher from "../../../../components/app-launcher"; // `~` is replaced with design-system-react at runtime

import AppLauncherTile from "../../../../components/app-launcher/tile";
import AppLauncherSection from "../../../../components/app-launcher/section";
import GlobalNavigationBar from "../../../../components/global-navigation-bar";
import GlobalNavigationBarRegion from "../../../../components/global-navigation-bar/region";
import Icon from "../../../../components/icon";
import Button from "../../../../components/button";
import Search from "../../../../components/forms/input/search";
import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'AppLauncherExample',
  render: function render() {
    var search = React.createElement(Search, {
      onChange: function onChange() {
        console.log('Search term:', event.target.value);
      },
      placeholder: "Find an app",
      assistiveText: "Find an app"
    });
    var headerButton = React.createElement(Button, {
      label: "App Exchange"
    });
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      triggerName: "App Name",
      search: search,
      modalHeaderButton: headerButton
    }, React.createElement(AppLauncherSection, {
      title: "Tile Section"
    }, React.createElement(AppLauncherTile, {
      title: "Marketing Cloud",
      iconText: "MC",
      description: "Send emails, track emails, read emails! Emails!"
    }), React.createElement(AppLauncherTile, {
      title: "Call Center",
      description: "The key to call center and contact center is not to use too many words!",
      descriptionHeading: "Call Center",
      iconText: "CC"
    })), React.createElement(AppLauncherSection, {
      title: "Small Tile Section"
    }, React.createElement(AppLauncherTile, {
      title: "Journey Builder",
      iconText: "JB",
      size: "small"
    }), React.createElement(AppLauncherTile, {
      title: "Sales Cloud",
      iconNode: React.createElement(Icon, {
        name: "campaign",
        category: "standard",
        size: "large"
      }),
      size: "small"
    }))))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map