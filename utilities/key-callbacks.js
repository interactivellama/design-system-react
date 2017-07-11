define(['exports', './event'], function (exports, _event) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/*
  * Helper function that has callbacks passed into it with the key being the keycode of the event
  */
	var mapKeyEventCallbacks = function mapKeyEventCallbacks(event, _ref) {
		var _ref$callbacks = _ref.callbacks,
		    callbacks = _ref$callbacks === undefined ? {} : _ref$callbacks,
		    _ref$shiftCallbacks = _ref.shiftCallbacks,
		    shiftCallbacks = _ref$shiftCallbacks === undefined ? {} : _ref$shiftCallbacks;

		if (event.shiftKey && event.keyCode && shiftCallbacks[event.keyCode]) {
			_event2.default.trapEvent(event);
			shiftCallbacks[event.keyCode].callback(event, shiftCallbacks[event.keyCode].data);
		} else if (event.keyCode && callbacks[event.keyCode]) {
			_event2.default.trapEvent(event);
			callbacks[event.keyCode].callback(event, callbacks[event.keyCode].data);
		}
	}; /* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
	/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
	exports.default = mapKeyEventCallbacks;
});