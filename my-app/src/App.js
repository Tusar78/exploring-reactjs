// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <div className="card__container">
        <Counter></Counter>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const increasedCount = () => {
    const increased = count + 1;
    setCount(increased);
  }

  const decreasedCount = () => setCount(count - 1);

  return (
    <div className="product">
      <h2>Count: {count}</h2>
      <button className="btn" onClick={increasedCount}>Increased</button>
      <button className="btn" onClick={decreasedCount}>Decreased</button>
    </div>
  )
}

export default App;
