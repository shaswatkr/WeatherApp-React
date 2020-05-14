import React from "react";

const TempBox = ({ temp, feelsLike }) => {
    return (
        <>
            <div className="temp">{Math.round(temp)}&#186;C</div>

            <div className="real-temp">
                Feels Like: {Math.round(feelsLike * 10) / 10} &#186;C
            </div>
        </>
    );
};

export default TempBox;
