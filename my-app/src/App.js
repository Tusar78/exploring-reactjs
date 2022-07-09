// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card__container">
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
      </div>
    </div>
  );
}

// Similar in look similar in data component
function Employee() {
  return (
    <div className="product">
      <h2 className="product__name">I'm Tusar</h2>
      <span className="product__price">Frontend Developer!</span>
    </div>
  );
}

export default App;
