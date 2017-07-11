define(['exports', 'react', 'prop-types', 'lodash.assign', 'classnames', 'airbnb-prop-types', '../../../../components/button', '../../../../components/icon', '../../../utilities/key-code', '../../../utilities/key-callbacks'], function (exports, _react, _propTypes, _lodash, _classnames, _airbnbPropTypes, _button, _icon, _keyCode, _keyCallbacks) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _button2 = _interopRequireDefault(_button);

	var _icon2 = _interopRequireDefault(_icon);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _keyCallbacks2 = _interopRequireDefault(_keyCallbacks);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	var propTypes = {
		/**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `pressDeleteOrBackspace`: Informs user of keyboard keys to press in order to remove a pill
   */
		assistiveText: (0, _airbnbPropTypes.shape)({
			pressDeleteOrBackspace: _propTypes2.default.string
		}),
		/*
   * Pills are often used for selection of a type of entity such as days in a daypicker or an option from a Picklist or Lookup. This prop allows you to pass in data that will be passed back to the event handler.
   */
		eventData: _propTypes2.default.object,
		/*
   * Callback called when pill is clicked, delete is pressed, or backspace is pressed.
   */
		events: (0, _airbnbPropTypes.shape)({
			onRequestRemove: _propTypes2.default.func
		}),
		/*
   * Pill Label
   */
		labels: (0, _airbnbPropTypes.shape)({
			label: _propTypes2.default.string,
			remove: _propTypes2.default.string,
			title: _propTypes2.default.string
		}),
		/*
   * Pill Title
   */
		title: _propTypes2.default.string,
		variants: _propTypes2.default.oneOf(['base', 'option'])
	};

	var defaultProps = {
		assistiveText: (0, _airbnbPropTypes.shape)({
			pressDeleteOrBackspace: 'Press delete or backspace to remove'
		}),
		labels: {
			remove: 'Remove'
		},
		events: {}
	};

	var handleKeyDown = function handleKeyDown(event, _ref) {
		var _callbacks;

		var events = _ref.events,
		    data = _ref.data;

		// Helper function that takes an object literal of callbacks that are triggered with a key event
		(0, _keyCallbacks2.default)(event, {
			callbacks: (_callbacks = {}, _defineProperty(_callbacks, _keyCode2.default.DELETE, { callback: events.onRequestRemove, data: data }), _defineProperty(_callbacks, _keyCode2.default.BACKSPACE, { callback: events.onRequestRemove, data: data }), _callbacks)
		});
	};

	var Pill = function Pill(props) {
		var assistiveText = (0, _lodash2.default)({}, defaultProps.assistiveText, props.assistiveText);
		var labels = (0, _lodash2.default)({}, defaultProps.labels, props.labels);

		var isOption = props.variant === 'option';
		var pillClassName = (0, _classnames2.default)(props.className, 'slds-pill', {
			'slds-pill_link': !isOption
		});

		var renderIcon = props.iconName ? _react2.default.createElement(
			'span',
			{ className: 'slds-avatar slds-avatar_x-small slds-pill__icon_container' },
			_react2.default.createElement(_icon2.default, {
				category: props.iconCategory,
				className: 'slds-pill__icon',
				inverse: props.iconInverse,
				name: props.iconName
			})
		) : null;

		return (
			// eslint-disable-next-line jsx-a11y/no-static-element-interactions
			_react2.default.createElement(
				'span',
				{
					className: pillClassName,
					role: isOption ? 'option' : null,
					tabIndex: isOption ? 0 : null,
					'aria-selected': isOption ? 'true' : null,
					onKeyDown: function onKeyDown(event) {
						handleKeyDown(event, {
							events: props.events,
							data: props.eventData
						});
					}
				},
				isOption ? _react2.default.createElement(
					'span',
					null,
					renderIcon,
					_react2.default.createElement(
						'span',
						{ className: 'slds-pill__label', title: labels.title },
						labels.label
					)
				) :
				// eslint-disable-next-line no-script-url
				_react2.default.createElement(
					'a',
					{ href: 'javascript:void(0);', className: 'slds-pill__action', style: { width: '100%' }, title: labels.title },
					renderIcon,
					_react2.default.createElement(
						'span',
						{ className: 'slds-pill__label' },
						labels.label
					)
				),
				props.events.onRequestRemove ? _react2.default.createElement(_button2.default, {
					assistiveText: assistiveText.pressDeleteOrBackspace,
					className: 'slds-pill__remove',
					iconName: 'close',
					onClick: function onClick(event) {
						props.events.onRequestRemove(event, {
							events: props.events,
							eventData: props.eventData
						});
					},
					tabIndex: '-1',
					variant: 'icon'
				}) : null
			)
		);
	};

	Pill.displayName = 'Pill';
	Pill.propTypes = propTypes;
	Pill.defaultProps = defaultProps;

	exports.default = Pill;
});