/**
 * Created by cqq on 2015/12/16.
 */
import "../css/style.css";

import React from "react";

import cities from "./cities";
import ProvinceList from "./provinceList";
import CityList from "./cityList";

class CityPicker extends React.Component {
    constructor () {
        super();
        this.state = {
            createPro: false,
            createCity: false,
            proShow: false,
            cityShow: false
        };
    }

    handleChange () {
        this.setState({createPro: true, proShow: true});
    }

    handleProClick (city, pro) {
        this.setState({createCity: true, cityShow: true, city: city, pro: pro});
    }

    handleCityClick (city, pro) {
        this.setState({proShow: false, cityShow: false});
        this.refs.cityInput.value = pro + "" + city;
    }

    render () {
        let provinceList = null, cityList = null;
        let {createPro, createCity, proShow, cityShow, city, pro} = this.state;

        if (createPro) {
            provinceList = <ProvinceList
                cities={cities}
                proShow={proShow}
                handleProClick={this.handleProClick.bind(this)} />;
        }

        if (createCity) {
            cityList = <CityList
                city={city}
                pro={pro}
                cityShow={cityShow}
                handleCityClick={this.handleCityClick.bind(this)} />;
        }

        return (
            <div className="picker-box">
                <input type="text" ref="cityInput" onFocus={this.handleChange.bind(this)} />

                {provinceList}
                {cityList}
            </div>
        )
    }
}

ReactDOM.render(
    <CityPicker />,
    document.querySelector("#picker-box")
);