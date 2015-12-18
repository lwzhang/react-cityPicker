/**
 * Created by cqq on 2015/12/16.
 */
import React from "react";

class ProvinceList extends React.Component {
    handleClick (city, pro) {
        this.props.handleProClick(city, pro);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.proShow !== nextProps.proShow;
    }

    render () {
        let cities = this.props.cities;
        let rows = [];
        for (let letterKey in cities) {
            if (cities.hasOwnProperty(letterKey)) {
                let pros = cities[letterKey];
                rows.push(
                    <dl key={letterKey}>
                        <dt data-letter={letterKey}>{letterKey}</dt>
                        {(() => {
                            let proRows = [];
                            for (let pro in pros) {
                                if (pros.hasOwnProperty(pro)) {
                                    proRows.push(<dd data-letter={letterKey} key={pro} onClick={this.handleClick.bind(this, pros[pro], pro)}>{pro}</dd>);
                                }
                            }
                            return proRows;
                        })()}
                    </dl>
                );
            }
        }

        let style = {
            display: this.props.proShow ? "block" : "none"
        };

        return (
            <div className="pro-picker" style={style}>
                {rows}
            </div>
        )
    }
}

export default ProvinceList;