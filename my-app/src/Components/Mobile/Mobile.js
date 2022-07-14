import React, { useState } from 'react';

const Mobile = () => {
  const [count, setCount] = useState(100);
  const decreasedCount = _ => {
    if (count !== 0) {
      setCount(count - 10)      
    } else {
      setCount(0)
    }
  };
  
  return (
    <div>
      <h2>Mobile Charge: {count}</h2>
      <button onClick={decreasedCount} className='btn'>Down</button>
    </div>
  );
};

export default Mobile;