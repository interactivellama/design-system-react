function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tree Branch Component
// Implements the [Tree design pattern](https://www.lightningdesignsystem.com/components/tree/) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### classNames

import classNames from 'classnames'; // ### shortid

import shortid from 'shortid';
import Button from '../../button'; // Child components

import Item from './item';
import Highlighter from '../../utilities/highlighter'; // ### Event Helpers

import EventUtil from '../../../utilities/event';
import KEYS from '../../../utilities/key-code';
import mapKeyEventCallbacks from '../../../utilities/key-callbacks'; // ## Constants

import { TREE_BRANCH } from '../../../utilities/constants';

var handleExpand = function handleExpand(event, props) {
  EventUtil.trap(event);

  if (isFunction(props.onExpand)) {
    props.onExpand(event, {
      node: props.node,
      expand: !props.node.expanded,
      treeIndex: props.treeIndex
    });
  }
};

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

var handleScroll = function handleScroll(event, props) {
  var percentage = event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100;

  if (isFunction(props.onScroll)) {
    props.onScroll(event, {
      percentage: percentage
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

var handleKeyDownRight = function handleKeyDownRight(event, props) {
  if (props.node.expanded) {
    if (props.node.nodes && props.node.nodes.length > 0) {
      handleKeyDownDown(event, props);
    }
  } else {
    handleExpand(event, props);
  }
};

var handleKeyDownLeft = function handleKeyDownLeft(event, props) {
  if (props.node.expanded) {
    handleExpand(event, props);
  } else {
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
    }), _defineProperty(_callbacks, KEYS.RIGHT, {
      callback: function callback(evt) {
        return handleKeyDownRight(evt, props);
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
  });
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

var renderInitialNode = function renderInitialNode(children, props) {
  return (// id intentionally not rendered here, and is present on container that includes the header
    React.createElement("ul", {
      "aria-labelledby": "".concat(props.htmlId, "__heading") // TODO
      // aria-activedescendant=""
      ,
      className: classNames('slds-tree', props.initalClassName),
      onScroll: function onScroll(event) {
        handleScroll(event, props);
      },
      role: "tree",
      style: props.initialStyle // tabIndex="0"

    }, children)
  );
};

renderInitialNode.displayName = 'InitialNode';
renderInitialNode.propTypes = {
  /**
   * HTML `id` of the wrapping container element.
   */
  htmlId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /*
   * Class names to be added to the top-level `ul` element.
   */
  initalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /*
   * Styles to be added to the top-level `ul` element. Useful for `overflow:hidden`.
   */
  initialStyle: PropTypes.object
}; // Most of these props come from the nodes array, not from the Tree props

var renderBranch = function renderBranch(children, props) {
  var isExpanded = props.node.expanded;
  var isSelected = props.node.selected;
  var isFocused = props.treeIndex === props.focusedNodeIndex;
  var isLoading = props.node.loading;
  var loader = React.createElement("div", {
    style: {
      display: 'block',
      paddingLeft: "".concat(1.5 * props.level + 1.5, "rem"),
      marginTop: '.5rem'
    }
  }, React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '40%'
    }
  }), React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '80%'
    }
  }), React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '60%'
    }
  }));
  var label = props.node.assistiveText || (typeof props.node.label === 'string' ? props.node.label : null);
  return React.createElement("li", {
    id: props.htmlId,
    role: "treeitem",
    "aria-level": props.level,
    "aria-expanded": isExpanded ? 'true' : 'false',
    "aria-label": props.node.nodes && props.node.nodes.length > 0 ? label : null,
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
    assistiveText: "Toggle",
    iconCategory: "utility",
    iconName: "chevronright",
    iconSize: "small",
    variant: "icon",
    className: "slds-m-right--small",
    role: "presentation",
    "aria-controls": props.htmlId,
    onClick: function onClick(event) {
      handleExpand(event, props);
    },
    tabIndex: "-1"
  }), React.createElement("a", {
    id: "".concat(props.htmlId, "__label"),
    href: "javascript:void(0)" // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
    ,
    role: "presentation",
    className: "slds-truncate",
    tabIndex: "-1"
  }, React.createElement(Highlighter, {
    search: props.searchTerm
  }, props.label))), isLoading ? loader : null, React.createElement("ul", {
    className: classNames({
      'slds-is-expanded': isExpanded,
      'slds-is-collapsed': !isExpanded
    }),
    role: "group",
    "aria-labelledby": "".concat(props.htmlId, "__label")
  }, isExpanded && !isLoading ? children : null));
};

