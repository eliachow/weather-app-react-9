import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="Searchbar">
      <div className="search" class="row">
        <form id="search-form">
          <input
            id="search-box"
            type="text"
            placeholder="   Enter a city"
            class="col-md-auto shadow border-0"
            autofocus="on"
          />
          <input
            id="search-button"
            type="submit"
            value="Search"
            className="col-md-auto shadow border-0"
          />
          <button id="current-button" class="col-md-auto shadow border-0">
            <i className="fas fa-map-pin"></i>
            Location
          </button>
        </form>
      </div>
    </div>
  );
}
