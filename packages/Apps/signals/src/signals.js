import React from "react";
import { fetchData } from "beemo";

export default function Signals() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetchData({ a: "b", foo: "bar" }).then((data) => setData(data));
  });

  return (
    <div>
      This is the Signals app This is using "beemo" data:
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
