import React from "react";
import "./Location.css";

export default function Location() {
  let searched = {
    location: "Vancouver",
    date: "Monday, March 22, 2021",
    time: "6:00 am",
  };
  return (
    <div className="Location">
      <h1 id="location">{searched.location}</h1>
      <h2 id="current-date">{searched.date}</h2>
      <h2 id="current-time">{searched.time}</h2>
      <br />
    </div>
  );
}
