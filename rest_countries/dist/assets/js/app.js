// Load all countries of using rest countries api.
const BASE_URL = `https://restcountries.com/v3.1/all`;
const loadCountries = (_) => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

// Display countries to UI
const displayCountries = (countries) => {
  const countryContainer = document.querySelector('.country__container');
  const countriesToHTML = countries.map((country) => getCountry(country));
  countryContainer.innerHTML = countriesToHTML.join(' ');
};

const getCountry = (country) => {
  return `
    <div class="country__card max-w-xs border border-blue-200 rounded-sm shadow-md p-2">
      <img src="${country.flags.png}" class="country__flag w-52 h-auto object-cover" alt="${country.name.common}">
      <h2 class="country__title">Name: ${country.name.common}</h2>
      <span class="country__subtitle">Capital: ${country.capital}</span>
      <p class="country__info">Population: ${country.population}</p>
    </div>
  `;
};
