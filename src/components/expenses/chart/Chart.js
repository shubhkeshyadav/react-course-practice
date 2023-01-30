import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let values = props.dataPoints.map((item) => item.value);
  let totalMaximum = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
