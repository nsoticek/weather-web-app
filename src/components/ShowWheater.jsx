import React from 'react';
import './ShowWeather.css'
const {fetchWeather} = require('../util/HttpHelper');

export default class ShowWheater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            region: undefined,
            localtime: undefined,
            temperature: undefined,
            wheater_icon: undefined,
            wind_speed: undefined,
        }
    }

    componentDidMount() {
        console.log(this.props.city);
       fetchWeather(this.props.city).then(data => this.setState(
        {
            city: data.request.query,
            region: data.location.region,
            localtime: data.location.localtime,
            temperature: data.current.temperature,
            wheater_icon: data.current.weather_icons,
            wind_speed: data.current.wind_speed,
        }));
    }

    render() {
        return (
            <div className="weather_container">
                <h1>Wetter in {this.state.city}</h1>
                <div className="data_container">
                    <div>
                    <h1>{this.state.temperature}°</h1>
                    </div>
                    <div>
                        <p>{this.state.city}</p>
                        <p>{this.state.region}</p>
                        <p>{this.state.localtime}</p>
                        <p>Windgeschwindigkeit: {this.state.wind_speed}</p>
                    </div>
                </div>
            </div>
        );
    }
}


