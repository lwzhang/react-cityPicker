/**
 * Created by cqq on 2015/12/21.
 */
import React from "react";

class NavBar extends React.Component {
    constructor () {
        super();
        this.state = {active: false};
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.proShow !== nextProps.proShow || this.state.active !== nextState.active;
    }

    handleTouchStart (e) {
        this.setState({active: true});

        this.props.letterChange(e.target.innerHTML);
    }

    handleTouchMove (e) {
        e.preventDefault();

        let navBar = this.refs.navBar,
            touch = e.changedTouches[0],
            pos = {"x": touch.pageX, "y": touch.pageY},
            x = pos.x, y = pos.y,
            style = getComputedStyle(navBar.querySelector("a")),
            width = parseFloat(style.width),
            height = parseFloat(style.height);

        Array.from(navBar.querySelectorAll("a")).forEach((item, i) => {
            let rect = item.getBoundingClientRect(),
                left = rect.left, top = rect.top;

            if (x > left && x < (left + width) && y > top && y < (top + height)) {
                location.href = item.href;
                this.props.letterChange(item.innerHTML);
            }
        });
    }

    handleTouchEnd () {
        this.props.letterChange(null);
        this.setState({active: false});
    }

    render () {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let arr = str.split("");
        let rows = [];

        arr.forEach((item, i) => {
            rows.push(<a href={"#" + item} key={i}>{item}</a>);
        });

        let style = {
            display: this.props.proShow ? "block" : "none"
        };

        return (
            <div ref="navBar"
                className={"navbar " + (this.state.active ? "active" : "")}
                style={style}
                onTouchStart={this.handleTouchStart.bind(this)}
                onTouchMove={this.handleTouchMove.bind(this)}
                onTouchEnd={this.handleTouchEnd.bind(this)}
                >
                {rows}
            </div>
        );
    }
}

export default NavBar;