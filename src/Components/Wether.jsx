import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import { Graph } from "./Graph";
import axios from "axios";

export const Wether = () => {
  const apiKey = "feee123fc08f78252e9aa9055bd32cf9"
  const [wetherdata, setWetherData] = useState([{}])
  const [city,setCity] = useState("");
  console.log("city",city);

  // useEffect(()=>{
  //   getData()
  // },[])
  console.log("city Data",wetherdata)

  const getData = (e)=>{
    if(e.key == "Enter")
    {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then((res)=>res.json()).then((data)=>{
        setWetherData(data);
        setCity("");
      })
    }
  }
  return (
    <div className="mainDiv">
        {/* <Search /> */}
        <div className="inputDiv">
        <input className="inputBox" placeholder="  Search..." type="Text" name = "cityName" value={city} 
        onChange ={(e)=>{setCity(e.target.value)}}
        onKeyPress ={getData}
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
        <h3>City Name : {wetherdata.name}</h3>
      </div>
      {/* {typeof wetherdata.main === "undefined" ? (
        <div>
          <p>Welcome to the Wether app Please enter the city name for wether details</p>
        </div>
      ) :
      ( */}
        <>
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
          <h3>Mon</h3>
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
          <h3>Tue</h3>
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
          <h3>Wed</h3>
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
          <h3>Thurs</h3>
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
      </>
      {/* )} */}
    </div>
  );
};
