import React from "react";

const DetailBoxOne = ({ main, visibility }) => {
    const { temp_max, pressure, humidity } = main;

    return (
        <div className="details col text-white">
            <div className="row">
                <div className="col-12 mx-auto col-sm-6 text-sm-right">
                    Temp Max:
                </div>
                <div className="col-12 mx-auto col-sm-6 text-sm-left">
                    {temp_max} &#186;C
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-12 mx-auto col-sm-6 text-sm-right">
                    Pressure:
                </div>
                <div className="col-12 mx-auto col-sm-6 text-sm-left">
                    {pressure} hPA
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-12 mx-auto col-sm-6 text-sm-right">
                    Humidity:
                </div>
                <div className="col-12 mx-auto col-sm-6 text-sm-left">
                    {humidity} %
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-12 mx-auto col-sm-6 text-sm-right">
                    Visibility:
                </div>
                <div className="col-12 mx-auto col-sm-6 text-sm-left">
                    {Math.round(visibility / 10) / 100} km
                </div>
            </div>
        </div>
    );
};

export default DetailBoxOne;
