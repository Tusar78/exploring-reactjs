// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Data in or not
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <Header></Header>
      <section className="container">
        <div className="card__container">
          {countries.map((country) => {
            return (
              <Countries
                key={country.name.common}
                name={country.name.common}
                population={country.population}
              ></Countries>
            );
          })}
        </div>
      </section>
    </>
  );
}

// Header
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav__logo">Rest Countries</h1>

        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">Countries</li>
          <li className="nav__item">About us</li>
        </ul>
      </nav>
    </header>
  );
}

// External data
function Countries({name, population}) {
  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <span className="product__price">Population: {population}</span>
    </div>
  );
}

export default App;
