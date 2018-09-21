"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("lodash.isfunction");

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("../../button");

var _button2 = _interopRequireDefault(_button);

var _highlighter = require("../../utilities/highlighter");

var _highlighter2 = _interopRequireDefault(_highlighter);

var _event = require("../../../utilities/event");

var _event2 = _interopRequireDefault(_event);

var _keyCode = require("../../../utilities/key-code");

var _keyCode2 = _interopRequireDefault(_keyCode);

var _keyCallbacks = require("../../../utilities/key-callbacks");

var _keyCallbacks2 = _interopRequireDefault(_keyCallbacks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /**
   * HTML `id` of primary element that has `.slds-tree` on it. This component has a wrapping container element outside of `.slds-tree`.
   */
  htmlId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,

  /**
   * The text of the tree item.
   */
  label: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),

  /**
   * The number of nestings. Determines the ARIA level and style alignment.
   */
  level: _propTypes2.default.number.isRequired,

  /**
   * The current node that is being rendered.
   */
  node: _propTypes2.default.object.isRequired,

  /**
   * This function triggers when the expand or collapse icon is clicked or due to keyboard navigation.
   */
  onExpand: _propTypes2.default.func.isRequired,

  /**
   * Function that will run whenever an item or branch is clicked.
   */
  onSelect: _propTypes2.default.func,

  /**
   * Highlights term if found in node label
   */
  searchTerm: _propTypes2.default.string,

  /**
   * Location of node (zero index). First node is `0`. It's first child is `0-0`. This can be used to modify your nodes without searching for the node. This index is only valid if the `nodes` prop is the same as at the time of the event.
   */
  treeIndex: _propTypes2.default.string,

  /**
   * Flattened tree structure.
   */
  flattenedNodes: _propTypes2.default.arrayOf(_propTypes2.default.object),

  /**
   * Tree indexes of nodes that are currently selected.
   */
  selectedNodeIndexes: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * Tree index of the node that is currently focused.
   */
  focusedNodeIndex: _propTypes2.default.string,

  /**
   * Callback for when a node is blurred.
   */
  onNodeBlur: _propTypes2.default.func,

  /**
   * Sets focus on render.
   */
  treeHasFocus: _propTypes2.default.bool,

  /**
   * This node's parent.
   */
  parent: _propTypes2.default.object
};

var handleExpand = function handleExpand(event, props) {
  _event2.default.trap(event);

  if ((0, _lodash2.default)(props.onExpand)) {
    props.onExpand({
      event: event,
      data: {
        node: props.node,
        expand: !props.node.expanded,
        treeIndex: props.treeIndex
      }
    });
  }
};

var handleSelect = function handleSelect(_ref) {
  var event = _ref.event,
      props = _ref.props,
      fromFocus = _ref.fromFocus;

  _event2.default.trap(event);

  if ((0, _lodash2.default)(props.onSelect)) {
    props.onSelect({
      event: event,
      data: {
        node: props.node,
        select: !props.node.selected,
        treeIndex: props.treeIndex
      },
      fromFocus: fromFocus
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
    props.onSelect({
      event: event,
      data: {
        node: flattenedNode.node,
        select: true,
        treeIndex: flattenedNode.treeIndex
      },
      clearSelectedNodes: true
    });
  }
};

var handleKeyDownUp = function handleKeyDownUp(event, props) {
  if (props.focusedNodeIndex === props.treeIndex) {
    // Go to the previous visible node
    var flattenedNode = findPreviousNode(props.flattenedNodes, props.node);
    props.onSelect({
      event: event,
      data: {
        node: flattenedNode.node,
        select: true,
        treeIndex: flattenedNode.treeIndex
      },
      clearSelectedNodes: true
    });
  }
};

var handleKeyDownRight = function handleKeyDownRight(event, props) {
  if (props.node.expanded) {
    if (props.getNodes(props.node) && props.getNodes(props.node).length > 0) {
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
      props.onExpand({
        event: event,
        data: {
          node: props.parent,
          select: true,
          expand: !props.parent.expanded,
          treeIndex: props.flattenedNodes[index].treeIndex
        }
      });
    }
  }
};

var handleKeyDownEnter = function handleKeyDownEnter(event, props) {
  handleSelect({
    event: event,
    props: props
  });
};

var handleKeyDown = function handleKeyDown(event, props) {
  var _callbacks;

  (0, _keyCallbacks2.default)(event, {
    callbacks: (_callbacks = {}, _defineProperty(_callbacks, _keyCode2.default.DOWN, {
      callback: function callback(evt) {
        return handleKeyDownDown(evt, props);
      }
    }), _defineProperty(_callbacks, _keyCode2.default.UP, {
      callback: function callback(evt) {
        return handleKeyDownUp(evt, props);
      }
    }), _defineProperty(_callbacks, _keyCode2.default.RIGHT, {
      callback: function callback(evt) {
        return handleKeyDownRight(evt, props);
      }
    }), _defineProperty(_callbacks, _keyCode2.default.LEFT, {
      callback: function callback(evt) {
        return handleKeyDownLeft(evt, props);
      }
    }), _defineProperty(_callbacks, _keyCode2.default.ENTER, {
      callback: function callback(evt) {
        return handleKeyDownEnter(evt, props);
      }
    }), _callbacks)
  });
};

var handleFocus = function handleFocus(event, props) {
  if (!props.treeHasFocus && !props.focusedNodeIndex && event.target === event.currentTarget) {
    // did it happen by mouse?
    handleSelect({
      event: event,
      props: props,
      fromFocus: true
    });
  }
};

var getTabIndex = function getTabIndex(props) {
  var initialFocus = props.selectedNodeIndexes.length === 0 && props.treeIndex === props.flattenedNodes[0].treeIndex;
  return props.treeIndex === props.focusedNodeIndex || initialFocus ? 0 : -1;
}; // Most of these props come from the nodes array, not from the Tree props


var RenderBranch = function RenderBranch(children, props) {
  var isExpanded = props.node.expanded;
  var isSelected = props.node.selected;
  var isFocused = props.treeIndex === props.focusedNodeIndex;
  var isLoading = props.node.loading;

  var loader = _react2.default.createElement("div", {
    style: {
      display: 'block',
      paddingLeft: "".concat(1.5 * props.level + 1.5, "rem"),
      marginTop: '.5rem'
    }
  }, _react2.default.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '40%'
    }
  }), _react2.default.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '80%'
    }
  }), _react2.default.createElement("div", {
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
  return _react2.default.createElement("li", {
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
  }, _react2.default.createElement("div", {
    className: (0, _classnames2.default)('slds-tree__item', {
      'slds-is-selected': isSelected
    }),
    onClick: function onClick(event) {
      handleSelect({
        event: event,
        props: props
      });
    }
  }, _react2.default.createElement(_button2.default, {
    assistiveText: {
      icon: 'Toggle'
    },
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
  }), _react2.default.createElement("span", {
    className: "slds-size_1-of-1",
    id: "".concat(props.htmlId, "__label")
  }, _react2.default.createElement(_highlighter2.default, {
    search: props.searchTerm,
    className: "slds-tree__item-label slds-truncate"
  }, props.label))), isLoading ? loader : null, _react2.default.createElement("ul", {
    className: (0, _classnames2.default)({
      'slds-is-expanded': isExpanded,
      'slds-is-collapsed': !isExpanded
    }),
    role: "group",
    "aria-labelledby": "".concat(props.htmlId, "__label")
  }, isExpanded && !isLoading ? children : null));
};

RenderBranch.displayName = 'Branch';
RenderBranch.propTypes = propTypes;
exports.default = RenderBranch;