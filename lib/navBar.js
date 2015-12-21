/**
 * Created by cqq on 2015/12/21.
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

var NavBar = (function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        _get(Object.getPrototypeOf(NavBar.prototype), "constructor", this).call(this);
        this.state = { active: false };
    }

    _createClass(NavBar, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.proShow !== nextProps.proShow || this.state.active !== nextState.active;
        }
    }, {
        key: "handleTouchStart",
        value: function handleTouchStart(e) {
            this.setState({ active: true });

            this.props.letterChange(e.target.innerHTML);
        }
    }, {
        key: "handleTouchMove",
        value: function handleTouchMove(e) {
            var _this = this;

            e.preventDefault();

            var navBar = this.refs.navBar,
                touch = e.changedTouches[0],
                pos = { "x": touch.pageX, "y": touch.pageY },
                x = pos.x,
                y = pos.y,
                style = getComputedStyle(navBar.querySelector("a")),
                width = parseFloat(style.width),
                height = parseFloat(style.height);

            Array.from(navBar.querySelectorAll("a")).forEach(function (item, i) {
                var rect = item.getBoundingClientRect(),
                    left = rect.left,
                    top = rect.top;

                if (x > left && x < left + width && y > top && y < top + height) {
                    location.href = item.href;
                    _this.props.letterChange(item.innerHTML);
                }
            });
        }
    }, {
        key: "handleTouchEnd",
        value: function handleTouchEnd() {
            this.props.letterChange(null);
            this.setState({ active: false });
        }
    }, {
        key: "render",
        value: function render() {
            var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var arr = str.split("");
            var rows = [];

            arr.forEach(function (item, i) {
                rows.push(_react2["default"].createElement(
                    "a",
                    { href: "#" + item, key: i },
                    item
                ));
            });

            var style = {
                display: this.props.proShow ? "block" : "none"
            };

            return _react2["default"].createElement(
                "div",
                { ref: "navBar",
                    className: "navbar " + (this.state.active ? "active" : ""),
                    style: style,
                    onTouchStart: this.handleTouchStart.bind(this),
                    onTouchMove: this.handleTouchMove.bind(this),
                    onTouchEnd: this.handleTouchEnd.bind(this)
                },
                rows
            );
        }
    }]);

    return NavBar;
})(_react2["default"].Component);

exports["default"] = NavBar;
module.exports = exports["default"];