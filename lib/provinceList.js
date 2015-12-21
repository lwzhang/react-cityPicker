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

var ProvinceList = (function (_React$Component) {
    _inherits(ProvinceList, _React$Component);

    function ProvinceList() {
        _classCallCheck(this, ProvinceList);

        _get(Object.getPrototypeOf(ProvinceList.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(ProvinceList, [{
        key: "handleClick",
        value: function handleClick(city, pro) {
            this.props.handleProClick(city, pro);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.proShow !== nextProps.proShow;
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            var cities = this.props.cities;
            var rows = [];

            var _loop = function (letterKey) {
                if (cities.hasOwnProperty(letterKey)) {
                    (function () {
                        var pros = cities[letterKey];
                        rows.push(_react2["default"].createElement(
                            "dl",
                            { key: letterKey },
                            _react2["default"].createElement(
                                "dt",
                                { "data-letter": letterKey },
                                letterKey
                            ),
                            (function () {
                                var proRows = [];
                                for (var pro in pros) {
                                    if (pros.hasOwnProperty(pro)) {
                                        proRows.push(_react2["default"].createElement(
                                            "dd",
                                            { "data-letter": letterKey, key: pro, onClick: _this.handleClick.bind(_this, pros[pro], pro) },
                                            pro
                                        ));
                                    }
                                }
                                return proRows;
                            })()
                        ));
                    })();
                }
            };

            for (var letterKey in cities) {
                _loop(letterKey);
            }

            var style = {
                display: this.props.proShow ? "block" : "none"
            };

            return _react2["default"].createElement(
                "div",
                { className: "pro-picker", style: style },
                rows
            );
        }
    }]);

    return ProvinceList;
})(_react2["default"].Component);

exports["default"] = ProvinceList;
module.exports = exports["default"];