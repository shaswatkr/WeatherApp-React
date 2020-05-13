import React, { Component } from "react";
import Loading from "./components/loading";

const api = {
    key: "318a00c0b0c6e988d9074a4f5c463dc9",
    base: "https://api.openweathermap.org/data/2.5/",
};

class App extends Component {
    state = { query: "", weather: {}, error: false };

    componentDidMount() {
        fetch(`${api.base}weather?q=Delhi&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                this.setState({ query: "", weather: result });
            });
    }

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

    search = (event) => {
        if (event.key === "Enter") {
            this.setState({ weather: {} });

            fetch(
                `${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`
            )
                .then((res) => {
                    if (!res.ok) {
                        throw res;
                    }
                    return res.json();
                })
                .then((result) => {
                    console.log(result);
                    this.setState({ error: false, query: "", weather: result });
                })
                .catch((error) => {
                    fetch(
                        `${api.base}weather?q=Delhi&units=metric&APPID=${api.key}`
                    )
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            this.setState({ query: "", weather: result });
                        });
                    this.setState({ error: true });
                });
        }
    };

    render() {
        const {
            clouds,
            main,
            name,
            sys,
            visibility,
            weather,
            wind,
        } = this.state.weather;

        if (typeof main != "undefined") {
            if (this.state.error === false) {
                return (
                    <div className={main.temp > 16 ? "app warm" : "app"}>
                        <main>
                            {/* -------------------- Search Box ----------------------- */}
                            <div className="search-box">
                                <input
                                    type="text"
                                    className="search-bar"
                                    placeholder="Search.."
                                    onChange={(e) =>
                                        this.setState({ query: e.target.value })
                                    }
                                    value={this.state.query}
                                    onKeyPress={this.search}
                                />
                            </div>
                            {/* ---------------------  END Search Box --------------------- */}

                            <div className="location-box">
                                {/* ------------------------ Location  --------------------- */}
                                <div className="location">
                                    {name}, {sys.country}
                                </div>

                                {/* ------------------------- Date ------------------------- */}
                                <div className="date">
                                    {this.datebuilder(new Date())}
                                </div>
                            </div>

                            {/* ------------------------- Weather Data ------------------------- */}
                            <div className="weather-box">
                                <div className="temp">
                                    {Math.round(main.temp)}&#186;C
                                </div>
                                <div className="real-temp">
                                    Feels Like:{" "}
                                    {Math.round(main.feels_like * 10) / 10}{" "}
                                    &#186;C
                                </div>

                                <div className="weather">
                                    {" "}
                                    {weather[0].main}{" "}
                                </div>

                                <div className="row">
                                    {/*-------------------- First details -------------------------- */}
                                    <div className="details col text-white">
                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Temp Max:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {main.temp_max} &#186;C
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Temp Min:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {main.temp_min} &#186;C
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Pressure:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {main.pressure} hPA
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Humidity:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {main.humidity} %
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Visibility:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {Math.round(visibility / 10) /
                                                    100}{" "}
                                                km
                                            </div>
                                        </div>
                                    </div>

                                    {/*-------------------- Second details -------------------------- */}
                                    <div className="details col text-white">
                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Sun Rise:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {this.unixToDate(sys.sunrise)}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Sun Set:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {this.unixToDate(sys.sunset)}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Wind:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {this.degToCompass(wind.deg)}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Wind Speed:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {wind.speed} m/s
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-7 text-right">
                                                Cloud Cover:
                                            </div>
                                            <div className="col text-left my-auto">
                                                {clouds.all} %
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                );
            } else {
                return (
                    <div className="jumbotron">
                        <a className="display-5" href="/">
                            No City Found with the following name,
                            <span className="text-danger"> GO BACK!! </span>
                        </a>
                    </div>
                );
            }
        } else {
            return (
                <h1>
                    <Loading />
                </h1>
            );
        }
    }
}

export default App;
