import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="github-link">
        <a
          href="https://github.com/eliachow/weather-app-react-9"
          target="_blank"
          rel="noreferrer"
          title="Github Link"
        >
          {" "}
          Open-source code
        </a>
        by E.Chow
      </div>
    </div>
  );
}
