function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tree Item Component
// Implements the [Tree design pattern](https://www.lightningdesignsystem.com/components/tree/) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction';
import Button from '../../button';
import Highlighter from '../../utilities/highlighter'; // ### Event Helpers

import EventUtil from '../../../utilities/event';
import KEYS from '../../../utilities/key-code';
import mapKeyEventCallbacks from '../../../utilities/key-callbacks'; // ## Constants

import { TREE_ITEM } from '../../../utilities/constants';

var handleSelect = function handleSelect(event, props) {
  EventUtil.trap(event);

  if (isFunction(props.onSelect)) {
    props.onSelect(event, {
      node: props.node,
      select: !props.node.selected,
      treeIndex: props.treeIndex
    });
  }
};

var findNextNode = function findNextNode(flattenedNodes, node) {
  var nodes = flattenedNodes.map(function (flattenedNode) {
    return flattenedNode.node;
  });
  var index = nodes.indexOf(node);
  return flattenedNodes[(index + 1) % flattenedNodes.length];
};

var findPreviousNode = function findPreviousNode(flattenedNodes, node) {
  var nodes = flattenedNodes.map(function (flattenedNode) {
    return flattenedNode.node;
  });
  var index = nodes.indexOf(node) - 1;

  if (index < 0) {
    index += flattenedNodes.length;
  }

  return flattenedNodes[index];
};

var handleKeyDownDown = function handleKeyDownDown(event, props) {
  if (props.focusedNodeIndex === props.treeIndex) {
    // Select the next visible node
    var flattenedNode = findNextNode(props.flattenedNodes, props.node);
    props.onSelect(event, {
      node: flattenedNode.node,
      select: true,
      treeIndex: flattenedNode.treeIndex
    }, true);
  }
};

var handleKeyDownUp = function handleKeyDownUp(event, props) {
  if (props.focusedNodeIndex === props.treeIndex) {
    // Go to the previous visible node
    var flattenedNode = findPreviousNode(props.flattenedNodes, props.node);
    props.onSelect(event, {
      node: flattenedNode.node,
      select: true,
      treeIndex: flattenedNode.treeIndex
    }, true);
  }
};

var handleKeyDownLeft = function handleKeyDownLeft(event, props) {
  var nodes = props.flattenedNodes.map(function (flattenedNode) {
    return flattenedNode.node;
  });
  var index = nodes.indexOf(props.parent);

  if (index !== -1) {
    props.onExpand(event, {
      node: props.parent,
      expand: !props.parent.expanded,
      treeIndex: props.flattenedNodes[index].treeIndex
    });
    props.onSelect(event, {
      node: props.parent,
      select: true,
      treeIndex: props.flattenedNodes[index].treeIndex
    }, true);
  }
};

var handleKeyDownEnter = function handleKeyDownEnter(event, props) {
  handleSelect(event, props);
};

var handleKeyDown = function handleKeyDown(event, props) {
  var _callbacks;

  mapKeyEventCallbacks(event, {
    callbacks: (_callbacks = {}, _defineProperty(_callbacks, KEYS.DOWN, {
      callback: function callback(evt) {
        return handleKeyDownDown(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.UP, {
      callback: function callback(evt) {
        return handleKeyDownUp(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.LEFT, {
      callback: function callback(evt) {
        return handleKeyDownLeft(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.ENTER, {
      callback: function callback(evt) {
        return handleKeyDownEnter(evt, props);
      }
    }), _callbacks)
  }, true);
};

var handleFocus = function handleFocus(event, props) {
  if (!props.focusedNodeIndex && event.target === event.currentTarget) {
    handleSelect(event, props);
  }
};

var getTabIndex = function getTabIndex(props) {
  if (props.treeIndex === props.focusedNodeIndex || props.selectedNodeIndexes.length === 0 && props.treeIndex === props.flattenedNodes[0].treeIndex) {
    return 0;
  }

  return -1;
};
/**
 * A Tree Item is a non-branching node in a hierarchical list.
 */


var Item = function Item(props) {
  var isSelected = props.node.selected;
  var isFocused = props.treeIndex === props.focusedNodeIndex;
  return React.createElement("li", {
    id: "".concat(props.treeId, "-").concat(props.node.id),
    role: "treeitem",
    "aria-level": props.level,
    "aria-selected": isSelected ? 'true' : 'false',
    tabIndex: getTabIndex(props),
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event, props);
    },
    onFocus: function onFocus(event) {
      return handleFocus(event, props);
    },
    onBlur: props.onNodeBlur,
    ref: function ref(component) {
      if (props.treeHasFocus && component && isFocused) {
        component.focus();
      }
    }
  }, React.createElement("div", {
    className: classNames('slds-tree__item', {
      'slds-is-selected': isSelected
    }),
    onClick: function onClick(event) {
      handleSelect(event, props);
    }
  }, React.createElement(Button, {
    tabIndex: "-1",
    assistiveText: "",
    role: "presentation",
    iconCategory: "utility",
    iconName: "chevronright",
    iconSize: "small",
    variant: "icon",
    className: "slds-m-right--small slds-is-disabled",
    disabled: true
  }), React.createElement("a", {
    tabIndex: "-1",
    href: "javascript:void(0)" // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
    ,
    role: "presentation",
    className: "slds-truncate"
  }, React.createElement(Highlighter, {
    search: props.searchTerm
  }, props.label))));
}; // ### Display Name
// Always use the canonical component name as the React display name.


Item.displayName = TREE_ITEM; // ### Prop Types

Item.propTypes = {
  /**
   * HTML `id` of the wrapping container element joined with the `id` of the node. This will recursively increase as the tree depth increases.
   */
  htmlId: PropTypes.string.isRequired,

  /**
   * The text of the tree item.
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,

  /**
   * The number of nestings. Determines the ARIA level and style alignment.
   */
  level: PropTypes.number.isRequired,

  /**
   * The current node that is being rendered.
   */
  node: PropTypes.object.isRequired,

  /**
   * This function triggers when the expand or collapse icon is clicked or due to keyboard navigation.
   */
  onExpand: PropTypes.func.isRequired,

  /**
   * Function that will run whenever an item or branch is selected (click or keyboard).
   */
  onSelect: PropTypes.func,

  /**
   * Highlights term if found in node label
   */
  searchTerm: PropTypes.string,

  /**
   * Unique id used for a prefix of all tree nodes
   */
  treeId: PropTypes.string,

  /**
   * Location of node (zero index). First node is `0`. It's first child is `0-0`. This can be used to modify your nodes without searching for the node. This index is only valid if the `nodes` prop is the same as at the time of the event.
   */
  treeIndex: PropTypes.string,

  /**
   * Flattened tree structure.
   */
  flattenedNodes: PropTypes.arrayOf(PropTypes.object),

  /**
   * Tree indexes of nodes that are currently selected.
   */
  selectedNodeIndexes: PropTypes.arrayOf(PropTypes.string),

  /**
   * Tree index of the node that is currently focused.
   */
  focusedNodeIndex: PropTypes.string,

  /**
   * Callback for when a node is blurred.
   */
  onNodeBlur: PropTypes.func,

  /**
   * Sets focus on render.
   */
  treeHasFocus: PropTypes.bool,

  /**
   * This node's parent.
   */
  parent: PropTypes.object
};
Item.defaultProps = {
  selected: false,
  selectedNodeIndexes: []
};
export default Item;
//# sourceMappingURL=item.js.map