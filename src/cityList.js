/**
 * Created by cqq on 2015/12/16.
 */
import React from "react";
class CityList extends React.Component {
    handleClick (city, pro) {
        this.props.handleCityClick(city, pro);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.cityShow !== nextProps.cityShow;
    }

    render () {
        let cityRows = [];
        this.props.city && this.props.city.forEach((city, i) => {
            cityRows.push(<li onClick={this.handleClick.bind(this, city, this.props.pro)} key={i}>{city}</li>);
        });

        let style = {
            display: this.props.cityShow ? "block" : "none"
        };

        return (
            <ul className="city-picker" style={style}>
                {cityRows}
            </ul>
        )
    }
}

export default CityList;