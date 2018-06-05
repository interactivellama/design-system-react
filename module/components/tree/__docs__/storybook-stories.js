function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { storiesOf, action } from '@storybook/react';
import cloneDeep from 'lodash.clonedeep';
import IconSettings from '../../icon-settings';
import { TREE } from '../../../utilities/constants';
import sampleNodes from '../../../utilities/sample-data/tree';
import Tree from '../../tree';
import Search from '../../forms/input/search';
var branchExpandClicked = action;
var itemClicked = action;
var treeScrolled = action;
var DemoTree = createReactClass({
  displayName: 'DemoTree',
  // ### Prop Types
  propTypes: {
    exampleNodesIndex: PropTypes.string,
    noBranchSelection: PropTypes.bool,
    searchTerm: PropTypes.string,
    searchable: PropTypes.bool,
    singleSelection: PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      exampleNodesIndex: 'sampleNodesDefault',
      id: 'example-tree'
    };
  },
  getInitialState: function getInitialState() {
    var initalNodes = this.props.exampleNodesIndex ? sampleNodes[this.props.exampleNodesIndex] : sampleNodes.sampleNodesDefault;
    return {
      nodes: cloneDeep(initalNodes),
      selectedNode: undefined,
      searchTerm: this.props.searchable ? 'fruit' : undefined
    };
  },
  // By default Tree can have multiple selected nodes and folders/branches can be selected. To disable either of these, you can use the following logic. However, `props` are immutable. The node passed in shouldn't be modified, and due to object and arrays being reference variables, forceUpate is needed. This is just a "working example" not a prescription.
  handleExpandClick: function handleExpandClick(event, data) {
    var _this = this;

    branchExpandClicked('Expand Branch')(event, data);
    data.node.loading = data.expand ? true : undefined; // Fake delay to demonstrate use of loading node attibute

    setTimeout(function (node) {
      node.loading = false;

      _this.forceUpdate();
    }, 500, data.node);
    data.node.expanded = data.expand;
  },
  handleClick: function handleClick(event, data) {
    var _this2 = this;

    if (this.props.singleSelection) {
      data.node.selected = data.select;
      this.setState(function (prevState) {
        if (_this2.state.selectedNode && _this2.state.selectedNode.id !== data.node.id) {
          _this2.state.selectedNode.selected = false;
        }

        return {
          selectedNode: data.node
        };
      });
      itemClicked('Node Selected')(event, data);
    } else if (!this.props.noBranchSelection || this.props.noBranchSelection && data.node.type !== 'branch') {
      data.node.selected = data.select; // trigger render

      this.setState(function (prevState) {
        return _objectSpread({}, prevState);
      });
      itemClicked('Node Selected')(event, data);
    }
  },
  handleScroll: function handleScroll(event, data) {
    treeScrolled('Tree scrolled')(event, data);
  },
  handleSearchChange: function handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  },
  render: function render() {
    return React.createElement("div", null, this.props.searchable ? React.createElement("div", null, React.createElement(Search, {
      assistiveText: "Search Tree",
      value: this.state.searchTerm,
      onChange: this.handleSearchChange
    }), React.createElement("br", null)) : null, React.createElement(Tree, _extends({
      nodes: this.state.nodes,
      onExpandClick: this.handleExpandClick,
      onClick: this.handleClick,
      onScroll: this.handleScroll,
      searchTerm: this.state.searchTerm
    }, this.props)));
  }
});
storiesOf(TREE, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods"
  });
}).add('Initial Expanded/Selection', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods",
    exampleNodesIndex: "sampleNodesWithInitialState"
  });
}).add('No Branch Select', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods",
    noBranchSelection: true
  });
}).add('Single Selection', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods",
    singleSelection: true
  });
}).add('Assistive Heading', function () {
  return React.createElement(DemoTree, {
    assistiveText: "Miscellaneous Foods"
  });
}).add('Overflow Hidden', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods",
    exampleNodesIndex: "sampleNodesWithLargeDataset",
    listStyle: {
      height: '300px',
      overflowY: 'auto'
    }
  });
}).add('Large dataset (300+)', function () {
  return React.createElement(DemoTree, {
    heading: "Miscellaneous Foods",
    exampleNodesIndex: "sampleNodesWithLargeDataset"
  });
}).add('Highlighted Search', function () {
  return React.createElement(DemoTree, {
    heading: "Results for fruit",
    searchable: true
  });
});
//# sourceMappingURL=storybook-stories.js.map