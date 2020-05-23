import React from "react";
import Highcharts from "highcharts-react-official";

export default function Chart() {
  const config = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Fruit Consumption",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
  };

  return (
    <div>
      I am a chart using highcharts in common components:
      <Highcharts options={config} />
    </div>
  );
}
