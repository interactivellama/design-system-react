function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class';
import Datepicker from "../../../../components/date-picker";
import Input from "../../../../components/forms/input";
var Example = createReactClass({
  displayName: 'DatepickerExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(Datepicker, {
      isOpen: this.state.isOpen,
      onRequestClose: function onRequestClose() {
        _this.setState({
          isOpen: false
        });
      },
      onRequestOpen: function onRequestOpen() {
        _this.setState({
          isOpen: true
        });
      },
      onChange: function onChange(event, data) {
        if (_this.props.action) {
          var dataAsArray = Object.keys(data).map(function (key) {
            return data[key];
          });

          _this.props.action('onChange').apply(void 0, [event, data].concat(_toConsumableArray(dataAsArray)));
        } else if (console) {
          console.log('onChange', event, data);
        }
      }
    }, React.createElement(Input, {
      placeholder: "With custom Input",
      value: ""
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=custom-input.js.map