import React from "react";

const Watch = ({ steps }) => {
  return (
    <div
      className="container"
      style={{
        border: "2px solid seagreen",
        margin: ".5rem",
        padding: ".5rem",
      }}
    >
      <h2>
        You are walking{" "}
        <sup style={{ fontWeight: "300", fontSize: ".875rem" }}>watchC</sup> :
        {steps} steps
      </h2>
    </div>
  );
};

export default Watch;
