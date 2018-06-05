function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import memoize from 'lodash.memoize';
var canvas = document.createElement('canvas');
var docFragment = document.createDocumentFragment();
docFragment.appendChild(canvas);
var canvasContext = canvas.getContext('2d');
var measureWidth = memoize(function (text, font) {
  canvasContext.font = font;
  return canvasContext.measureText(text).width;
});
var TextTruncate = createReactClass({
  displayName: 'TextTruncate',
  propTypes: {
    containerClassName: PropTypes.string,
    line: PropTypes.number,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    text: PropTypes.string,
    textTruncateChild: PropTypes.node,
    truncateText: PropTypes.string,
    wrapper: PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      line: 1,
      text: '',
      truncateText: '…'
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', this.onResize, false);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false);
  },
  onResize: function onResize() {
    this.update(this.props);
  },
  getRenderText: function getRenderText(ref, nextProps) {
    if (!ref) {
      return;
    }

    this.scope = ref; // nextProps will be undefined for resize events, but will change if search or other props are changed

    var propsToRender;

    if (nextProps) {
      propsToRender = nextProps;
    } else {
      propsToRender = this.props;
    }

    var _propsToRender = propsToRender,
        containerClassName = _propsToRender.containerClassName,
        line = _propsToRender.line,
        prefix = _propsToRender.prefix,
        suffix = _propsToRender.suffix,
        text = _propsToRender.text,
        textTruncateChild = _propsToRender.textTruncateChild,
        truncateText = _propsToRender.truncateText,
        wrapper = _propsToRender.wrapper,
        props = _objectWithoutProperties(_propsToRender, ["containerClassName", "line", "prefix", "suffix", "text", "textTruncateChild", "truncateText", "wrapper"]);

    var scopeWidth = this.scope.getBoundingClientRect().width;
    var style = window.getComputedStyle(this.scope);
    var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' '); // return if display:none

    if (scopeWidth === 0) {
      this.setState({
        renderText: null
      });
      return;
    }

    var child;
    var outputText = text; // return if all of text can be displayed

    if (scopeWidth < measureWidth(text, font)) {
      var currentPos = 1;
      var maxTextLength = text.length;
      var truncatedText = '';
      var splitPos = 0;
      var startPos = 0;
      var displayLine = line;
      var width = 0;
      var lastIsEng = false;
      var lastSpaceIndex = -1;

      while (displayLine !== 0) {
        var ext = '';
        var extraWidthDueToPrefixStyle = 0;

        if (prefix && displayLine === line - 1) {
          ext += " ".concat(prefix); // MAGIC NUMBER: (width at letter-spacing of 0.25rems - width at normal) / number of letters

          extraWidthDueToPrefixStyle = prefix.length * 0.66;
        }

        if (!displayLine) {
          ext += truncateText;

          if (suffix) {
            ext += " ".concat(suffix);
          }
        }

        while (currentPos <= maxTextLength) {
          truncatedText = text.substr(startPos, currentPos);
          width = measureWidth(truncatedText + ext, font) + extraWidthDueToPrefixStyle;

          if (width < scopeWidth) {
            splitPos = text.indexOf(' ', currentPos + 1);

            if (splitPos === -1) {
              currentPos += 1;
              lastIsEng = false;
            } else {
              lastIsEng = true;
              currentPos = splitPos;
            }
          } else {
            var lastWidth = 0;

            do {
              currentPos -= 1;
              truncatedText = text.substr(startPos, currentPos);

              if (truncatedText[truncatedText.length - 1] === ' ') {
                truncatedText = text.substr(startPos, currentPos - 1);
              }

              if (lastIsEng) {
                lastSpaceIndex = truncatedText.lastIndexOf(' ');

                if (lastSpaceIndex > -1) {
                  currentPos = lastSpaceIndex;
                  truncatedText = text.substr(startPos, currentPos);
                }
              }

              width = measureWidth(truncatedText + ext, font) + extraWidthDueToPrefixStyle;

              if (width === lastWidth) {
                currentPos = 0;
                break;
              } else {
                lastWidth = width;
              }
            } while (width >= scopeWidth);

            startPos += currentPos;
            break;
          }
        }

        if (currentPos >= maxTextLength) {
          startPos = maxTextLength;
          break;
        }

        displayLine -= 1; // iterate
      }

      if (startPos !== maxTextLength) {
        outputText = "".concat(text.substr(0, startPos)).concat(truncateText, " ");
        child = textTruncateChild;
      }
    }

    var renderText;

    if (wrapper) {
      renderText = wrapper(outputText, child);
    } else {
      renderText = React.createElement("div", props, outputText, child);
    }

    this.setState({
      renderText: renderText
    });
  },
  update: function update(nextProps) {
    this.getRenderText(this.scope, nextProps);
  },
  render: function render() {
    var containerClassName = this.props.containerClassName; // inline style override

    return React.createElement("div", {
      ref: this.getRenderText,
      className: containerClassName,
      style: {
        overflow: 'hidden'
      }
    }, this.state.renderText);
  }
});
export default TextTruncate;
//# sourceMappingURL=index.js.map