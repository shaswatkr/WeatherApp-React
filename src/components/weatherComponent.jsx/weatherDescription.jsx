import React from "react";

const WeatherDescription = ({ description }) => {
    return <div className="weather text-capitalize"> {description} </div>;
};

export default WeatherDescription;