renderBranch.displayName = 'Branch';
renderBranch.propTypes = {
  /**
   * HTML `id` of primary element that has `.slds-tree` on it. This component has a wrapping container element outside of `.slds-tree`.
   */
  htmlId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * The text of the tree item.
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

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
   * Function that will run whenever an item or branch is clicked.
   */
  onSelect: PropTypes.func,

  /**
   * Highlights term if found in node label
   */
  searchTerm: PropTypes.string,

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
/**
 * A Tree Item is a non-branching node in a hierarchical list.
 */

var Branch = function Branch(props) {
  var treeIndex = '';
  var children;
  var treeId = props.treeId,
      level = props.level,
      onExpand = props.onExpand,
      searchTerm = props.searchTerm;

  if (Array.isArray(props.getNodes(props.node))) {
    children = props.node.nodes.map(function (node, index) {
      var child;
      var htmlId = "".concat(props.treeId, "-").concat(node.id);
      treeIndex = "".concat(index);

      if (props.treeIndex) {
        treeIndex = "".concat(props.treeIndex, "-").concat(treeIndex);
      }

      if (node.type === 'branch') {
        child = React.createElement(Branch, {
          getNodes: props.getNodes,
          htmlId: htmlId,
          key: shortid.generate(),
          label: node.label,
          level: level + 1,
          node: node,
          flattenedNodes: props.flattenedNodes,
          selectedNodeIndexes: props.selectedNodeIndexes,
          focusedNodeIndex: props.focusedNodeIndex,
          treeHasFocus: props.treeHasFocus,
          onNodeBlur: props.onNodeBlur,
          nodes: node.nodes,
          onSelect: props.onSelect,
          onExpand: onExpand,
          searchTerm: searchTerm,
          treeId: treeId,
          treeIndex: treeIndex,
          parent: props.node
        });
      } else {
        child = React.createElement(Item, {
          label: node.label,
          htmlId: htmlId,
          key: shortid.generate(),
          level: level + 1,
          node: node,
          flattenedNodes: props.flattenedNodes,
          selectedNodeIndexes: props.selectedNodeIndexes,
          focusedNodeIndex: props.focusedNodeIndex,
          treeHasFocus: props.treeHasFocus,
          onNodeBlur: props.onNodeBlur,
          onSelect: props.onSelect,
          onExpand: onExpand,
          searchTerm: searchTerm,
          treeIndex: treeIndex,
          treeId: treeId,
          parent: props.node
        });
      }

      return child;
    });
  }

  var branch = props.level === 0 ? renderInitialNode(children, props) : renderBranch(children, props);
  return branch;
}; // ### Display Name
// Always use the canonical component name as the React display name.


Branch.displayName = TREE_BRANCH; // ### Prop Types

Branch.propTypes = {
  /**
   * A function that will be called by every branch to receive its child nodes. The parent `node` object with the branch data is passed into this function: `getNodes(node)`. If your state engine is Flux or Redux, then your tree data structure will probably be flattened or normalized within the store. This will allow you to build out your tree without transversing an actual tree of data and may be more performant.
   */
  getNodes: PropTypes.func,

  /**
   * HTML `id` of the wrapping container element joined with the `id` of the node. This will recursively increase as the tree depth increases.
   */
  htmlId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * All tree nodes must have a unique HTML `id` for users of assistive technology. If no `id` key is present in the  is provided, one will be generated.
   */
  index: PropTypes.number,

  /**
   * Determines if nodes in the top-level of the tree.
   */
  initial: PropTypes.bool,

  /*
   * Class names to be added to the top-level `ul` element.
   */
  initalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  initialStyle: PropTypes.object,

  /**
   * The text of the tree item.
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * The number of nestings. Determines the ARIA level and style alignment.
   */
  level: PropTypes.number.isRequired,

  /**
   * The current node that is being rendered.
   */
  node: PropTypes.object.isRequired,

  /**
   * Function that will run whenever an item or branch is selected (click or keyboard).
   */
  onSelect: PropTypes.func,

  /**
   * This function triggers when the expand or collapse icon is clicked.
   */
  onExpand: PropTypes.func.isRequired,

  /**
   * Highlights term if found in node label
   */
  searchTerm: PropTypes.string,

  /**
   * Unique id used for a prefix of all tree nodes. This is the prefix for subsequent `htmlId` props.
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
Branch.defaultProps = {
  level: 0,
  label: '',
  treeIndex: '',
  selectedNodeIndexes: []
};
export default Branch;
//# sourceMappingURL=branch.js.map