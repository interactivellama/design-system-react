define(['exports', 'react', 'prop-types', './check-props', './svg', '../../../icons/utility', '../../../icons/action', '../../../icons/custom', '../../../icons/doctype', '../../../icons/standard'], function (exports, _react, _propTypes, _checkProps, _svg, _utility, _action, _custom, _doctype, _standard) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _checkProps2 = _interopRequireDefault(_checkProps);

	var _svg2 = _interopRequireDefault(_svg);

	var _utility2 = _interopRequireDefault(_utility);

	var _action2 = _interopRequireDefault(_action);

	var _custom2 = _interopRequireDefault(_custom);

	var _doctype2 = _interopRequireDefault(_doctype);

	var _standard2 = _interopRequireDefault(_standard);

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

	function _objectWithoutProperties(obj, keys) {
		var target = {};

		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}

		return target;
	}

	/*
  * If inline icons are present and icon bundle imports are not just an empty object, then inline icons will be used instead of external icons that require HTTP access.
  */
	var UtilityIcon = function UtilityIcon(_ref, context) {
		var _ref$name = _ref.name,
		    name = _ref$name === undefined ? '' : _ref$name,
		    assistiveText = _ref.assistiveText,
		    category = _ref.category,
		    icon = _ref.icon,
		    path = _ref.path,
		    rest = _objectWithoutProperties(_ref, ['name', 'assistiveText', 'category', 'icon', 'path']);

		(0, _checkProps2.default)('UtilityIcon', { name: name, category: category, path: path, context: context });

		var inlineIcons = {
			action: _action2.default,
			custom: _custom2.default,
			doctype: _doctype2.default,
			standard: _standard2.default,
			utility: _utility2.default
		};
		var inlineData = void 0;

		if (icon) {
			inlineData = icon;
		} else if (Object.keys(inlineIcons[category]).length) {
			inlineData = inlineIcons[category][name.toLowerCase()];
			inlineData.viewBox = inlineIcons[category].viewBox;
		}

		// Use inline icons if the icon object is present, otherwise use external URLs for icons.
		var modifiedPath = path || context.iconPath && context.iconPath + '/' + category + '-sprite/svg/symbols.svg#' + name;

		return inlineData ? _react2.default.createElement(_svg2.default, _extends({ data: inlineData, name: name }, rest)) : _react2.default.createElement(
			'svg',
			rest,
			_react2.default.createElement('use', { xlinkHref: modifiedPath })
		);
	};

	UtilityIcon.displayName = 'UtilityIcon';

	UtilityIcon.propTypes = {
		assistiveText: _propTypes2.default.string,
		category: _propTypes2.default.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
		/**
    * An SVG object to use instead of name / category, look in `design-system-react/icons` for examples
    */
		icon: _propTypes2.default.object,
		/**
    * Name of the icon. Visit <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to reference icon names.
    */
		name: _propTypes2.default.string,
		/**
    * Path to the icon. This will override any global icon settings.
    */
		path: _propTypes2.default.string
	};

	UtilityIcon.defaultProps = {
		category: 'utility'
	};

	UtilityIcon.contextTypes = {
		iconPath: _propTypes2.default.string
	};

	exports.default = UtilityIcon;
});