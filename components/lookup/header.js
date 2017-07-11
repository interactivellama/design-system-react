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

	var DefaultHeader = function (_React$Component) {
		_inherits(DefaultHeader, _React$Component);

		function DefaultHeader() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, DefaultHeader);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultHeader.__proto__ || Object.getPrototypeOf(DefaultHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
				if (_this.props.onClose) {
					_this.props.onClose();
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(DefaultHeader, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (nextProps.isActive !== this.props.isActive && nextProps.isActive === true) {
					this.props.setFocus('searchRecords');
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
							className: 'js-slds-lookup__item slds-listbox__item slds-p-vertical_xx-small',
							onMouseDown: _utilities.EventUtil.trapImmediate,
							onClick: this.handleClick
						},
						_react2.default.createElement(
							'span',
							{ id: 'searchRecords', href: 'javascript:void(0);', className: (0, _classnames2.default)(className) },
							_react2.default.createElement(
								'span',
								{ className: 'slds-media__figure' },
								_react2.default.createElement(_icon2.default, { name: 'search', category: 'utility', size: 'x-small', className: 'slds-icon-text-default' })
							),
							_react2.default.createElement(
								'span',
								{ className: 'slds-media__body' },
								_react2.default.createElement(
									'span',
									{ className: 'slds-truncate' },
									this.props.searchTerm
								)
							)
						)
					)
				);
			}
		}]);

		return DefaultHeader;
	}(_react2.default.Component);

	var propTypes = {
		/**
   * Bool to indicate if item has focus.
   */
		isActive: _propTypes2.default.bool,
		/**
   * Callback on set focus for header item.
   */
		setFocus: _propTypes2.default.func,
		/**
   * Callback on click for header item.
   */
		onClose: _propTypes2.default.func,
		/**
   * Label for current search term.
   */
		searchTerm: _propTypes2.default.string
	};

	var displayName = 'LookupDefaultHeader';
	DefaultHeader.displayName = displayName;
	DefaultHeader.propTypes = propTypes;

	module.exports = DefaultHeader;
});