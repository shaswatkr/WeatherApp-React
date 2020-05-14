import React, { Component } from "react";
import { WiStrongWind, WiCloudy } from "react-icons/wi";
import E from "../../assets/icons/windDirection/East.svg";
import ENE from "../../assets/icons/windDirection/EastNorthEast.svg";
import ESE from "../../assets/icons/windDirection/EastSouthEast.svg";
import N from "../../assets/icons/windDirection/North.svg";
import NE from "../../assets/icons/windDirection/East.svg";
import NNE from "../../assets/icons/windDirection/East.svg";
import NNW from "../../assets/icons/windDirection/East.svg";
import NW from "../../assets/icons/windDirection/East.svg";
import S from "../../assets/icons/windDirection/East.svg";
import SE from "../../assets/icons/windDirection/East.svg";
import SSE from "../../assets/icons/windDirection/East.svg";
import SSW from "../../assets/icons/windDirection/East.svg";
import SW from "../../assets/icons/windDirection/East.svg";
import W from "../../assets/icons/windDirection/East.svg";
import WNW from "../../assets/icons/windDirection/East.svg";
import WSW from "../../assets/icons/windDirection/East.svg";

class WindCloudBox extends Component {
    degToCompass = (deg) => {
        var val = Math.floor(deg / 22.5 + 0.5);
        var dir = [
            N,
            NNE,
            NE,
            ENE,
            E,
            ESE,
            SE,
            SSE,
            S,
            SSW,
            SW,
            WSW,
            W,
            WNW,
            NW,
            NNW,
        ];
        return dir[val % 16];
    };

    render() {
        const { clouds, wind } = this.props;
        const { deg, speed } = wind;

        return (
            <>
                <div className="details col text-white">
                    <div className="row">
                        <WiStrongWind style={{ marginLeft: 20 }} size={40} />
                        <u className="font-italic font-weight-light my-auto">
                            Wind Details:
                        </u>
                    </div>

                    <div className="row">
                        <div className="col-7">
                            <img
                                src={this.degToCompass(deg)}
                                alt={this.degToCompass(deg) + "direction"}
                                style={{ width: 100, height: 100 }}
                            />
                        </div>
                        <div
                            style={{ textAlign: "left" }}
                            className="col-5 my-auto"
                        >
                            {speed} m/s
                        </div>
                    </div>
                </div>

                <div className="details col text-white">
                    <div className="row">
                        <WiCloudy style={{ marginLeft: 20 }} size={50} />
                        <u className="font-italic font-weight-light my-auto">
                            Cloud Cover:
                        </u>
                    </div>
                    <div
                        style={{
                            marginLeft: 20,
                            fontSize: 70,
                            fontWeight: 500,
                        }}
                        className="row"
                    >
                        {clouds} %
                    </div>
                </div>
            </>
        );
    }
}

export default WindCloudBox;
