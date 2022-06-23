import React from "react";
import { Search } from "./Search";
import { SunIcon } from "@heroicons/react/solid";
import { Graph } from "./Graph";

export const Wether = () => {
  return (
    <div className="mainDiv">
        <Search />
      <div className="WetherDisplay">
        <div>
          <h3>Sun</h3>
          <p>32°C 19°C</p>
          <SunIcon
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-10px",
              color:"yellow"
            }}
          />
          <p>Sunny</p>
        </div>
        <div>
          <h3>Sun</h3>
          <p>32°C 19°C</p>
          <SunIcon
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-10px",
              color:"yellow"
            }}
          />
          <p>Sunny</p>
        </div>
        <div>
          <h3>Sun</h3>
          <p>32°C 19°C</p>
          <SunIcon
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-10px",
              color:"yellow"
            }}
          />
          <p>Sunny</p>
        </div>
        <div>
          <h3>Sun</h3>
          <p>32°C 19°C</p>
          <SunIcon
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-10px",
              color:"yellow"
            }}
          />
          <p>Sunny</p>
        </div>
        <div>
          <h3>Sun</h3>
          <p>32°C 19°C</p>
          <SunIcon
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-10px",
              color:"yellow"
            }}
          />
          <p>Sunny</p>
        </div>
      </div>
      <Graph/>
    </div>
  );
};
