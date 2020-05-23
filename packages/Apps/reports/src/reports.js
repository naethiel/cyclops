import React from "react";
import { Chart } from "common-components";
import { planetsService as service } from "services";

export default function Reports() {
  const [planetData, setPlanetData] = React.useState({});

  React.useEffect(() => {
    service.getPlanet("1").then((planetData) => setPlanetData(planetData));
  }, []);

  return (
    <div>
      this is the Reports app, with a chart:
      <div>Planet name is {planetData.name || ""}</div>
      <Chart />
    </div>
  );
}
