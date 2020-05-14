import React, { Component } from "react";

class CityAndDate extends Component {
    datebuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
    };

    render() {
        const { city, country } = this.props;

        return (
            <div className="location-box">
                <div className="location">
                    {city}, {country}
                </div>

                <div className="date">{this.datebuilder(new Date())}</div>
            </div>
        );
    }
}

export default CityAndDate;
