import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
    {
      name: "9 AM",
      degrees: 32,
      amt: 2400,
      day:"sun"
    },
    {
      name: "10 Am",
      degrees: 29,
      amt: 2210,
      day:"sun"
    },
    {
      name: "11 AM",
      degrees: 40,
      amt: 2290,
      day:"sun"
    },
    {
      name: "12 PM",
      degrees: 20,
      amt: 2000,
      day:"sun"
    },
    {
      name: "1 PM",
      degrees: 24,
      amt: 2181,
      day:"sun"
    },
    {
      name: "2 PM",
      degrees: 26,
      amt: 2500,
      day:"sun"
    }
];

export function GraphData() {

  const key = "faf27d359d96ec53800e51b07ef0f624";

  return (
    <div>
       <LineChart
      width={250}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="degrees"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Time" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
}
