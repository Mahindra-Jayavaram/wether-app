import React from 'react'
import { SunIcon } from "@heroicons/react/solid";
import { GraphData } from './GraphData';


export const Graph = () => {
  return (
    <div className='graphDiv'>
        <div className='graphData'>
            <p>32°C</p>
            <SunIcon
            style={{
              width: "50px",
              height: "50px",
              marginBottom: "-10px",
              color:"yellow",
              marginTop:"40px",
            }}
          />
        </div>
        <GraphData/>
    </div>
  )
}
