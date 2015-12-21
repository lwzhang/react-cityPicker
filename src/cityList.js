/**
 * Created by cqq on 2015/12/16.
 */
import React from "react";
class CityList extends React.Component {
    handleClick (city) {
        this.props.handleCityClick(city);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.cityShow !== nextProps.cityShow;
    }

    render () {
        let {city, pro, cityShow} = this.props;
        let cityRows = [];
        city && city.forEach((city, i) => {
            cityRows.push(<li onClick={this.handleClick.bind(this, city)} key={i}>{city}</li>);
        });

        let style = {
            display: cityShow ? "block" : "none"
        };

        return (
            <ul className="city-picker" style={style}>
                {cityRows}
            </ul>
        )
    }
}

export default CityList;