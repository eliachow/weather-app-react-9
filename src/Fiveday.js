import React from "react";
import "./Fiveday.css";

export default function Fiveday() {
  let fiveDayWeatherData = {
    day: "Sunday",
    highDegree: 8,
    lowDegree: 2,
    image: "http://openweathermap.org/img/wn/04d@2x.png",
  };
  return (
    <div className="Fiveday">
      <div className="col-10" id="forecast">
        <h3>5 Day Forecast</h3>
        <div id="five-day-forecast-data">
          <ul>
            <li class="card" id="forecast-card">
              <span class="weather-forecast-temperature-max" id="forecast-info">
                {fiveDayWeatherData.day}
                <img
                  id="forecast-weather-icon"
                  alt="Day 1"
                  src={fiveDayWeatherData.image}
                ></img>
                {fiveDayWeatherData.highDegree}° /{" "}
                {fiveDayWeatherData.lowDegree}°
              </span>
            </li>
          </ul>
          <ul>
            <li class="card" id="forecast-card">
              <span class="weather-forecast-temperature-max" id="forecast-info">
                {fiveDayWeatherData.day}
                <img
                  id="forecast-weather-icon"
                  alt="Day 1"
                  src={fiveDayWeatherData.image}
                ></img>
                {fiveDayWeatherData.highDegree}° /{" "}
                {fiveDayWeatherData.lowDegree}°
              </span>
            </li>
          </ul>
          <ul>
            <li class="card" id="forecast-card">
              <span class="weather-forecast-temperature-max" id="forecast-info">
                {fiveDayWeatherData.day}
                <img
                  id="forecast-weather-icon"
                  alt="Day 1"
                  src={fiveDayWeatherData.image}
                ></img>
                {fiveDayWeatherData.highDegree}° /{" "}
                {fiveDayWeatherData.lowDegree}°
              </span>
            </li>
          </ul>
          <ul>
            <li class="card" id="forecast-card">
              <span class="weather-forecast-temperature-max" id="forecast-info">
                {fiveDayWeatherData.day}
                <img
                  id="forecast-weather-icon"
                  alt="Day 1"
                  src={fiveDayWeatherData.image}
                ></img>
                {fiveDayWeatherData.highDegree}° /{" "}
                {fiveDayWeatherData.lowDegree}°
              </span>
            </li>
          </ul>
          <ul>
            <li class="card" id="forecast-card">
              <span class="weather-forecast-temperature-max" id="forecast-info">
                {fiveDayWeatherData.day}
                <img alt="Day 1" src={fiveDayWeatherData.image}></img>
                {fiveDayWeatherData.highDegree}° /{" "}
                {fiveDayWeatherData.lowDegree}°
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
