import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

// Base URL
const BASE__URL = `https://restcountries.com/v3.1/all`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`${BASE__URL}`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <section className="container">
      <div className="card__container">
        {
          countries.map(country => <Country key={country.name.common} country={country}></Country>)
        }
      </div>
    </section>
  );
};

export default Countries;
