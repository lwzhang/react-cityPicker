/**
 * Created by cqq on 2015/12/16.
 */
import React from "react";

import cities from "./cities";
import ProvinceList from "./provinceList";
import NavBar from "./navBar";
import LetterPrompt from "./letterPrompt";
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

    handleCityClick (city) {
        this.setState({proShow: false, cityShow: false});
        this.refs.cityInput.value = this.state.pro + "" + city;
    }

    letterChange (letter) {
        this.setState({letter: letter});
    }

    render () {
        let provinceList = null, cityList = null, navBar = null, letterPrompt = null;
        let {createPro, createCity, proShow, cityShow, city, pro, letter} = this.state;

        if (createPro) {
            provinceList = <ProvinceList
                cities={cities}
                proShow={proShow}
                handleProClick={this.handleProClick.bind(this)} />;

            navBar = <NavBar
                proShow={proShow}
                letterChange={this.letterChange.bind(this)} />;
        }

        if (letter) {
            letterPrompt = <LetterPrompt letter={letter} />
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
                {navBar}
                {letterPrompt}
                {cityList}
            </div>
        )
    }
}

export default CityPicker;