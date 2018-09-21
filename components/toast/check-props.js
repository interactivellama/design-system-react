"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sunsetProperty = require("../../utilities/warning/sunset-property");

var _sunsetProperty2 = _interopRequireDefault(_sunsetProperty);

var _getComponentDoc = require("../../utilities/get-component-doc");

var _getComponentDoc2 = _interopRequireDefault(_getComponentDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props, jsonDoc) {
    var createDocUrl = (0, _getComponentDoc2.default)(jsonDoc);
    /* eslint-disable max-len */

    (0, _sunsetProperty2.default)(COMPONENT, props.iconCategory, 'iconCategory', "Use `Icon` instead. ".concat(createDocUrl('icon')));
    (0, _sunsetProperty2.default)(COMPONENT, props.iconName, 'iconName', "Use `Icon` instead. ".concat(createDocUrl('icon')));
    (0, _sunsetProperty2.default)(COMPONENT, props.content, 'content', "Use `labels.heading` and `labels.headingLink` instead. ".concat(createDocUrl('labels')));
    (0, _sunsetProperty2.default)(COMPONENT, props.isOpen, 'isOpen', "Use a conditional outside of alert. ".concat(createDocUrl()));
    (0, _sunsetProperty2.default)(COMPONENT, props.isOpen, 'onDismiss', "Use `onRequestClose` instead. ".concat(createDocUrl('onRequestClose')));
    (0, _sunsetProperty2.default)(COMPONENT, props.texture, 'texture', createDocUrl());
    (0, _sunsetProperty2.default)(COMPONENT, props.theme, 'theme', "Use `variant` instead. ".concat(createDocUrl('variant')));
  };
}

exports.default = checkProps;