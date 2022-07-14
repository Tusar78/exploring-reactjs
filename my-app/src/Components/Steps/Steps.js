import React, { useEffect, useState } from 'react';

const Steps = () => {
  const [steps, setSteps] = useState(0);
  const increasedSteps = _ => {
    const inc = steps + 1;
    setSteps(inc);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps])

  return (
    <div className='container'>
      <h2>You are walking : {steps} steps </h2>
      <button onClick={increasedSteps}>Walk</button>
    </div>
  );
};

export default Steps;