import React, { Component } from "react";

class DetailBoxTwo extends Component {
    degToCompass = (deg) => {
        var val = Math.floor(deg / 22.5 + 0.5);
        var dir = [
            "N",
            "NNE",
            "NE",
            "ENE",
            "E",
            "ESE",
            "SE",
            "SSE",
            "S",
            "SSW",
            "SW",
            "WSW",
            "W",
            "WNW",
            "NW",
            "NNW",
        ];
        return dir[val % 16];
    };

    render() {
        const { main, wind, clouds } = this.props;
        const { deg, speed } = wind;

        return (
            <div className="details col text-white">
                <div className="row">
                    <div className="col-12 mx-auto col-sm-6 text-sm-right">
                        Temp Min:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {main.temp_min} &#186;C
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-12 mx-auto col-sm-6 text-sm-right">
                        Wind:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {this.degToCompass(deg)}
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-12 mx-auto col-sm-6 text-sm-right">
                        Wind Speed:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {speed} m/s
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-12 mx-auto col-sm-6 text-sm-right">
                        Cloud Cover:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {clouds} %
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailBoxTwo;
