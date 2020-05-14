import React, { Component } from "react";
import Loading from "./components/loading";
import SearchBox from "./components/searchBox";
import CityAndDate from "./components/cityAndDate";
import TempBox from "./components/weatherComponent.jsx/tempBox";
import WeatherCondition from "./components/weatherComponent.jsx/weatherCondition";
import DetailBoxOne from "./components/weatherComponent.jsx/weatherDetailsComponent/detailBoxOne";
import DetailBoxTwo from "./components/weatherComponent.jsx/weatherDetailsComponent/detailBoxTwo";
import NoCityFound from "./components/weatherComponent.jsx/noCityFound";
import SunBox from "./components/weatherComponent.jsx/sunBox";

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

    queryModification = (event) => {
        this.setState({ query: event.target.value });
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
                            <SearchBox
                                query={this.state.query}
                                search={this.search}
                                queryModification={this.queryModification}
                            />

                            <CityAndDate city={name} country={sys.country} />

                            {/* ------------------------- Weather Data ------------------------- */}
                            <div className="weather-box">
                                <TempBox
                                    temp={main.temp}
                                    feelsLike={main.feels_like}
                                />

                                <WeatherCondition condition={weather[0].main} />

                                <div className="row">
                                    <DetailBoxOne
                                        main={main}
                                        visibility={visibility}
                                    />

                                    <DetailBoxTwo
                                        main={main}
                                        sys={sys}
                                        wind={wind}
                                        clouds={clouds.all}
                                    />
                                </div>

                                <SunBox sys={sys} />
                            </div>
                            {/* ------------------------- END Weather Data ------------------------- */}
                        </main>
                    </div>
                );
            } else {
                return <NoCityFound />;
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
