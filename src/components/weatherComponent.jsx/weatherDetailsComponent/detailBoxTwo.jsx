import React, { Component } from "react";

class DetailBoxTwo extends Component {
    render() {
        const { main, condition } = this.props;

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
                        Humidity:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {main.humidity} %
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-12 mx-auto col-sm-6 text-sm-right">
                        Weather Condition:
                    </div>
                    <div className="col-12 mx-auto col-sm-6 text-sm-left">
                        {condition}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailBoxTwo;
