import React from "react";
import "./WeatherData.css";

export default function WeatherData() {
  let weatherInfo = {
    temp: 5,
    description: "Partialy Cloudy",
    humidity: 3,
    windSpeed: 5,
  };
  return (
    <div className="WeatherData">
      <p id="current-weather-degrees">
        <span>
          <strong id="current-degrees">{weatherInfo.temp}</strong>
          <small id="units">
            <a id="c-temp" href="/">
              ᵒC
            </a>
            |
            <a id="f-temp" href="/">
              ᵒF
            </a>
          </small>
        </span>
      </p>
      <p>
        <div id="current-weather-description">{weatherInfo.description}</div>
        <div id="humidity">
          Humidity: <span id="humidity-value">{weatherInfo.humidity}</span>%
        </div>
        <div id="wind">
          Wind Speed: <span id="wind-speed">{weatherInfo.windSpeed}</span> km/h
        </div>
      </p>
    </div>
  );
}
