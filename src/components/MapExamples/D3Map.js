import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./GeoChart";
import data from "./GeoChart.Aus.geo.json";
import "../../App.css";

function D3() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <GeoChart data={data} property={property} />
    </React.Fragment>
  );
}

export default D3;
