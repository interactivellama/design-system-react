'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _popover = require('../popover');

var _popover2 = _interopRequireDefault(_popover);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getClassName = function getClassName(props) {
	return (0, _classnames2.default)(props.className, 'slds-popover', {
		'slds-popover--tooltip': true,
		'slds-nubbin--top': props.align === 'bottom',
		'slds-nubbin--top-left': props.align === 'bottom left',
		'slds-nubbin--top-right': props.align === 'bottom right',
		'slds-nubbin--bottom': props.align === 'top',
		'slds-nubbin--bottom-left': props.align === 'top left',
		'slds-nubbin--bottom-right': props.align === 'top right',
		'slds-nubbin--left': props.align === 'right' || props.align === 'right bottom' || props.align === 'right top',
		'slds-nubbin--right': props.align === 'left' || props.align === 'left bottom' || props.align === 'left top'
	});
}; /*
   Copyright (c) 2015, salesforce.com, inc. All rights reserved.
   Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
   Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
   Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
   Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */

var getHorizontalAlign = function getHorizontalAlign(align) {
	if (align.indexOf('left') > -1) {
		return 'left';
	} else if (align.indexOf('right') > -1) {
		return 'right';
	}
	return 'center';
};

var getVerticalAlign = function getVerticalAlign(align) {
	if (align.indexOf('bottom') > -1) {
		return 'bottom';
	} else if (align.indexOf('top') > -1) {
		return 'top';
	}
	return 'middle';
};

var getMarginRight = function getMarginRight(align) {
	if (getHorizontalAlign(align) === 'right') {
		return '-.75rem';
	}
	return '.75rem';
};

var getMarginLeft = function getMarginLeft(align) {
	if (getHorizontalAlign(align) === 'left') {
		return '-.75rem';
	}
	return '.75rem';
};

var getMarginTop = function getMarginTop(align) {
	if (getVerticalAlign(align) === 'top' && align.indexOf('top') > 0) {
		return '0.25rem';
	}
	return '1.25rem';
};

var getMarginBottom = function getMarginBottom(align) {
	if (getVerticalAlign(align) === 'bottom' && align.indexOf('bottom') > 0) {
		return '0.25rem';
	}
	return '1rem';
};

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
var getTooltip = function getTooltip(id, props, content, target, onClose) {
	return _react2.default.createElement(
		_popover2.default,
		{
			className: '',
			closeOnTabKey: true,
			flippable: false,
			marginBottom: getMarginBottom(props.align),
			marginLeft: getMarginLeft(props.align),
			marginRight: getMarginRight(props.align),
			marginTop: getMarginTop(props.align),
			onClose: onClose,
			targetElement: target,
			align: props.align,
			horizontalAlign: getHorizontalAlign(props.align),
			verticalAlign: getVerticalAlign(props.align)
		},
		_react2.default.createElement(
			'div',
			{ id: id, className: getClassName(props), role: 'tooltip' },
			content
		)
	);
};

module.exports = {
	getClassName: getClassName,
	getHorizontalAlign: getHorizontalAlign,
	getVerticalAlign: getVerticalAlign,
	getTooltip: getTooltip
};