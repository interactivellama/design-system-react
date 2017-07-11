define(['exports', 'react', 'prop-types', '../../icon', '../../../utilities'], function (exports, _react, _propTypes, _icon, _utilities) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _icon2 = _interopRequireDefault(_icon);

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

	var displayName = 'Lookup-Menu-Item';
	var propTypes = {
		data: _propTypes2.default.object,
		handleItemFocus: _propTypes2.default.func,
		href: _propTypes2.default.string,
		iconCategory: _propTypes2.default.string,
		id: _propTypes2.default.string,
		index: _propTypes2.default.number,
		isActive: _propTypes2.default.bool,
		isDisabled: _propTypes2.default.bool,
		isSelected: _propTypes2.default.bool,
		listItemLabelRenderer: _propTypes2.default.func,
		onSelect: _propTypes2.default.func,
		searchTerm: _propTypes2.default.string,
		setFocus: _propTypes2.default.func
	};

	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);

		function Item() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Item);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
				return _this.props.onSelect(_this.props.id, _this.props.data);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Item, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (nextProps.isActive !== this.props.isActive && nextProps.isActive === true) {
					this.scrollFocus();
					this.props.setFocus(this.props.id);
				}
			}
		}, {
			key: 'scrollFocus',
			value: function scrollFocus() {
				var height = this.itemRef.offsetHeight;
				if (height && this.props.handleItemFocus) this.props.handleItemFocus(this.props.index, height);
			}
		}, {
			key: 'getIcon',
			value: function getIcon() {
				if (this.props.isSelected) {
					return _react2.default.createElement(
						'span',
						{ className: 'slds-media__figure' },
						_react2.default.createElement(_icon2.default, {
							category: 'utility',
							name: 'check',
							size: 'x-small'
						})
					);
				} else if (this.props.iconName && !this.props.listItemLabelRenderer) {
					return _react2.default.createElement(
						'span',
						{ className: 'slds-media__figure' },
						_react2.default.createElement(_icon2.default, {
							category: this.props.iconCategory,
							inverse: this.props.iconInverse,
							key: this.props.iconName,
							name: this.props.iconName,
							size: 'small'
						})
					);
				}
				return null;
			}
		}, {
			key: 'getCustomLabel',
			value: function getCustomLabel() {
				var ListItemLabel = this.props.listItemLabelRenderer;
				return _react2.default.createElement(ListItemLabel, this.props);
			}
		}, {
			key: 'getLabel',
			value: function getLabel() {
				return this.props.children.data.subTitle ? _react2.default.createElement(
					'span',
					{ className: 'slds-media__body' },
					_react2.default.createElement(
						'span',
						{ className: 'slds-listbox__option-text slds-listbox__option-text_entity' },
						this.props.children.label
					),
					_react2.default.createElement(
						'span',
						{ className: 'slds-listbox__option-meta slds-listbox__option-meta_entity' },
						this.props.children.data.subTitle
					)
				) : _react2.default.createElement(
					'span',
					{ className: 'slds-media__body', style: { alignSelf: 'center' } },
					_react2.default.createElement(
						'span',
						{ className: 'slds-listbox__option-text slds-listbox__option-text_entity' },
						this.props.children.label
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var itemClassName = 'js-slds-lookup__item slds-listbox__item';
				if (this.props.isActive) itemClassName += ' slds-theme--shade';

				return _react2.default.createElement(
					'li',
					{ className: itemClassName, ref: function ref(li) {
							_this2.itemRef = li;
						}, role: 'presentation' },
					_react2.default.createElement(
						'span',
						{ // eslint-disable-line jsx-a11y/no-static-element-interactions
							'aria-disabled': this.props.isDisabled,
							className: 'slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta',
							id: this.props.id,
							onClick: this.handleClick,
							onMouseDown: _utilities.EventUtil.trapImmediate,
							ref: this.props.id,
							role: 'option'
						},
						this.getIcon(),
						this.props.listItemLabelRenderer ? this.getCustomLabel() : this.getLabel()
					)
				);
			}
		}]);

		return Item;
	}(_react2.default.Component);

	Item.displayName = displayName;
	Item.propTypes = propTypes;

	exports.default = Item;
});