import React from "react";
import "./Card.css";
import Searchbar from "./Searchbar";
import Fiveday from "./Fiveday";
import Location from "./Location";
import WeatherData from "./WeatherData";
import Hourly from "./Hourly";

export default function Card() {
  return (
    <div className="Card">
      <div>
        <script
          src="https://kit.fontawesome.com/be32ba39b9.js"
          crossorigin="anonymous"
        ></script>

        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        ></link>

        <body>
          <div className="card" class="container" id="card-body">
            <Searchbar />

            <div className="row">
              <div className="col-7">
                <Location />
                <div className="row">
                  <div className="col-5">
                    <img
                      id="current-weather-icon"
                      alt="current weather icon"
                      src="http://openweathermap.org/img/wn/10d@2x.png"
                    ></img>
                  </div>
                  <div className="col-6">
                    <WeatherData />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Hourly />
                </div>
              </div>
              <div className="col-5">
                <Fiveday />
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
