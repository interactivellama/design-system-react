function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import IconSettings from "../../../../components/icon-settings";
import Panel from "../../../../components/panel"; // `~` is replaced with design-system-react at runtime

import FilterGroup from "../../../../components/panel/filtering/group";
import FilterList from "../../../../components/panel/filtering/list";
import FilterListHeading from "../../../../components/panel/filtering/list-heading";
import Filter from "../../../../components/filter";
import Picklist from "../../../../components/menu-picklist";
var options = {
  'show-me': [{
    label: 'All Products',
    value: 'all-products'
  }, {
    label: 'All Wackamoles',
    value: 'all-Wackamoles'
  }]
};
var Example = createReactClass({
  displayName: 'FilterExample',
  propTypes: function propTypes() {
    return {
      align: PropTypes.string
    };
  },
  getInitialState: function getInitialState() {
    return {
      'show-me': {
        selectedPicklistItem: options['show-me'][0],
        selectedItem: options['show-me'][0],
        isActive: true
      }
    };
  },
  onChangePredicate: function onChangePredicate(event, _ref) {
    var id = _ref.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({}, idSuffix, _objectSpread({}, this.state[idSuffix], {
      selectedItem: this.state[idSuffix].selectedPicklistItem
    })));
  },
  onSelectPicklist: function onSelectPicklist(selectedItem, id) {
    this.setState(_defineProperty({}, id, _objectSpread({}, this.state[id], {
      selectedPicklistItem: selectedItem
    })));
  },
  onRemove: function onRemove(event, _ref2) {
    var id = _ref2.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({}, idSuffix, _objectSpread({}, this.state[idSuffix], {
      isActive: false
    })));
  },
  render: function render() {
    var _this = this;

    return this.state['show-me'].isActive && React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Filter, {
      align: this.props.align,
      id: "sample-panel-filtering-show-me",
      isPermanent: true,
      onChange: this.onChangePredicate,
      onRemove: this.onRemove,
      property: "Show Me",
      predicate: this.state['show-me'].selectedItem.label
    }, React.createElement(Picklist, {
      isInline: true,
      label: "Show Me",
      onSelect: function onSelect(selectedItem) {
        _this.onSelectPicklist(selectedItem, 'show-me');
      },
      options: options['show-me'],
      placeholder: "Select record type",
      value: this.state['show-me'].selectedPicklistItem.value
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=permanant.js.map