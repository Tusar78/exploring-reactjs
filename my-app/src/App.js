// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const employeeList = [
    {name: 'Tusar', role: 'Frontend Developer'},
    {name: 'Rakib', role: 'IT-Officer'},
    {name: 'Sharif', role: 'Businessman'},
    {name: 'Mastura', role: 'Computer Operator'},
    {name: 'Rochita', role: 'Web Designer'}
  ]
  return (
    <div className="container">
      <div className="card__container">
        {
          employeeList.map(employee => <Employee key={employee.name} name={employee.name} role={employee.role}></Employee>)
        }
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
