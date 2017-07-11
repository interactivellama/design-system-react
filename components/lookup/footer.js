define(['module', 'react', '../icon', '../../utilities', 'prop-types', 'classnames'], function (module, _react, _icon, _utilities, _propTypes, _classnames) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _icon2 = _interopRequireDefault(_icon);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var DefaultFooter = function (_React$Component) {
		_inherits(DefaultFooter, _React$Component);

		function DefaultFooter() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, DefaultFooter);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultFooter.__proto__ || Object.getPrototypeOf(DefaultFooter)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
				if (_this.props.onClose) {
					_this.props.onClose();
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(DefaultFooter, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (nextProps.isActive !== this.props.isActive && nextProps.isActive === true) {
					this.props.setFocus('newItem');
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var className = {
					'slds-media slds-listbox__option slds-listbox__option_entity': true,
					'slds-has-focus': this.props.isActive
				};

				return (
					/* eslint-disable jsx-a11y/no-static-element-interactions */
					_react2.default.createElement(
						'li',
						{
							className: 'js-slds-lookup__item slds-listbox__item',
							onClick: this.handleClick,
							onMouseDown: _utilities.EventUtil.trapImmediate
						},
						_react2.default.createElement(
							'span',
							{ id: 'newItem', href: 'javascript:void(0);', className: (0, _classnames2.default)(className) },
							_react2.default.createElement(
								'span',
								{ className: 'slds-media__figure' },
								_react2.default.createElement(_icon2.default, { name: 'add', category: 'utility', size: 'x-small', className: 'slds-icon-text-default' })
							),
							_react2.default.createElement(
								'span',
								{ className: 'slds-media__body' },
								_react2.default.createElement(
									'span',
									{ className: 'slds-truncate' },
									this.props.newItemLabel ? this.props.newItemLabel : 'Add New Item'
								)
							)
						)
					)
				);
			}
		}]);

		return DefaultFooter;
	}(_react2.default.Component);

	var propTypes = {
		/**
   * Bool to indicate if item has focus.
   */
		isActive: _propTypes2.default.bool,
		/**
   * Callback on set focus for footer item.
   */
		setFocus: _propTypes2.default.func,
		/**
   * Callback on click for footer item.
   */
		onClose: _propTypes2.default.func,
		/**
   * Label for footer item.
   */
		newItemLabel: _propTypes2.default.string
	};

	var displayName = 'LookupDefaultFooter';
	DefaultFooter.displayName = displayName;
	DefaultFooter.propTypes = propTypes;

	module.exports = DefaultFooter;
});