/**
 * Created by cqq on 2015/12/16.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _cities = require("./cities");

var _cities2 = _interopRequireDefault(_cities);

var _provinceList = require("./provinceList");

var _provinceList2 = _interopRequireDefault(_provinceList);

var _navBar = require("./navBar");

var _navBar2 = _interopRequireDefault(_navBar);

var _letterPrompt = require("./letterPrompt");

var _letterPrompt2 = _interopRequireDefault(_letterPrompt);

var _cityList = require("./cityList");

var _cityList2 = _interopRequireDefault(_cityList);

var CityPicker = (function (_React$Component) {
    _inherits(CityPicker, _React$Component);

    function CityPicker() {
        _classCallCheck(this, CityPicker);

        _get(Object.getPrototypeOf(CityPicker.prototype), "constructor", this).call(this);
        this.state = {
            createPro: false,
            createCity: false,
            proShow: false,
            cityShow: false
        };
    }

    _createClass(CityPicker, [{
        key: "handleChange",
        value: function handleChange() {
            this.setState({ createPro: true, proShow: true });
        }
    }, {
        key: "handleProClick",
        value: function handleProClick(city, pro) {
            this.setState({ createCity: true, cityShow: true, city: city, pro: pro });
        }
    }, {
        key: "handleCityClick",
        value: function handleCityClick(city) {
            this.setState({ proShow: false, cityShow: false });
            this.refs.cityInput.value = this.state.pro + "" + city;
        }
    }, {
        key: "letterChange",
        value: function letterChange(letter) {
            this.setState({ letter: letter });
        }
    }, {
        key: "render",
        value: function render() {
            var provinceList = null,
                cityList = null,
                navBar = null,
                letterPrompt = null;
            var _state = this.state;
            var createPro = _state.createPro;
            var createCity = _state.createCity;
            var proShow = _state.proShow;
            var cityShow = _state.cityShow;
            var city = _state.city;
            var pro = _state.pro;
            var letter = _state.letter;

            if (createPro) {
                provinceList = _react2["default"].createElement(_provinceList2["default"], {
                    cities: _cities2["default"],
                    proShow: proShow,
                    handleProClick: this.handleProClick.bind(this) });

                navBar = _react2["default"].createElement(_navBar2["default"], {
                    proShow: proShow,
                    letterChange: this.letterChange.bind(this) });
            }

            if (letter) {
                letterPrompt = _react2["default"].createElement(_letterPrompt2["default"], { letter: letter });
            }

            if (createCity) {
                cityList = _react2["default"].createElement(_cityList2["default"], {
                    city: city,
                    pro: pro,
                    cityShow: cityShow,
                    handleCityClick: this.handleCityClick.bind(this) });
            }

            return _react2["default"].createElement(
                "div",
                { className: "picker-box" },
                _react2["default"].createElement("input", { type: "text", ref: "cityInput", onFocus: this.handleChange.bind(this) }),
                provinceList,
                navBar,
                letterPrompt,
                cityList
            );
        }
    }]);

    return CityPicker;
})(_react2["default"].Component);

exports["default"] = CityPicker;
module.exports = exports["default"];