function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tree Component (PROTOTYPE)
// THIS IS A PROTOTYPE and does NOT meet accessibility standards. It implements the [Tree design pattern](https://www.lightningdesignsystem.com/components/trees/) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames';
import find from 'lodash.find'; // Child components

import Branch from './private/branch'; // Similar to React's PropTypes check. When in development mode, it issues errors in the console about properties.

import checkProps from './check-props'; // ## Constants

import { TREE } from '../../utilities/constants';
/* Flattens hierarchical tree structure into a flat array. The
 * first item in the array is the whole tree and therefore should be
 * removed with `slice(1)`.`
*/

var flattenTree = function flattenTree(root) {
  var treeIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!root.nodes) {
    return [{
      node: root,
      treeIndex: treeIndex
    }];
  }

  var nodes = [{
    node: root,
    treeIndex: treeIndex
  }];

  if (root.expanded) {
    for (var index = 0; index < root.nodes.length; index++) {
      var curNode = root.nodes[index];
      nodes = nodes.concat(flattenTree(curNode, treeIndex ? "".concat(treeIndex, "-").concat(index) : "".concat(index)));
    }
  }

  return nodes;
};
/**
 * A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed. This is a controlled component, since visual state is present in the `nodes` data.
 */


var Tree =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree(props) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props)); // Find the first selected node and initialize it properly so that can be tabbed to. If no node is selected, it will be selected upon first focus.

    _initialiseProps.call(_assertThisInitialized(_this));

    var flattenedNodes = flattenTree({
      nodes: _this.props.nodes,
      expanded: true
    }).slice(1);
    var selectedNode = find(flattenedNodes, function (curNode) {
      return curNode.node.selected;
    });
    var selectedNodeIndexes = [];
    var focusedNodeIndex;

    if (selectedNode) {
      selectedNodeIndexes.push(selectedNode.treeIndex);
      focusedNodeIndex = selectedNode.treeIndex;
    }

    _this.state = {
      flattenedNodes: flattenedNodes,
      selectedNodeIndexes: selectedNodeIndexes,
      focusedNodeIndex: focusedNodeIndex
    };
    return _this;
  }

  _createClass(Tree, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      checkProps(TREE, this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        flattenedNodes: flattenTree({
          nodes: nextProps.nodes,
          expanded: true
        }).slice(1)
      });
    }
  }, {
    key: "render",
    value: function render() {
      // One of these is required to pass accessibility tests
      var headingText = this.props.assistiveText || this.props.heading; // Start the zero level branch--that is the tree root. There is no label for
      // the tree root, but is required by all other nodes

      return React.createElement("div", {
        id: this.props.id,
        className: classNames('slds-tree_container', this.props.className)
        /* role="application" */

      }, React.createElement("h4", {
        className: classNames('slds-text-title--caps', {
          'slds-assistive-text': this.props.assistiveText
        }),
        id: "".concat(this.props.id, "__heading")
      }, headingText), React.createElement(Branch, {
        getNodes: this.props.getNodes,
        initalClassName: this.props.listClassName,
        htmlId: this.props.id,
        initialStyle: this.props.listStyle,
        level: 0,
        node: {
          nodes: this.props.nodes
        },
        flattenedNodes: this.state.flattenedNodes,
        selectedNodeIndexes: this.state.selectedNodeIndexes,
        focusedNodeIndex: this.state.focusedNodeIndex,
        treeHasFocus: this.treeHasFocus,
        onNodeBlur: this.handleNodeBlur,
        onSelect: this.handleSelect,
        onExpand: this.handleExpand,
        onScroll: this.props.onScroll,
        searchTerm: this.props.searchTerm,
        treeId: this.props.id
      }));
    }
  }]);

  return Tree;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "handleSelect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, data, clearSelectedNodes) {
      // When triggered by a key event, other nodes should be deselected.
      if (clearSelectedNodes) {
        _this2.state.flattenedNodes.forEach(function (flattenedNode) {
          if (flattenedNode.node.selected) {
            flattenedNode.node.selected = false;
          }
        });
      } // Do the click.


      _this2.props.onClick(event, data); // Keep track of the currently selected and focused nodes.


      var selectedNodeIndexes;

      if (data.select) {
        selectedNodeIndexes = _this2.state.selectedNodeIndexes.concat([data.treeIndex]);
      } else {
        selectedNodeIndexes = _this2.state.selectedNodeIndexes.filter(function (treeIndex) {
          return treeIndex !== data.treeIndex;
        });
      }

      _this2.treeHasFocus = true;

      _this2.setState({
        focusedNodeIndex: data.treeIndex,
        selectedNodeIndexes: selectedNodeIndexes
      });
    }
  });
  Object.defineProperty(this, "handleNodeBlur", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      // There is no need to render when blurring a node because focus is either:
      //  - outside of the tree, or
      //  - focused on another node in the tree, which triggers its own render
      _this2.treeHasFocus = false;
    }
  });
  Object.defineProperty(this, "handleExpand", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event, data) {
      _this2.treeHasFocus = true;

      _this2.props.onExpandClick(event, data);
    }
  });
};

Tree.defaultProps = {
  getNodes: function getNodes(node) {
    return node.nodes;
  }
}; // ### Display Name
// Always use the canonical component name as the React display name.

Tree.displayName = TREE; // ### Prop Types

Tree.propTypes = {
  /**
   * For users of assistive technology, if set the heading will be hidden. One of `heading` or `assistiveText` must be set in order to label the tree.
   */
  assistiveText: PropTypes.string,

  /**
   * Class names to be added to the container element which has the heading and the `ul.slds-tree` element as children.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Class names to be added to the top-level `ul` element of the tree.
   */
  listClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * A function that will be called by every branch to receive its child nodes. The parent `node` object with the branch data is passed into this function: `getNodes(node)`. If your state engine is Flux or Redux, then your tree data structure will probably be flattened or normalized within the store. This will allow you to build out your tree without transversing an actual tree of data and may be more performant.
   */
  getNodes: PropTypes.func,

  /**
   * This is the tree's heading and describes its contents. It can be hidden, see `assistiveText`.
   * */
  heading: PropTypes.string,

  /**
   * HTML `id` of primary element that has `.slds-tree` on it. This component has a wrapping container element outside of `.slds-tree`.
   */
  id: PropTypes.string.isRequired,

  /**
   * Array of items starting at the top of the tree. The shape each node in the array is:
   * ```
   * {
   *   expanded: string,
   *   id: string,
   *   label: string or node,
   *   selected: string,
   *   type: string,
   *   nodes: array
   * }
   * ```
   * `assistiveText: string` is optional and helpful if the label is not a string. Only `id` and `label` are required. Use `type: 'branch'` for folder and categories.
   */
  nodes: PropTypes.array,

  /**
   * Function that will run whenever an item or branch is selected due to click or keyboard navigation.
   */
  onClick: PropTypes.func.isRequired,

  /**
   * This function triggers when the expand or collapse icon is clicked or due to keyboard navigation.
   */
  onExpandClick: PropTypes.func.isRequired,

  /**
   * This function triggers when the top-level `ul` element scrolls. This can be used to implement an "infinite scroll" pattern and update the `nodes` prop accordingly.
   */
  onScroll: PropTypes.func,

  /**
   * Highlights term if found in node label. This does not auto-expand branches.
   */
  searchTerm: PropTypes.string,

  /**
   * Styles to be added to the top-level `ul` element. Useful for `overflow:hidden`.
   */
  listStyle: PropTypes.object
};
export default Tree;
//# sourceMappingURL=index.js.map