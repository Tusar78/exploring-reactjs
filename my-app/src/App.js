// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card__container">
        <Employee name="Tusar" role="Frontend Developer"></Employee>
        <Employee name="Sharif" role="Businessman"></Employee>
        <Employee name="Rakib" role="IT-Officer"></Employee>
      </div>
    </div>
  );
}

// Similar in look similar in data component
function Employee({name, role}) {
  return (
    <div className="product">
      <h2 className="product__name">I'm {name}</h2>
      <span className="product__price">{role}</span>
    </div>
  );
}

export default App;
