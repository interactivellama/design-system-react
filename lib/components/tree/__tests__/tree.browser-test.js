"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("lodash.isfunction");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require("lodash.clonedeep");

var _lodash4 = _interopRequireDefault(_lodash3);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _keyCode = require("../../../utilities/key-code");

var _tree = require("../../../utilities/sample-data/tree");

var _tree2 = _interopRequireDefault(_tree);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _tree3 = require("../../tree");

var _tree4 = _interopRequireDefault(_tree3);

var _search = require("../../forms/input/search");

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_chai2.default.use((0, _chaiEnzyme2.default)());

var COMPONENT_CSS_CLASSES = {
  base: 'slds-tree'
};
var DemoTree = (0, _createReactClass2.default)({
  displayName: 'DemoTree',
  // ### Prop Types
  propTypes: {
    branchExpandClicked: _propTypes2.default.func,
    exampleNodesIndex: _propTypes2.default.string,
    getNodes: _propTypes2.default.func,
    itemClicked: _propTypes2.default.func,
    noBranchSelection: _propTypes2.default.bool,
    searchTerm: _propTypes2.default.string,
    searchable: _propTypes2.default.bool,
    singleSelection: _propTypes2.default.bool,
    treeScrolled: _propTypes2.default.func,
    loading: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      exampleNodesIndex: 'sampleNodesDefault',
      id: 'example-tree',
      loading: true
    };
  },
  getInitialState: function getInitialState() {
    var initalNodes = this.props.exampleNodesIndex ? _tree2.default[this.props.exampleNodesIndex] : _tree2.default.sampleNodesDefault;
    return {
      nodes: (0, _lodash4.default)(initalNodes),
      searchTerm: this.props.searchable ? 'fruit' : undefined
    };
  },
  // By default Tree can have multiple selected nodes and folders/branches can be selected. To disable either of these, you can use the following logic. However, `props` are immutable. The node passed in shouldn't be modified, and due to object and arrays being reference variables, forceUpate is needed. This is just a "working example" not a prescription.
  handleExpandClick: function handleExpandClick(event, data) {
    var _this = this;

    if ((0, _lodash2.default)(this.props.branchExpandClicked)) {
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

      if ((0, _lodash2.default)(this.props.itemClicked)) {
        this.props.itemClicked(event, data);
      }
    } else if (!this.props.noBranchSelection || this.props.noBranchSelection && data.node.type !== 'branch') {
      data.node.selected = data.select;
      this.forceUpdate();

      if ((0, _lodash2.default)(this.props.itemClicked)) {
        this.props.itemClicked(event, data);
      }
    }
  },
  handleScroll: function handleScroll(event, data) {
    if ((0, _lodash2.default)(this.props.treeScrolled)) {
      this.props.treeScrolled(event, data);
    }
  },
  handleSearchChange: function handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  },
  render: function render() {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement("div", null, this.props.searchable ? _react2.default.createElement("div", null, _react2.default.createElement(_search2.default, {
      assistiveText: "Search Tree",
      value: this.state.searchTerm,
      onChange: this.handleSearchChange
    }), _react2.default.createElement("br", null)) : null, _react2.default.createElement(_tree4.default, _extends({
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
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, null)));
    afterEach(_enzymeHelpers.unmountComponent);
    it('moves selection up/down with wrapping when using keyboard up/down keys', function () {
      // Initial focus selects the item
      this.wrapper.find('#example-tree-1').simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-1').simulate('keyDown', _keyCode.keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-2').simulate('keyDown', _keyCode.keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Wrap to first node

      this.wrapper.find('#example-tree-7').simulate('keyDown', _keyCode.keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Wrap to last node

      this.wrapper.find('#example-tree-1').simulate('keyDown', _keyCode.keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-7').simulate('keyDown', _keyCode.keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-2').simulate('keyDown', _keyCode.keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1);
    });
  });
  describe('Tree can be navigated right/left using the keyboard', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      loading: false
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('expands/collapses branches when using right/left keys', function () {
      // Initial focus selects the item
      var item = this.wrapper.find('#example-tree-3');
      item.simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      (0, _chai.expect)(itemDiv).to.have.length(1); // Expand branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.RIGHT);
      var items = this.wrapper.find('li[aria-level=2]');
      (0, _chai.expect)(items).to.have.length(4); // Collapse branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      (0, _chai.expect)(items).to.have.length(0); // Expand branch and select an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.RIGHT);
      items = this.wrapper.find('li[aria-level=2]');
      (0, _chai.expect)(items).to.have.length(4); // Collapse branch from an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', _keyCode.keyObjects.DOWN);
      this.wrapper.find('#example-tree-8').simulate('keyDown', _keyCode.keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      (0, _chai.expect)(items).to.have.length(0);
    });
  });
  describe('Default Structure and CSS', function () {
    var id = 'this-is-a-container-test';
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      className: "this-is-a-container-test",
      heading: "Foods",
      id: id,
      listClassName: "this-is-an-unordered-list-test",
      listStyle: {
        height: '500px'
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has tree container class, list class, and heading', function () {
      var container = this.wrapper.find('.slds-tree_container');
      (0, _chai.expect)(container.hasClass('this-is-a-container-test')).to.be.true;
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(list).to.have.length(1);
      (0, _chai.expect)(list.hasClass('this-is-an-unordered-list-test')).to.be.true;
      (0, _chai.expect)(list.node.offsetHeight).to.equal(500);
      var heading = this.wrapper.find("#".concat(id, "__heading"));
      (0, _chai.expect)(heading).to.have.length(1);
    });
  });
  describe('Assistive Technology', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      assistiveText: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has heading via assistiveText', function () {
      var heading = this.wrapper.find('#example-tree__heading.slds-assistive-text');
      (0, _chai.expect)(heading).to.have.length(1);
      var ariaLabelledbyId = this.wrapper.find('.slds-tree[aria-labelledby="example-tree__heading"]');
      (0, _chai.expect)(ariaLabelledbyId).to.have.length(1);
    });
  });
  describe('Initial Expanded and Selection based on nodes', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithInitialState",
      heading: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has initial selection', function () {
      var selectedNode = this.wrapper.find('#example-tree-2').find('.slds-is-selected'); // Fruits, Watermelon, Tree Fruits

      (0, _chai.expect)(selectedNode).to.have.length(3);
      selectedNode = this.wrapper.find('#example-tree-5').find('.slds-is-selected');
      (0, _chai.expect)(selectedNode).to.have.length(1);
    });
    it('has initial expanded branches', function () {
      var expandedBranchList = this.wrapper.find('#example-tree-2').find('.slds-is-expanded');
      (0, _chai.expect)(expandedBranchList.node.childNodes).to.have.length(2);
    });
  });
  describe('Branch expands and selects on click', function () {
    var itemClicked = sinon.spy();
    var expandClicked = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      branchExpandClicked: expandClicked,
      itemClicked: itemClicked,
      heading: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('branch calls onExpandClicked and onClick', function () {
      var branch = this.wrapper.find('#example-tree-2').find('.slds-tree__item');
      branch.simulate('click');
      (0, _chai.expect)(itemClicked.callCount).to.equal(1);
      var expandButton = this.wrapper.find('#example-tree-2').find('.slds-button');
      expandButton.simulate('click');
      (0, _chai.expect)(expandClicked.callCount).to.equal(1);
    });
  });
  describe('Item calls onClick', function () {
    var itemClicked = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      itemClicked: itemClicked,
      heading: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('item calls itemClicked', function () {
      var item = this.wrapper.find('#example-tree-1').find('.slds-tree__item');
      item.simulate('click');
      (0, _chai.expect)(itemClicked.callCount).to.equal(1);
    });
  });
  describe('getNodes is called on initial tree', function () {
    var getNodes = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithInitialState",
      getNodes: getNodes,
      heading: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('getNodes is called on initial tree', function () {
      (0, _chai.expect)(getNodes.callCount).to.equal(1);
    });
  });
  describe('Search term is highlighted', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      searchTerm: "fruit",
      heading: "Foods"
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('item calls itemClicked', function () {
      var markedItem = this.wrapper.find('mark');
      (0, _chai.expect)(markedItem).to.have.length(1);
    });
  });
  describe('Scrolling calls onScroll', function () {
    var onScroll = sinon.spy();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoTree, {
      exampleNodesIndex: "sampleNodesWithLargeDataset",
      heading: "Foods",
      onScroll: onScroll,
      listStyle: {
        height: '300px',
        overflowY: 'auto'
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('scrolling calls onScroll', function () {
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      list.simulate('scroll');
      (0, _chai.expect)(onScroll.callCount).to.equal(1);
    });
  });
});