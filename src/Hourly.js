import React from "react";
import "./Hourly.css";

export default function Hourly() {
  let hourlyWeatherData = {
    time: "1:00 PM",
    temp: 5,
    image: "http://openweathermap.org/img/wn/04d@2x.png",
  };

  return (
    <div className="Hourly">
      <div className="hourly-forecast-all">
        <h3 className="hourly-forecast-header">Hourly Forecast</h3>
        <div className="hourly-icons" id="hourly-forecast"></div>
        <div className="row">
          <div class="col-sm">
            <img
              id="forecast-weather-icon"
              alt="hour + 2"
              src={hourlyWeatherData.image}
            ></img>
            <div>{hourlyWeatherData.time}</div>
            <div>{hourlyWeatherData.temp}°</div>
          </div>
          <div class="col-sm">
            <img
              id="forecast-weather-icon"
              alt="hour + 2"
              src={hourlyWeatherData.image}
            ></img>
            <div>{hourlyWeatherData.time}</div>
            <div>{hourlyWeatherData.temp}°</div>
          </div>
          <div class="col-sm">
            <img
              id="forecast-weather-icon"
              alt="hour + 4"
              src={hourlyWeatherData.image}
            ></img>
            <div>{hourlyWeatherData.time}</div>
            <div>{hourlyWeatherData.temp}°</div>
          </div>
          <div class="col-sm">
            <img
              id="forecast-weather-icon"
              alt="hour + 6"
              src={hourlyWeatherData.image}
            ></img>
            <div>{hourlyWeatherData.time}</div>
            <div>{hourlyWeatherData.temp}°</div>
          </div>
          <div class="col-sm">
            <img
              id="forecast-weather-icon"
              alt="hour + 8"
              src={hourlyWeatherData.image}
            ></img>
            <div>{hourlyWeatherData.time}</div>
            <div>{hourlyWeatherData.temp}°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
