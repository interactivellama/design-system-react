define(['module', 'react', 'prop-types', 'airbnb-prop-types', 'lodash.escaperegexp', 'lodash.isequal', 'shortid', './check-props', '../utilities/dialog', '../button', '../icon', '../forms/input/private/inner-input', '../icon/input-icon', './private/pill', '../../utilities/event', '../../utilities/key-code', './menu', './menu/default-footer', './menu/default-header', './menu/default-section-divider', 'classnames', '../../utilities/constants'], function (module, _react, _propTypes, _airbnbPropTypes, _lodash, _lodash3, _shortid, _checkProps, _dialog, _button, _icon, _innerInput, _inputIcon, _pill, _event, _keyCode, _menu, _defaultFooter, _defaultHeader, _defaultSectionDivider, _classnames, _constants) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _shortid2 = _interopRequireDefault(_shortid);

	var _checkProps2 = _interopRequireDefault(_checkProps);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _button2 = _interopRequireDefault(_button);

	var _icon2 = _interopRequireDefault(_icon);

	var _innerInput2 = _interopRequireDefault(_innerInput);

	var _inputIcon2 = _interopRequireDefault(_inputIcon);

	var _pill2 = _interopRequireDefault(_pill);

	var _event2 = _interopRequireDefault(_event);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _menu2 = _interopRequireDefault(_menu);

	var _defaultFooter2 = _interopRequireDefault(_defaultFooter);

	var _defaultHeader2 = _interopRequireDefault(_defaultHeader);

	var _defaultSectionDivider2 = _interopRequireDefault(_defaultSectionDivider);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	/**
  * A function that takes a term string and an item and returns a truthy value if the item should be kept.
  */
	var defaultFilter = function defaultFilter(term, item) {
		if (!term) return true;
		return item.data && item.data.type === 'section' || item.label.match(new RegExp((0, _lodash2.default)(term), 'ig'));
	};

	/**
  * Lookup is an advanced inline search form. The lookup can parse through single or multi scoped datasets. The parsed dataset can be filtered by single or multi option selects.
  *
  * This component is wrapped in a [higher order component to listen for clicks outside itself](https://github.com/kentor/react-click-outside) and thus requires use of `ReactDOM`.
  *
  * This component may use a portalMount (a disconnected React subtree mount) within an absolutely positioned DOM node created with [Drop](http://github.hubspot.com/drop/).
  */
	var Lookup = _react2.default.createClass({
		displayName: _constants.LOOKUP,

		propTypes: {
			/**
    * Object of text used for assistive text for screen readers. The object is merged with the default props object on every render.
    * * `deleteSelectedItem`: Informs user of keyboard keys to press in order to delete a selected item.
    * * `label` If present, the label associated with this `input` is overwritten by this text and is visually not shown.
    * * `search`: Describes search icon inside of Lookup input field.
    */
			assistiveText: (0, _airbnbPropTypes.shape)({
				deleteSelectedItem: _propTypes2.default.string,
				label: _propTypes2.default.string,
				search: _propTypes2.default.string
			}),
			/**
    * Class names to be added to the tag classed with `slds-lookup`.
    */
			className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
			/**
    * If true, constrains the menu to the scroll parent. Has no effect if `isInline` is `true`.
    */
			constrainToScrollParent: _propTypes2.default.bool,
			/**
    * ID for aria-describedby (e.g. for an error message or a description)
    */
			describedById: _propTypes2.default.string,
			/**
    * This prop is passed onto the `input`. Prevents dropdown menu from opening. Also applies disabled styling to input.
    */
			disabled: _propTypes2.default.bool,
			/**
    * Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
    */
			emptyMessage: _propTypes2.default.string,
			/**
    * Custom function to filter the Lookup items when typing into input field. The default function is case-insensitive and uses the searchTerm to filter Lookup items on their labels.
    */
			filterWith: _propTypes2.default.func,
			/**
    * If true, the menu is constrained to the window and may be flipped up. Has no effect if `isInline` is `true`.
    */
			flippable: _propTypes2.default.bool,
			/**
    * Custom component for Lookup footer. The default footer allows user to add new item - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default footer, pass in <code>Lookup.DefaultFooter</code>.
    */
			footerRenderer: _propTypes2.default.func,
			/**
    * Custom component for Lookup header. The default header has a search icon and shows the search term - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default header, pass in <code>Lookup.DefaultHeader</code>.
    */
			headerRenderer: _propTypes2.default.func,
			/**
    * Render custom <Icon /> component for Menu Items.
    */
			icon: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
			/**
    * Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view categories.
    */
			iconCategory: _propTypes2.default.string,
			/**
    * If true, icon color is white. If false, icon color is the default text color.
    */
			iconInverse: _propTypes2.default.bool,
			/**
    * Name of icon. Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view icon names.
    */
			iconName: _propTypes2.default.string,
			/**
    * Determines whether the input's icon will display that icon on the left or the right.
    */
			iconPosition: _propTypes2.default.oneOf(['left', 'right']),
			/**
    * The <input> and <ul> need unique ids for accessibility. If none are passed in through props, random ids are autogenerated at run time.
    */
			ids: (0, _airbnbPropTypes.shape)({
				input: _propTypes2.default.string,
				menu: _propTypes2.default.string
			}),
			/**
    * Renders menu within the wrapping trigger as a sibling of the button. By default, you will have an absolutely positioned container at an elevated z-index.
    */
			isInline: _propTypes2.default.bool,
			/**
    * **Text labels for internationalization**
    * This object is merged with the default props object on every render.
    * * `label`: Form element label.
    * * `multipleOptionsSelected`: Text to be used when multiple items are selected. "2 Options Selected" is a good pattern to use.
    */
			labels: (0, _airbnbPropTypes.shape)({
				label: _propTypes2.default.string,
				multipleOptionsSelected: _propTypes2.default.string
			}),
			/**
    * Custom component that overrides the default Lookup Item component.
    */
			listItemLabelRenderer: _propTypes2.default.func,
			/**
    * If true, allows user to select more than one item. Selected items render as pills below <input />.
    */
			multiple: _propTypes2.default.bool,
			/**
    * Triggered when input focus is removed.
    */
			onBlur: _propTypes2.default.func,
			/**
    * Triggered when the contents of the input changes.
    */
			onChange: _propTypes2.default.func,
			/**
    * Triggered when an item is selected from the dropdown menu.
    */
			onSelect: _propTypes2.default.func,
			/**
    * Triggered when an item is an item is removed from the input.
    */
			onUnselect: _propTypes2.default.func,
			/**
    * Item added to the dropdown menu.
    */
			options: _propTypes2.default.array.isRequired,
			/**
    * Text that will appear in an empty input.
    */
			placeholder: _propTypes2.default.string,
			/**
    * If true, adds asterisk next to input label to indicate it is a required field.
    */
			required: _propTypes2.default.bool,
			/**
    * Text passed on to header search input of dropdown menu.
    */
			searchTerm: _propTypes2.default.string,
			/**
    * Custom component that overrides the default section divider
    */
			sectionDividerRenderer: _propTypes2.default.func,
			/**
    * Index of current selected item. To clear the selection, pass in null or -1.
    */
			selectedItem: _propTypes2.default.number,
			/**
    * Array of current selected items' indicies. To clear the selection, pass an empty array.
    */
			selectedItems: _propTypes2.default.array
		},

		getDefaultProps: function getDefaultProps() {
			return {
				assistiveText: {
					deleteSelectedItem: 'Remove selected item',
					search: 'Type to find items'
				},
				constrainToScrollParent: true,
				filterWith: defaultFilter,
				iconPosition: 'right',
				multiple: false,
				searchTerm: '',
				selectedItem: null,
				selectedItems: []
			};
		},
		getInitialState: function getInitialState() {
			// Single select and has a default selected item on load.
			var value = !this.props.multiple && !isNaN(this.props.selectedItem) && this.props.selectedItem >= 0 && !!this.props.options[this.props.selectedItem] ? this.props.options[this.props.selectedItem].label : this.normalizeSearchTerm(this.props.searchTerm);

			return {
				currentFocus: null,
				focusIndex: null,
				items: [],
				isOpen: false,
				listLength: this.props.options.length,
				searchTerm: value,
				selectedIndex: this.props.selectedItem,
				selectedIndices: this.props.selectedItems
			};
		},
		componentDidUpdate: function componentDidUpdate() {
			if (this.hasSingleSelection()) {
				this.clearInput.focus();
			}
		},
		componentWillReceiveProps: function componentWillReceiveProps(newProps) {
			if (newProps.options) {
				this.modifyItems(newProps.options);
			}

			if (newProps.selectedItem !== this.props.selectedItem || !(0, _lodash4.default)(newProps.options, this.props.options)) {
				// Single select and has a default selected item on load.
				var value = !isNaN(newProps.selectedItem) && newProps.selectedItem >= 0 && !!newProps.options[newProps.selectedItem] ? newProps.options[newProps.selectedItem].label : this.normalizeSearchTerm(this.props.searchTerm);

				this.setState({
					selectedIndex: newProps.selectedItem,
					searchTerm: value
				});
			} else if (newProps.selectedItems !== this.props.selectedItems || !(0, _lodash4.default)(newProps.options, this.props.options)) {
				this.setState({ selectedIndices: newProps.selectedItems });
			}
		},
		componentWillMount: function componentWillMount() {
			// `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
			(0, _checkProps2.default)(_constants.LOOKUP, this.props);

			// Generate unique id for Combobox and Listbox (menu)
			this.generatedInputId = this.props.uniqueIds && this.props.uniqueIds.input || _shortid2.default.generate();
			this.generatedMenuId = this.props.uniqueIds && this.props.uniqueIds.menu || _shortid2.default.generate();
		},
		componentDidMount: function componentDidMount() {
			this.modifyItems(this.props.options);
		},
		hasSingleSelection: function hasSingleSelection() {
			var hasSelection = !this.props.multiple && !isNaN(parseInt(this.state.selectedIndex, 10)) && this.state.selectedIndex >= 0;
			return hasSelection;
		},
		hasMultipleSelection: function hasMultipleSelection() {
			var hasSelection = this.props.multiple && this.state.selectedIndices.length > 0;
			return hasSelection;
		},
		modifyItems: function modifyItems(itemsToModify) {
			var items = itemsToModify.map(function (item, index) {
				return {
					id: 'item-' + index,
					label: item.label,
					data: item
				};
			});

			this.setState({ items: items });
		},
		setFirstIndex: function setFirstIndex() {
			var nextFocusIndex = 0;
			var filteredItem = this.state.items[0];

			if (this.menuComponent && this.menuComponent.getFilteredItemForIndex) {
				filteredItem = this.menuComponent.getFilteredItemForIndex(nextFocusIndex);
			}

			if (filteredItem && filteredItem.data.type === 'section') {
				nextFocusIndex++;
			}

			this.setState({ focusIndex: nextFocusIndex });
		},
		increaseIndex: function increaseIndex() {
			var numFocusable = this.getNumFocusableItems();
			var nextFocusIndex = this.state.focusIndex < numFocusable ? this.state.focusIndex + 1 : 0;
			var filteredItem = this.menuComponent.getFilteredItemForIndex(nextFocusIndex);

			if (filteredItem && filteredItem.data.type === 'section') {
				nextFocusIndex++;
			}

			this.setState({ focusIndex: nextFocusIndex });
		},
		decreaseIndex: function decreaseIndex() {
			var numFocusable = this.getNumFocusableItems();
			var prevFocusIndex = this.state.focusIndex > 0 ? this.state.focusIndex - 1 : numFocusable;
			var filteredItem = this.menuComponent.getFilteredItemForIndex(prevFocusIndex);

			if (filteredItem && filteredItem.data.type === 'section') {
				prevFocusIndex = prevFocusIndex === 0 ? numFocusable : prevFocusIndex - 1;
			}

			this.setState({ focusIndex: prevFocusIndex });
		},
		setFocus: function setFocus(id) {
			this.setState({ currentFocus: id });
		},
		getListLength: function getListLength(qty) {
			if (qty !== this.state.listLength) {
				this.setState({ listLength: qty });
			}
		},
		getNumFocusableItems: function getNumFocusableItems() {
			return this.state.listLength - 1;
		},
		getValueByIndex: function getValueByIndex(index) {
			return this.props.options[index];
		},
		selectItem: function selectItem(itemId) {
			if (itemId) {
				var index = itemId.replace('item-', '');
				this.selectItemByIndex(index);
			}
		},
		selectItemByIndex: function selectItemByIndex(index) {
			if (index >= 0 && index < this.state.items.length) {
				if (this.props.multiple) {
					this.handleMultiSelect(index);
				} else {
					this.handleSingleSelect(index);
				}
				var data = this.state.items[index].data;
				if (this.props.onSelect) {
					this.props.onSelect(data);
				}
			}
		},
		handleSingleSelect: function handleSingleSelect(index) {
			this.setState({
				isOpen: false,
				selectedIndex: index,
				searchTerm: this.props.options[index].label
			});
		},
		handleMultiSelect: function handleMultiSelect(index) {
			if (this.state.selectedIndices.indexOf(index) === -1) {
				var currentIndices = this.state.selectedIndices.concat(index);
				this.setState({
					selectedIndices: currentIndices
				});
			} else {
				var deselectIndex = this.state.selectedIndices.indexOf(index);
				this.state.selectedIndices.splice(deselectIndex, 1);
			}
		},
		handleDeleteSelected: function handleDeleteSelected() {
			this.setState({
				selectedIndex: null,
				searchTerm: '',
				isOpen: true
			});

			this.input.focus();

			if (this.props.onUnselect) {
				this.props.onUnselect();
			}
		},
		handleClose: function handleClose() {
			this.setState({
				isOpen: false,
				focusIndex: null,
				currentFocus: null
			});
		},
		handleEscape: function handleEscape(event) {
			if (this.state.isOpen && event) {
				_event2.default.trap(event);
			}
			this.handleClose();
		},
		handleCancel: function handleCancel() {
			this.setState({
				isOpen: false,
				focusIndex: null,
				currentFocus: null
			});
		},
		handleClick: function handleClick() {
			this.setState({ isOpen: true });
		},
		handleBlur: function handleBlur(event) {
			this.handleClose();
			if (this.props.onBlur) {
				var target = event.target || event.currentTarget;
				this.props.onBlur(target.value);
			}
		},
		handleFocus: function handleFocus() {
			if (!this.hasSingleSelection()) {
				this.setState({ isOpen: true });
			}
		},
		handleChange: function handleChange(event) {
			var target = event.target || event.currentTarget;
			this.setState({ searchTerm: this.normalizeSearchTerm(target.value) });
			if (this.props.onChange) {
				this.props.onChange(target.value);
			}
		},
		handleKeyDown: function handleKeyDown(event) {
			if (event.keyCode) {
				// If user hits esc key, close menu
				if (event.keyCode === _keyCode2.default.ESCAPE) {
					this.handleEscape(event);
				} else {
					this.handleClick();
				}

				// If user hits down key, advance aria activedescendant to next item
				if (event.keyCode === _keyCode2.default.DOWN) {
					_event2.default.trapImmediate(event);
					if (this.state.focusIndex === null) {
						this.setFirstIndex();
					} else {
						this.increaseIndex();
					}
				} else if (event.keyCode === _keyCode2.default.UP) {
					// If user hits up key, advance aria activedescendant to previous item
					_event2.default.trapImmediate(event);
					var numFocusable = this.getNumFocusableItems();
					if (this.state.focusIndex === null) {
						this.setState({ focusIndex: numFocusable });
					} else {
						this.decreaseIndex();
					}
				} else if (event.keyCode === _keyCode2.default.ENTER && this.state.focusIndex !== null) {
					// If user hits enter, select current activedescendant item
					_event2.default.trapImmediate(event);
					// If the focus is on the first fixed Action Item in Menu, click it
					if (this.headerComponent && this.state.focusIndex === 0) {
						this.headerComponent.handleClick();
					} else if (this.footerComponent && this.state.focusIndex === this.state.listLength - 1) {
						// If the focus is on the last fixed Action Item in Menu, click it
						this.footerComponent.handleClick();
					} else {
						// If not, then select menu item
						this.selectItem(this.state.currentFocus);
					}
				}
			}
		},
		getHeader: function getHeader() {
			var _this = this;

			var Header = this.props.headerRenderer;
			var headerActive = this.state.focusIndex === 0;

			return _react2.default.createElement(Header, _extends({
				ref: function ref(header) {
					_this.headerComponent = header;
				}
			}, this.props, {
				focusIndex: this.state.focusIndex,
				isActive: headerActive,
				onClose: this.handleClose,
				searchTerm: this.state.searchTerm,
				setFocus: this.setFocus
			}));
		},
		getFooter: function getFooter() {
			var _this2 = this;

			var Footer = this.props.footerRenderer;
			var numFocusable = this.getNumFocusableItems();
			var footerActive = this.state.focusIndex === numFocusable;

			return _react2.default.createElement(Footer, _extends({
				ref: function ref(footer) {
					_this2.footerComponent = footer;
				}
			}, this.props, {
				focusIndex: this.state.focusIndex,
				isActive: footerActive,
				onClose: this.handleClose,
				setFocus: this.setFocus
			}));
		},
		normalizeSearchTerm: function normalizeSearchTerm(string) {
			return (string || '').toString().replace(/^\s+/, '');
		},
		renderMenuContent: function renderMenuContent() {
			var _this3 = this;

			return _react2.default.createElement(_menu2.default, {
				ref: function ref(menu) {
					_this3.menuComponent = menu;
				},
				emptyMessage: this.props.emptyMessage,
				filterWith: this.props.filterWith,
				focusIndex: this.state.focusIndex,
				footer: this.props.footerRenderer ? this.getFooter() : null,
				getListLength: this.getListLength,
				header: this.props.headerRenderer ? this.getHeader() : null,
				iconCategory: this.props.iconCategory,
				iconInverse: this.props.iconInverse,
				iconName: this.props.iconName,
				id: this.generatedMenuId,
				items: this.state.items,
				listItemLabelRenderer: this.props.listItemLabelRenderer,
				listLength: this.state.listLength,
				onSelect: this.selectItem,
				role: 'listbox',
				searchTerm: this.state.searchTerm,
				sectionDividerRenderer: this.props.sectionDividerRenderer,
				selectedIndices: this.state.selectedIndices,
				setFocus: this.setFocus
			});
		},
		renderInlineMenu: function renderInlineMenu() {
			return this.state.isOpen ? this.renderMenuContent() : null;
		},
		renderSeparateMenu: function renderSeparateMenu() {
			return this.state.isOpen ? _react2.default.createElement(
				_dialog2.default,
				{
					className: 'slds-lookup__menu slds-show',
					closeOnTabKey: true,
					contentsClassName: 'slds-lookup__menu slds-show',
					inheritTargetWidth: true,
					onClose: this.handleCancel,
					flippable: this.props.flippable,
					constrainToScrollParent: this.props.constrainToScrollParent,
					targetElement: this.input,
					verticalAlign: 'bottom'
				},
				this.renderMenuContent()
			) : null;
		},
		renderInput: function renderInput() {
			var _this4 = this;

			var noSelectionStyles = { boxShadow: 'none' };
			var multipleLabel = this.props.labels && this.props.labels.multipleOptionsSelected ? this.props.labels.multipleOptionsSelected : this.state.selectedIndices.length + ' Option(s) Selected';
			var inputValue = this.hasMultipleSelection() && this.props.readOnly ? multipleLabel : this.state.searchTerm;
			return _react2.default.createElement(_innerInput2.default, {
				'aria-activedescendant': this.state.currentFocus ? this.state.currentFocus : '',
				'aria-autocomplete': 'list',
				'aria-controls': this.generatedMenuId,
				'aria-describedby': this.props.describedById,
				autoComplete: 'off',
				className: 'slds-input slds-combobox__input',
				disabled: this.props.disabled,
				id: this.generatedInputId,
				onBlur: this.handleBlur,
				onChange: this.handleChange,
				onClick: this.handleClick,
				onFocus: this.handleFocus,
				onKeyDown: this.handleKeyDown,
				iconLeft: this.hasSingleSelection() && this.props.iconName ? this.renderSelectedItemIcon() : null,
				iconRight: this.renderInputIcon(),
				inputRef: function inputRef(component) {
					_this4.input = component;
				},
				placeholder: this.props.placeholder,
				readOnly: this.hasSingleSelection(),
				role: 'textbox',
				style: !this.hasSingleSelection() ? noSelectionStyles : null,
				tabIndex: this.hasSingleSelection() ? -1 : 0,
				type: 'text',
				value: inputValue
			});
		},
		renderLabel: function renderLabel() {
			if (this.props.assistiveText && this.props.assistiveText.label) {
				return _react2.default.createElement(
					'span',
					{ className: 'slds-assistive-text' },
					this.props.assistiveText.label
				);
			}
			var required = this.props.required ? _react2.default.createElement(
				'abbr',
				{ className: 'slds-required', title: 'required' },
				'*'
			) : null;
			// eslint-disable-next-line react/prop-types
			var label = this.props.labels && this.props.labels.label ? this.props.labels.label : this.props.label;
			return _react2.default.createElement(
				'label',
				{
					className: 'slds-form-element__label slds-size_12-of-12',
					htmlFor: this.generatedInputId
				},
				required,
				label
			);
		},
		renderPills: function renderPills() {
			var _this5 = this;

			var selectedPills = this.state.selectedIndices.map(function (selectedPill) {
				var pillLabel = _this5.getValueByIndex(selectedPill).label;
				return _react2.default.createElement(
					'li',
					{
						className: 'slds-listbox__item',
						key: 'pill-' + selectedPill,
						role: 'presentation'
					},
					_react2.default.createElement(_pill2.default, {
						eventData: {
							item: _this5.props.options[selectedPill],
							index: selectedPill
						},
						iconName: _this5.props.iconName,
						iconCategory: _this5.props.iconCategory,
						events: {
							onRequestRemove: function onRequestRemove(event, data) {
								var newData = _this5.state.selectedIndices;
								newData.splice(_this5.state.selectedIndices.indexOf(data.index), 1);
								_this5.setState({ selectedIndices: newData });
							}
						},
						labels: {
							label: pillLabel
						},
						variant: 'option'
					})
				);
			});
			return _react2.default.createElement(
				'div',
				{
					id: 'listbox-selections-unique-id',
					orientation: 'horizontal',
					role: 'listbox'
				},
				_react2.default.createElement(
					'ul',
					{
						className: 'slds-listbox slds-listbox_inline slds-p-top_xxx-small',
						role: 'group',
						'aria-label': 'Selected Options:'
					},
					selectedPills
				)
			);
		},
		getClassName: function getClassName() {
			return (0, _classnames2.default)(this.props.className, 'slds-form-element slds-lookup', {
				'slds-has-selection': this.hasSingleSelection(),
				'slds-is-open': this.state.isOpen
			});
		},
		renderSelectedItemIcon: function renderSelectedItemIcon() {
			return this.props.iconName ? _react2.default.createElement(_icon2.default, {
				category: this.props.iconCategory,
				containerClassName: 'slds-combobox__input-entity-icon',
				inverse: this.props.iconInverse,
				name: this.props.iconName
			}) : null;
		},
		renderInputIcon: function renderInputIcon() {
			var _this6 = this;

			return this.hasSingleSelection() ? _react2.default.createElement(_button2.default, {
				assistiveText: this.props.assistiveText && this.props.assistiveText.deleteSelectedItem,
				buttonRef: function buttonRef(button) {
					_this6.clearInput = button;
				},
				className: 'slds-input__icon slds-input__icon_right',
				iconName: 'close',
				onClick: this.handleDeleteSelected,
				variant: 'icon'
			}) : _react2.default.createElement(_inputIcon2.default, {
				assistiveText: this.props.assistiveText && this.props.assistiveText.search,
				category: 'utility',
				name: 'search'
			});
		},
		render: function render() {
			var isInline = void 0;
			/* eslint-disable react/prop-types */
			if (this.props.isInline) {
				isInline = true;
			} else if (this.props.modal !== undefined) {
				isInline = !this.props.modal;
			}
			/* eslint-enable react/prop-types */

			var comboboxContainerClassName = {
				'slds-combobox_container': true,
				'slds-has-inline-listbox': !this.props.multiple,
				'slds-has-input-focus': this.state.isOpen
			};

			var comboboxClassName = {
				'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click': true,
				'slds-combobox-lookup': !this.state.isOpen,
				'slds-is-open': this.state.isOpen
			};

			var inputContainerClassName = {
				'slds-combobox__form-element slds-input-has-icon': true,
				'slds-input-has-icon_right': !this.props.iconName && this.hasSingleSelection() || !this.hasSingleSelection(),
				'slds-input-has-icon_left-right': this.props.iconName && this.hasSingleSelection()
			};

			return _react2.default.createElement(
				'div',
				{ className: 'slds-form-element' },
				this.renderLabel(),
				_react2.default.createElement(
					'div',
					{ className: 'slds-form-element__control' },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)(comboboxContainerClassName) },
						_react2.default.createElement(
							'div',
							{
								className: (0, _classnames2.default)(comboboxClassName),
								'aria-expanded': this.state.isOpen,
								'aria-haspopup': 'listbox' // eslint-disable-line jsx-a11y/aria-proptypes
								, role: 'combobox'
							},
							_react2.default.createElement(
								'div',
								{ className: (0, _classnames2.default)(inputContainerClassName) },
								this.renderInput()
							),
							isInline ? this.renderInlineMenu() : this.renderSeparateMenu()
						)
					),
					this.hasMultipleSelection() ? this.renderPills() : null
				)
			);
		}
	});

	module.exports = Lookup;
	module.exports.DefaultHeader = _defaultHeader2.default;
	module.exports.DefaultSectionDivider = _defaultSectionDivider2.default;
	module.exports.DefaultFooter = _defaultFooter2.default;
});