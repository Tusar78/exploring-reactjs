// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card__container">
        <Counter></Counter>
      </div>
    </div>
  );
}

// Counter increased and decreased
function Counter() {
  const [count, setCount] = useState(1);
  const increasedCount = () => {
    const increased = count + 1;
    setCount(increased);
  }
  
  const decreasedCount = () => setCount(count - 1);

  return (
    <div className="product">
      <h2 className="product__name">Counter: {count}</h2>
      <button className="btn" onClick={increasedCount}>Increased</button>
      <button className="btn" onClick={decreasedCount}>Decreased</button>
    </div>
  )
}

export default App;
