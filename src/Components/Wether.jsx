import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import { Graph } from "./Graph";
import axios from "axios";

export const Wether = () => {
  const [data, setData] = useState([])
  const [city,setCity] = useState("");
  console.log("city",city);

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=feee123fc08f78252e9aa9055bd32cf9&units=metric`).then((res)=>res.json()).then((res)=>{
      setData(res.data);
    })
  },[])
  console.log("city Data",data)

  const getData = ()=>{

  }
  return (
    <div className="mainDiv">
        {/* <Search /> */}
        <div className="inputDiv">
        <input className="inputBox" placeholder="  Search..." type="Text" name = "cityName" value={city} 
        onChange ={(e)=>{setCity(e.target.value)}}
        />
        <SearchIcon
          id="serchIcon"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "-10px",
            marginLeft: "-25px",
          }}
        />

        
      </div>
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
