function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-env mocha */

/* global sinon */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-unused-expressions */
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import isFunction from 'lodash.isfunction';
import cloneDeep from 'lodash.clonedeep';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import { keyObjects } from '../../../utilities/key-code';
import sampleNodes from '../../../utilities/sample-data/tree';
import IconSettings from '../../icon-settings';
import Tree from '../../tree';
import Search from '../../forms/input/search';
chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  base: 'slds-tree'
};
var DemoTree = createReactClass({
  displayName: 'DemoTree',
  // ### Prop Types
  propTypes: {
    branchExpandClicked: PropTypes.func,
    exampleNodesIndex: PropTypes.string,
    getNodes: PropTypes.func,
    itemClicked: PropTypes.func,
    noBranchSelection: PropTypes.bool,
    searchTerm: PropTypes.string,
    searchable: PropTypes.bool,
    singleSelection: PropTypes.bool,
    treeScrolled: PropTypes.func,
    loading: PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      exampleNodesIndex: 'sampleNodesDefault',
      id: 'example-tree',
      loading: true
    };
  },
  getInitialState: function getInitialState() {
    var initalNodes = this.props.exampleNodesIndex ? sampleNodes[this.props.exampleNodesIndex] : sampleNodes.sampleNodesDefault;
    return {
      nodes: cloneDeep(initalNodes),
      searchTerm: this.props.searchable ? 'fruit' : undefined
    };
  },
  // By default Tree can have multiple selected nodes and folders/branches can be selected. To disable either of these, you can use the following logic. However, `props` are immutable. The node passed in shouldn't be modified, and due to object and arrays being reference variables, forceUpate is needed. This is just a "working example" not a prescription.
  handleExpandClick: function handleExpandClick(event, data) {
    var _this = this;

    if (isFunction(this.props.branchExpandClicked)) {
      this.props.branchExpandClicked(event, data);
    }

    data.node.expanded = data.expand;

    if (this.props.loading) {
      data.node.loading = data.expand ? true : undefined; // Fake delay to demonstrate use of loading node attibute

      setTimeout(function (node) {
        node.loading = false;

        _this.forceUpdate();
      }, 500, data.node);
    } else {
      this.forceUpdate();
    }
  },
  handleClick: function handleClick(event, data) {
    if (this.props.singleSelection) {
      data.node.selected = data.select;
      this.setState({
        singleSelection: data.node
      });

      if (this.state.singleSelection) {
        this.state.singleSelection.selected = undefined;
      }

      this.forceUpdate();

      if (isFunction(this.props.itemClicked)) {
        this.props.itemClicked(event, data);
      }
    } else if (!this.props.noBranchSelection || this.props.noBranchSelection && data.node.type !== 'branch') {
      data.node.selected = data.select;
      this.forceUpdate();

      if (isFunction(this.props.itemClicked)) {
        this.props.itemClicked(event, data);
      }
    }
  },
  handleScroll: function handleScroll(event, data) {
    if (isFunction(this.props.treeScrolled)) {
      this.props.treeScrolled(event, data);
    }
  },
  handleSearchChange: function handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, this.props.searchable ? React.createElement("div", null, React.createElement(Search, {
      assistiveText: "Search Tree",
      value: this.state.searchTerm,
      onChange: this.handleSearchChange
    }), React.createElement("br", null)) : null, React.createElement(Tree, _extends({
      id: "example-tree",
      getNodes: this.props.getNodes,
      nodes: this.state.nodes,
      onExpandClick: this.handleExpandClick,
      onClick: this.handleClick,
      onScroll: this.handleScroll,
      searchTerm: this.state.searchTerm
    }, this.props))));
  }
});
describe('Tree: ', function () {
  /*
  	Tests
   */
  describe('Tree can be navigated up/down using the keyboard', function () {
    beforeEach(mountComponent(React.createElement(DemoTree, null)));
    afterEach(unmountComponent);
    it('moves selection up/down with wrapping when using keyboard up/down keys', function () {
      // Initial focus selects the item
      this.wrapper.find('#example-tree-1').simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-1').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-2').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Wrap to first node

      this.wrapper.find('#example-tree-7').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Wrap to last node

      this.wrapper.find('#example-tree-1').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-7').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-2').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1);
    });
  });
  describe('Tree can be navigated right/left using the keyboard', function () {
    beforeEach(mountComponent(React.createElement(DemoTree, {
      loading: false
    })));
    afterEach(unmountComponent);
    it('expands/collapses branches when using right/left keys', function () {
      // Initial focus selects the item
      var item = this.wrapper.find('#example-tree-3');
      item.simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Expand branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.RIGHT);
      var items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(4); // Collapse branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(0); // Expand branch and select an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.RIGHT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(4); // Collapse branch from an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.DOWN);
      this.wrapper.find('#example-tree-8').simulate('keyDown', keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(0);
    });
  });
  describe('Default Structure and CSS', function () {
    var id = 'this-is-a-container-test';
    beforeEach(mountComponent(React.createElement(DemoTree, {
      className: "this-is-a-container-test",
      heading: "Foods",
      id: id,
      listClassName: "this-is-an-unordered-list-test",
      listStyle: {
        height: '500px'
      }
    })));
    afterEach(unmountComponent);
    it('has tree container class, list class, and heading', function () {
      var container = this.wrapper.find('.slds-tree_container');
      expect(container.hasClass('this-is-a-container-test')).to.be.true;
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(list).to.have.length(1);
      expect(list.hasClass('this-is-an-unordered-list-test')).to.be.true;
      expect(list.node.offsetHeight).to.equal(500);
      var heading = this.wrapper.find("#".concat(id, "__heading"));
      expect(heading).to.have.length(1);
    });
  });
  describe('Assistive Technology', function () {
    beforeEach(mountComponent(React.createElement(DemoTree, {
      assistiveText: "Foods"
    })));
    afterEach(unmountComponent);
    it('has heading via assistiveText', function () {
      var heading = this.wrapper.find('#example-tree__heading.slds-assistive-text');
      expect(heading).to.have.length(1);
      var ariaLabelledbyId = this.wrapper.find('.slds-tree[aria-labelledby="example-tree__heading"]');
      expect(ariaLabelledbyId).to.have.length(1);
    });
  });
  describe('Initial Expanded and Selection based on nodes', function () {
    beforeEach(mountComponent(React.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithInitialState",
      heading: "Foods"
    })));
    afterEach(unmountComponent);
    it('has initial selection', function () {
      var selectedNode = this.wrapper.find('#example-tree-2').find('.slds-is-selected'); // Fruits, Watermelon, Tree Fruits

      expect(selectedNode).to.have.length(3);
      selectedNode = this.wrapper.find('#example-tree-5').find('.slds-is-selected');
      expect(selectedNode).to.have.length(1);
    });
    it('has initial expanded branches', function () {
      var expandedBranchList = this.wrapper.find('#example-tree-2').find('.slds-is-expanded');
      expect(expandedBranchList.node.childNodes).to.have.length(2);
    });
  });
  describe('Branch expands and selects on click', function () {
    var itemClicked = sinon.spy();
    var expandClicked = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoTree, {
      branchExpandClicked: expandClicked,
      itemClicked: itemClicked,
      heading: "Foods"
    })));
    afterEach(unmountComponent);
    it('branch calls onExpandClicked and onClick', function () {
      var branch = this.wrapper.find('#example-tree-2').find('.slds-tree__item');
      branch.simulate('click');
      expect(itemClicked.callCount).to.equal(1);
      var expandButton = this.wrapper.find('#example-tree-2').find('.slds-button');
      expandButton.simulate('click');
      expect(expandClicked.callCount).to.equal(1);
    });
  });
  describe('Item calls onClick', function () {
    var itemClicked = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoTree, {
      itemClicked: itemClicked,
      heading: "Foods"
    })));
    afterEach(unmountComponent);
    it('item calls itemClicked', function () {
      var item = this.wrapper.find('#example-tree-1').find('.slds-tree__item');
      item.simulate('click');
      expect(itemClicked.callCount).to.equal(1);
    });
  });
  describe('getNodes is called on initial tree', function () {
    var getNodes = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithInitialState",
      getNodes: getNodes,
      heading: "Foods"
    })));
    afterEach(unmountComponent);
    it('getNodes is called on initial tree', function () {
      expect(getNodes.callCount).to.equal(1);
    });
  });
  describe('Search term is highlighted', function () {
    beforeEach(mountComponent(React.createElement(DemoTree, {
      searchTerm: "fruit",
      heading: "Foods"
    })));
    afterEach(unmountComponent);
    it('item calls itemClicked', function () {
      var markedItem = this.wrapper.find('mark');
      expect(markedItem).to.have.length(1);
    });
  });
  describe('Scrolling calls onScroll', function () {
    var onScroll = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithLargeDataset",
      heading: "Foods",
      onScroll: onScroll,
      listStyle: {
        height: '300px',
        overflowY: 'auto'
      }
    })));
    afterEach(unmountComponent);
    it('scrolling calls onScroll', function () {
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      list.simulate('scroll');
      expect(onScroll.callCount).to.equal(1);
    });
  });
});
//# sourceMappingURL=tree.browser-test.js.map