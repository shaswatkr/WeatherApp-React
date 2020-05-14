import React, { Component } from "react";
import Sunrise from "../../assets/icons/sun/sunup.png";
import Sunset from "../../assets/icons/sun/sundown.png";

class SunBox extends Component {
    unixToDate = (time) => {
        let date = new Date(time * 1000);

        let meridian = "AM";
        let hours = date.getHours();
        if (hours > 12) {
            hours = hours - 12;
            meridian = "PM";
        }
        let minutes = "0" + date.getMinutes();

        let formattedTime = hours + ":" + minutes.substr(-2) + " " + meridian;

        return formattedTime;
    };

    render() {
        const { sunrise, sunset } = this.props.sys;

        return (
            <div className="details row text-white">
                <div className="col-6 mx-auto">
                    <img
                        src={Sunrise}
                        className="row mx-auto"
                        style={{ height: 100, width: 100 }}
                        alt="SunRise Icon"
                    />

                    <div className="row sun">Sunrise</div>
                    <div className="row sun">{this.unixToDate(sunrise)}</div>
                </div>

                <div className="col-6 mx-auto">
                    <img
                        src={Sunset}
                        className="row mx-auto"
                        style={{ height: 100, width: 100, opacity: 0.65 }}
                        alt="SunRise Icon"
                    />
                    <div className="row sun">Sunset</div>
                    <div className="row sun">{this.unixToDate(sunset)}</div>
                </div>
            </div>
        );
    }
}

export default SunBox;
