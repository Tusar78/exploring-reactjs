import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const BASE_URL = `https://restcountries.com/v3.1/all`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <section className='section container'>
      <div className="card__container">
        {
          countries.map(country => {
            return <Country key={country.name.common} country={country}></Country>
          })
        }
      </div>
    </section>
  );
};

export default Countries;