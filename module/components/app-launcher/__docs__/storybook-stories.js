import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { storiesOf, action } from '@storybook/react';
import { APP_LAUNCHER } from '../../../utilities/constants';
import AppLauncher from '../../app-launcher';
import AppLauncherTile from '../../app-launcher/tile';
import AppLauncherSection from '../../app-launcher/section';
import Icon from '../../icon';
import Button from '../../button';
import Search from '../../forms/input/search';
import GlobalNavigationBar from '../../global-navigation-bar';
import GlobalNavigationBarRegion from '../../global-navigation-bar/region';
import IconSettings from '../../icon-settings';
import SLDSSettings from '../../SLDSSettings';
SLDSSettings.setAppElement('#root'); // used by Modal component

var standardTileDemoStyles = {
  width: '20rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem'
};
var smallTileDemoStyles = {
  width: '6rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem'
};
var DemoAppLauncherTile = createReactClass({
  displayName: 'DemoAppLauncherTile',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  render: function render() {
    return React.createElement(AppLauncherTile, {
      title: "Marketing Cloud",
      iconText: "MC",
      description: "Send emails, track emails, read emails! Emails!",
      href: "https://www.marketingcloud.com/",
      onClick: action('Tile clicked! Actual href should be ignored'),
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherSmallTile = createReactClass({
  displayName: 'DemoAppLauncherSmallTile',
  render: function render() {
    return React.createElement(AppLauncherTile, {
      title: "Journey Builder",
      iconText: "JB",
      size: "small",
      onClick: action('Tiny tile clicked!')
    });
  }
});
var DemoAppLauncherTileWithIconNode = createReactClass({
  displayName: 'DemoAppLauncherTileWithIconNode',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  render: function render() {
    var icon = React.createElement(Icon, {
      name: "campaign",
      category: "standard",
      size: "large"
    });
    return React.createElement(AppLauncherTile, {
      title: "Sales Cloud",
      description: "The primary internal Salesforce org.",
      href: "https://www.salesforce.com/",
      iconNode: icon,
      onClick: action('Tile with icon node clicked!'),
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherTileWithIconText = createReactClass({
  displayName: 'DemoAppLauncherTileWithIconText',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  render: function render() {
    return React.createElement(AppLauncherTile, {
      title: "Sales Cloud",
      description: "The primary internal Salesforce org.",
      iconText: "SC",
      onClick: action('Tile with icon text clicked!'),
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherTileWithTruncatedText = createReactClass({
  displayName: 'DemoAppLauncherTileWithTruncatedText',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  render: function render() {
    return React.createElement(AppLauncherTile, {
      title: "Call Center",
      description: "The key to call center and contact center is not to use too many words!",
      iconText: "CC",
      onClick: action('Tile with icon text clicked!'),
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherTileWithDescriptionHeading = createReactClass({
  displayName: 'DemoAppLauncherTileWithDescriptionHeading',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      search: 'journey'
    };
  },
  render: function render() {
    return React.createElement(AppLauncherTile, {
      title: "Journey Builder",
      description: "Build 1:1 journeys blah blah blah and use way too many words",
      descriptionHeading: "Journey Builder",
      iconText: "SC",
      onClick: action('Tile with description heading clicked!'),
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherTileWithSearchText = createReactClass({
  displayName: 'DemoAppLauncherTileWithSearchText',
  propTypes: {
    search: PropTypes.string,
    size: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      search: 'Call'
    };
  },
  render: function render() {
    return React.createElement(DemoAppLauncherTileWithTruncatedText, {
      search: this.props.search,
      size: this.props.size
    });
  }
});
var DemoAppLauncherSection = createReactClass({
  displayName: 'DemoAppLauncherSection',
  render: function render() {
    return React.createElement("div", null, React.createElement(AppLauncherSection, {
      title: "All Items",
      toggleable: true,
      onToggleClick: action('Section `All Items` open -->')
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconText, null), React.createElement(DemoAppLauncherTileWithIconNode, null)), React.createElement(AppLauncherSection, {
      title: "All Apps",
      onToggleClick: action('Section `All App` open -->')
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null)));
  }
});
var DemoAppLauncherSectionWithSmallTiles = createReactClass({
  displayName: 'DemoAppLauncherSectionWithSmallTiles',
  render: function render() {
    return React.createElement("div", null, React.createElement(AppLauncherSection, {
      title: "All Items",
      onToggleClick: action('Section `All Items` open -->')
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconText, null), React.createElement(DemoAppLauncherTileWithIconNode, null)), React.createElement(AppLauncherSection, {
      title: "All Apps",
      onToggleClick: action('Section `All App` open -->')
    }, React.createElement(DemoAppLauncherTile, {
      size: "small"
    }), React.createElement(DemoAppLauncherTileWithIconNode, {
      size: "small"
    })));
  }
});
var DemoAppLauncher = createReactClass({
  displayName: 'DemoAppLauncher',
  getInitialState: function getInitialState() {
    return {
      search: '',
      appLauncherOpen: this.props.isOpen || false,
      // eslint-disable-line react/prop-types
      allItemsSectionIsOpen: false
    };
  },
  onClear: function onClear() {
    this.setState({
      search: ''
    });
  },
  onSearch: function onSearch(event) {
    this.setState({
      search: event.target.value
    });
  },
  toggleAppLauncher: function toggleAppLauncher() {
    this.setState({
      appLauncherOpen: !this.state.appLauncherOpen
    });
  },
  toggleSection: function toggleSection() {
    this.setState({
      allItemsSectionIsOpen: !this.state.allItemsSectionIsOpen
    });
  },
  render: function render() {
    var search = React.createElement(Search, {
      clearable: this.state.search !== '',
      onChange: this.onSearch,
      onClear: this.onClear,
      placeholder: "Find an app",
      assistiveText: "Find an app",
      value: this.state.search
    });
    var modalHeaderButton = React.createElement(Button, {
      label: "App Exchange",
      onClick: action('Modal Button clicked!')
    });
    return React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      assistiveText: {
        trigger: 'Open App Launcher'
      },
      triggerName: "App Name",
      search: search,
      modalClassName: "custom-modal-class",
      modalHeaderButton: modalHeaderButton,
      isOpen: this.state.appLauncherOpen,
      triggerOnClick: this.toggleAppLauncher,
      onClose: this.toggleAppLauncher
    }, React.createElement(AppLauncherSection, {
      toggleable: true,
      title: "All Items",
      isOpen: this.state.allItemsSectionIsOpen,
      onToggleClick: this.toggleSection
    }, React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconNode, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconText, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconNode, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconText, {
      search: this.state.search
    })), React.createElement(AppLauncherSection, {
      title: "All Apps",
      toggleable: true
    }, React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithTruncatedText, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithDescriptionHeading, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithTruncatedText, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithDescriptionHeading, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithTruncatedText, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithDescriptionHeading, {
      search: this.state.search
    })))));
  }
});
var DemoAppLauncherNoHeaderButton = createReactClass({
  displayName: 'DemoAppLauncherNoHeaderButton',
  getInitialState: function getInitialState() {
    return {
      search: '',
      appLauncherOpen: false,
      allItemsSectionIsOpen: false
    };
  },
  onSearch: function onSearch(event) {
    this.setState({
      search: event.target.value
    });
  },
  toggleAppLauncher: function toggleAppLauncher() {
    this.setState({
      appLauncherOpen: !this.state.appLauncherOpen
    });
  },
  render: function render() {
    var search = React.createElement(Search, {
      onChange: this.onSearch,
      placeholder: "Find an app",
      assistiveText: "Find an app"
    });
    return React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      triggerName: "App Name",
      search: search,
      isOpen: this.state.appLauncherOpen,
      triggerOnClick: this.toggleAppLauncher,
      onClose: this.toggleAppLauncher
    }, React.createElement(AppLauncherSection, {
      toggleable: true,
      title: "All Items"
    }, React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconNode, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithIconText, {
      search: this.state.search
    })), React.createElement(AppLauncherSection, {
      title: "All Apps",
      toggleable: true
    }, React.createElement(DemoAppLauncherTile, {
      search: this.state.search
    }), React.createElement(DemoAppLauncherTileWithTruncatedText, {
      search: this.state.search
    })))));
  }
});
var DemoAppLauncherNoSearch = createReactClass({
  displayName: 'DemoAppLauncherNoSearch',
  getInitialState: function getInitialState() {
    return {
      appLauncherOpen: false,
      allItemsSectionIsOpen: false
    };
  },
  toggleAppLauncher: function toggleAppLauncher() {
    this.setState({
      appLauncherOpen: !this.state.appLauncherOpen
    });
  },
  render: function render() {
    var modalHeaderButton = React.createElement(Button, {
      label: "App Exchange",
      onclick: action('Modal Button clicked!')
    });
    return React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      triggerName: "App Name",
      modalHeaderButton: modalHeaderButton,
      isOpen: this.state.appLauncherOpen,
      triggerOnClick: this.toggleAppLauncher,
      onClose: this.toggleAppLauncher
    }, React.createElement(AppLauncherSection, {
      toggleable: true,
      title: "All Items"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithIconText, null)), React.createElement(AppLauncherSection, {
      title: "All Apps",
      toggleable: true
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)))));
  }
});
var DemoAppLauncherWithSeveralSections = createReactClass({
  displayName: 'DemoAppLauncherWithSeveralSections',
  onSearch: function onSearch() {// stub
  },
  render: function render() {
    var search = React.createElement(Search, {
      onChange: this.onSearch,
      placeholder: "Find an app",
      assistiveText: "Find an app"
    });
    var modalHeaderButton = React.createElement(Button, {
      label: "App Exchange",
      onclick: action('Modal Button clicked!')
    });
    return React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      triggerName: "App Name",
      search: search,
      modalHeaderButton: modalHeaderButton
    }, React.createElement(AppLauncherSection, {
      title: "First Section"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)), React.createElement(AppLauncherSection, {
      title: "Second Section"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)), React.createElement(AppLauncherSection, {
      title: "Third Section"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)), React.createElement(AppLauncherSection, {
      title: "Fourth Section"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)), React.createElement(AppLauncherSection, {
      title: "Fifth Section"
    }, React.createElement(DemoAppLauncherTile, null), React.createElement(DemoAppLauncherTileWithIconNode, null), React.createElement(DemoAppLauncherTileWithTruncatedText, null)))));
  }
});
storiesOf(APP_LAUNCHER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('App Launcher (open)', function () {
  return React.createElement(DemoAppLauncher, {
    isOpen: true
  });
}).add('App Launcher', function () {
  return React.createElement(DemoAppLauncher, null);
}).add('App Launcher no header button', function () {
  return React.createElement(DemoAppLauncherNoHeaderButton, null);
}).add('App Launcher no search', function () {
  return React.createElement(DemoAppLauncherNoSearch, null);
}).add('App Launcher with several sections (no toggle)', function () {
  return React.createElement(DemoAppLauncherWithSeveralSections, null);
}).add('Tile', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTile, null));
}).add('Small Tile', function () {
  return React.createElement("div", {
    style: smallTileDemoStyles
  }, React.createElement(DemoAppLauncherSmallTile, null));
}).add('Tile with Icon node', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTileWithIconNode, null));
}).add('Tile with icon text', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTileWithIconText, null));
}).add('Tile with search text', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTileWithSearchText, null));
}).add('Tile with truncated text', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTileWithTruncatedText, null));
}).add('Tile with description heading', function () {
  return React.createElement("div", {
    style: standardTileDemoStyles
  }, React.createElement(DemoAppLauncherTileWithDescriptionHeading, null));
}).add('Section', function () {
  return React.createElement(DemoAppLauncherSection, null);
}).add('Section with small tiles', function () {
  return React.createElement(DemoAppLauncherSectionWithSmallTiles, null);
});
//# sourceMappingURL=storybook-stories.js.map