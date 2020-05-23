import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="ekorn-button" style={{ border: "1px solid red" }}>
        {props.children}
      </button>
    </div>
  );
}
