import React, { useEffect, useState } from "react";
import Watch from "../Watch/Watch";

const Steps = () => {
  const [steps, setSteps] = useState(0);
  const increasedSteps = (_) => {
    const inc = steps + 1;
    setSteps(inc);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div
      className="container"
      style={{ border: "2px solid seagreen", margin: ".5rem" }}
    >
      <h2>
        You are walking{" "}
        <sup style={{ fontWeight: "300", fontSize: ".875rem" }}>stepC</sup> :{" "}
        {steps} steps{" "}
      </h2>
      <button className="btn" onClick={increasedSteps}>
        Walk
      </button>
      <Watch steps={steps}></Watch>
    </div>
  );
};

export default Steps;
